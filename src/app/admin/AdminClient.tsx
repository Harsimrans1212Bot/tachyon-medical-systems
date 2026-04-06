"use client";

import { useState, useEffect, useCallback } from "react";
import { allMachines as initialMachines, categories } from "@/data/inventory";
import type { Machine } from "@/data/inventory";

/* ──────────────────────────── Types ──────────────────────────── */

interface Submission {
  date: string;
  type: string;
  name: string;
  email: string;
  phone?: string;
  equipment?: string;
  service?: string;
  message?: string;
  status?: string;
  [key: string]: unknown;
}

/* ──────────────────────────── Auth Gate ──────────────────────── */

function LoginScreen({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        sessionStorage.setItem("admin_auth", "true");
        onAuth();
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-gray-800 rounded-xl p-8 w-full max-w-sm space-y-5"
      >
        <h1 className="text-xl font-bold text-white text-center">
          Tachyon Admin
        </h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-medium rounded-lg transition"
        >
          {loading ? "Checking..." : "Access Admin Panel"}
        </button>
      </form>
    </div>
  );
}

/* ──────────────────────────── Edit Modal ─────────────────────── */

const MACHINE_FIELDS: { key: keyof Machine; label: string; type?: string }[] = [
  { key: "name", label: "Name" },
  { key: "slug", label: "Slug" },
  { key: "category", label: "Category" },
  { key: "manufacturer", label: "Manufacturer" },
  { key: "price", label: "Price" },
  { key: "condition", label: "Condition" },
  { key: "warranty", label: "Warranty" },
  { key: "image", label: "Image Path" },
  { key: "description", label: "Description", type: "textarea" },
];

