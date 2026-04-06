"use client";

import { useState, FormEvent } from "react";

interface InventoryInquiryFormProps {
  prefilledEquipment?: string;
}

export default function InventoryInquiryForm({ prefilledEquipment }: InventoryInquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    model: prefilledEquipment || "",
    quantity: "",
    budget: "",
    timeline: "",
    requirements: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.category) e.category = "Please select a category";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "inventory", ...form }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Submission failed");
      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10 flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-deep-blue dark:text-white mb-2">Inquiry Submitted!</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Your inquiry has been submitted! We&apos;ll respond within 24 hours.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-light-cyan focus:ring-2 focus:ring-light-cyan/20 outline-none transition-all text-sm";
  const selectClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-light-cyan focus:ring-2 focus:ring-light-cyan/20 outline-none transition-all text-sm text-gray-500 dark:text-gray-400 dark:bg-[#0d1b2a]";
  const errorClass = "text-red-500 text-xs mt-1";
  const inputErrorClass = "border-red-400 dark:border-red-400";

  return (
    <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10">
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Name *</label>
            <input type="text" className={`${inputClass} ${errors.name ? inputErrorClass : ""}`} placeholder="John Doe" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Email *</label>
            <input type="email" className={`${inputClass} ${errors.email ? inputErrorClass : ""}`} placeholder="john@hospital.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Phone *</label>
          <input type="tel" className={`${inputClass} ${errors.phone ? inputErrorClass : ""}`} placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Company/Facility Name</label>
          <input type="text" className={inputClass} placeholder="Memorial Healthcare Center" value={form.company} onChange={(e) => handleChange("company", e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Equipment Category *</label>
          <select className={`${selectClass} ${errors.category ? inputErrorClass : ""}`} value={form.category} onChange={(e) => handleChange("category", e.target.value)}>
            <option value="">Select equipment category</option>
            <option value="CT Scanner">CT Scanner</option>
            <option value="MRI">MRI</option>
            <option value="PET-CT">PET-CT</option>
            <option value="Cath Lab">Cath Lab</option>
            <option value="Mammography">Mammography</option>
            <option value="Sonography/Ultrasound">Sonography/Ultrasound</option>
            <option value="ECG Systems">ECG Systems</option>
            <option value="Multi-Parameter Monitors">Multi-Parameter Monitors</option>
          </select>
          {errors.category && <p className={errorClass}>{errors.category}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Specific Model <span className="text-gray-400 font-normal">(if known, optional)</span></label>
          <input type="text" className={inputClass} placeholder="e.g., GE Revolution EVO, Siemens SOMATOM Force" value={form.model} onChange={(e) => handleChange("model", e.target.value)} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Quantity Needed</label>
            <input type="number" min="1" className={inputClass} placeholder="1" value={form.quantity} onChange={(e) => handleChange("quantity", e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Budget Range</label>
            <select className={selectClass} value={form.budget} onChange={(e) => handleChange("budget", e.target.value)}>
              <option value="">Select budget range</option>
              <option value="Under $100K">Under $100K</option>
              <option value="$100K-$250K">$100K-$250K</option>
              <option value="$250K-$500K">$250K-$500K</option>
              <option value="$500K+">$500K+</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Delivery Timeline</label>
          <select className={selectClass} value={form.timeline} onChange={(e) => handleChange("timeline", e.target.value)}>
            <option value="">Select delivery timeline</option>
            <option value="Immediate">Immediate</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Additional Requirements</label>
          <textarea rows={4} className={`${inputClass} resize-none`} placeholder="Please provide any additional requirements, specific configurations, warranty needs, or other details..." value={form.requirements} onChange={(e) => handleChange("requirements", e.target.value)} />
        </div>

        {status === "error" && (
          <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl p-4 flex items-center justify-between">
            <p className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</p>
            <button type="button" onClick={() => setStatus("idle")} className="text-red-600 dark:text-red-400 text-sm font-semibold underline ml-4 flex-shrink-0">Retry</button>
          </div>
        )}

        <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-light-cyan text-white font-bold rounded-xl hover:bg-light-cyan/90 transition-all hover:shadow-lg text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {status === "loading" ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Inventory Inquiry"
          )}
        </button>
      </form>
    </div>
  );
}