function EditModal({
  machine,
  onSave,
  onClose,
}: {
  machine: Machine | null;
  onSave: (m: Machine) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<Machine>(
    machine || {
      slug: "",
      name: "",
      category: categories[0]?.name || "",
      manufacturer: "",
      price: "",
      condition: "Refurbished",
      image: "",
      specifications: {},
      description: "",
      features: [],
      warranty: "",
    }
  );
  const [featuresText, setFeaturesText] = useState(
    (machine?.features || []).join("\n")
  );
  const [specsText, setSpecsText] = useState(
    Object.entries(machine?.specifications || {})
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n")
  );

  const set = (key: keyof Machine, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSave = () => {
    const features = featuresText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    const specifications: Record<string, string> = {};
    specsText
      .split("\n")
      .filter(Boolean)
      .forEach((line) => {
        const idx = line.indexOf(":");
        if (idx > 0) {
          specifications[line.slice(0, idx).trim()] = line
            .slice(idx + 1)
            .trim();
        }
      });
    onSave({ ...form, features, specifications });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 overflow-y-auto p-4 pt-12">
      <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-lg p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">
            {machine ? "Edit Equipment" : "Add Equipment"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">
            &times;
          </button>
        </div>

        {MACHINE_FIELDS.map(({ key, label, type }) => (
          <div key={key}>
            <label className="text-sm text-gray-400 block mb-1">{label}</label>
            {key === "category" ? (
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
              >
                {categories.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            ) : type === "textarea" ? (
              <textarea
                rows={3}
                value={form[key] as string}
                onChange={(e) => set(key, e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
              />
            ) : (
              <input
                type="text"
                value={form[key] as string}
                onChange={(e) => set(key, e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
              />
            )}
          </div>
        ))}

        <div>
          <label className="text-sm text-gray-400 block mb-1">
            Features (one per line)
          </label>
          <textarea
            rows={3}
            value={featuresText}
            onChange={(e) => setFeaturesText(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-1">
            Specifications (Key: Value, one per line)
          </label>
          <textarea
            rows={3}
            value={specsText}
            onChange={(e) => setSpecsText(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={handleSave}
            className="flex-1 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-medium transition"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────── Inventory Tab ──────────────────── */

function InventoryTab() {
  const [machines, setMachines] = useState<Machine[]>([...initialMachines]);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Machine | null | "new">(null);

  const filtered = machines.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase()) ||
      m.manufacturer.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (updated: Machine) => {
    setMachines((prev) => {
      const idx = prev.findIndex((m) => m.slug === updated.slug);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = updated;
        return next;
      }
      return [...prev, updated];
    });
    setEditing(null);
  };

  const handleDelete = (slug: string) => {
    if (confirm("Delete this equipment?")) {
      setMachines((prev) => prev.filter((m) => m.slug !== slug));
    }
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(machines, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inventory.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="bg-amber-900/40 border border-amber-700 rounded-lg px-4 py-2 text-amber-300 text-sm">
        Changes are preview-only. To persist, export and update the data file.
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by name, category, or manufacturer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          onClick={() => setEditing("new")}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-medium whitespace-nowrap transition"
        >
          + Add New Equipment
        </button>
        <button
          onClick={exportData}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium whitespace-nowrap transition"
        >
          Export Data
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-800">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3 hidden md:table-cell">Category</th>
              <th className="px-4 py-3 hidden sm:table-cell">Manufacturer</th>
              <th className="px-4 py-3 hidden lg:table-cell">Price</th>
              <th className="px-4 py-3 hidden lg:table-cell">Condition</th>
              <th className="px-4 py-3 hidden xl:table-cell">Warranty</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m, i) => (
              <tr
                key={m.slug}
                className={`border-t border-gray-800 hover:bg-gray-800/50 ${
                  i % 2 === 0 ? "bg-gray-900" : "bg-gray-900/60"
                }`}
              >
                <td className="px-4 py-3 text-white font-medium">{m.name}</td>
                <td className="px-4 py-3 text-gray-400 hidden md:table-cell">{m.category}</td>
                <td className="px-4 py-3 text-gray-400 hidden sm:table-cell">{m.manufacturer}</td>
                <td className="px-4 py-3 text-gray-400 hidden lg:table-cell">{m.price}</td>
                <td className="px-4 py-3 text-gray-400 hidden lg:table-cell">{m.condition}</td>
                <td className="px-4 py-3 text-gray-400 hidden xl:table-cell">{m.warranty}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    onClick={() => setEditing(m)}
                    className="text-cyan-400 hover:text-cyan-300 text-xs font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(m.slug)}
                    className="text-red-400 hover:text-red-300 text-xs font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                  No equipment found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="text-gray-500 text-xs">
        {filtered.length} of {machines.length} items shown
      </p>

      {editing !== null && (
        <EditModal
          machine={editing === "new" ? null : editing}
          onSave={handleSave}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}

/* ──────────────────────────── Submissions Tab ────────────────── */

function SubmissionsTab() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/submissions")
      .then((r) => r.json())
      .then(setSubmissions)
      .catch(() => setSubmissions([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-gray-400 py-8 text-center">Loading submissions...</p>;
  }

  if (submissions.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No submissions yet</p>
        <p className="text-gray-600 text-sm mt-1">
          Form submissions from tachyonmed.com will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-800">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-800 text-gray-300">
          <tr>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3 hidden sm:table-cell">Email</th>
            <th className="px-4 py-3 hidden md:table-cell">Equipment/Service</th>
            <th className="px-4 py-3 hidden lg:table-cell">Status</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((s, i) => (
            <>
              <tr
                key={i}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className={`border-t border-gray-800 cursor-pointer hover:bg-gray-800/50 ${
                  i % 2 === 0 ? "bg-gray-900" : "bg-gray-900/60"
                }`}
              >
                <td className="px-4 py-3 text-gray-400">
                  {s.date ? new Date(s.date).toLocaleDateString() : "—"}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-medium ${
                      s.type === "inventory"
                        ? "bg-cyan-900 text-cyan-300"
                        : "bg-purple-900 text-purple-300"
                    }`}
                  >
                    {s.type || "general"}
                  </span>
                </td>
                <td className="px-4 py-3 text-white">{s.name || "—"}</td>
                <td className="px-4 py-3 text-gray-400 hidden sm:table-cell">
                  {s.email || "—"}
                </td>
                <td className="px-4 py-3 text-gray-400 hidden md:table-cell">
                  {s.equipment || s.service || "—"}
                </td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-700 text-gray-300">
                    {s.status || "new"}
                  </span>
                </td>
              </tr>
              {expanded === i && (
                <tr key={`${i}-detail`} className="bg-gray-800/30">
                  <td colSpan={6} className="px-6 py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {Object.entries(s).map(([k, v]) => (
                        <div key={k}>
                          <span className="text-gray-500 capitalize">
                            {k}:{" "}
                          </span>
                          <span className="text-gray-300">
                            {String(v || "—")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ──────────────────────────── Main Dashboard ─────────────────── */

export default function AdminClient() {
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<"inventory" | "submissions">("inventory");

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setAuthed(true);
    }
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem("admin_auth");
    setAuthed(false);
  }, []);

  if (!authed) return <LoginScreen onAuth={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">Tachyon Admin Panel</h1>
          <p className="text-xs text-gray-500">
            Tachyon Medical Systems Pvt. Ltd.
          </p>
        </div>
        <button
          onClick={logout}
          className="text-sm text-gray-400 hover:text-white transition"
        >
          Logout
        </button>
      </header>

      {/* Tabs */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 flex gap-6">
          {(
            [
              ["inventory", "Inventory"],
              ["submissions", "Submissions"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`py-3 text-sm font-medium border-b-2 transition ${
                tab === key
                  ? "border-cyan-500 text-cyan-400"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        {tab === "inventory" ? <InventoryTab /> : <SubmissionsTab />}
      </main>
    </div>
  );
}
