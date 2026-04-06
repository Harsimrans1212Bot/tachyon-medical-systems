"use client";

import { useState, FormEvent } from "react";

export default function ServicesInquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    equipmentType: "",
    location: "",
    startDate: "",
    siteReadiness: "",
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
    if (!form.serviceType) e.serviceType = "Please select a service type";
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
        body: JSON.stringify({ type: "service", ...form }),
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
        <h3 className="text-xl font-bold text-deep-blue dark:text-white mb-2">Request Submitted!</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Your inquiry has been submitted! We&apos;ll respond within 24 hours.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm";
  const selectClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm text-gray-500 dark:text-gray-400 dark:bg-[#0d1b2a]";
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
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Service Type *</label>
          <select className={`${selectClass} ${errors.serviceType ? inputErrorClass : ""}`} value={form.serviceType} onChange={(e) => handleChange("serviceType", e.target.value)}>
            <option value="">Select service type</option>
            <option value="Installation">Installation</option>
            <option value="Uninstallation">Uninstallation</option>
            <option value="Relocation">Relocation</option>
            <option value="Preventive Maintenance">Preventive Maintenance</option>
            <option value="Emergency Repair">Emergency Repair</option>
            <option value="Site Survey">Site Survey</option>
          </select>
          {errors.serviceType && <p className={errorClass}>{errors.serviceType}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Equipment Type & Model</label>
          <input type="text" className={inputClass} placeholder="e.g., GE Revolution EVO CT Scanner, Siemens SOMATOM Force" value={form.equipmentType} onChange={(e) => handleChange("equipmentType", e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Equipment Location / Site Address</label>
          <textarea rows={2} className={`${inputClass} resize-none`} placeholder="Please provide the complete facility address where services are needed..." value={form.location} onChange={(e) => handleChange("location", e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Preferred Start Date</label>
          <input type="date" className={inputClass} value={form.startDate} onChange={(e) => handleChange("startDate", e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Site Readiness</label>
          <select className={selectClass} value={form.siteReadiness} onChange={(e) => handleChange("siteReadiness", e.target.value)}>
            <option value="">Select site readiness</option>
            <option value="Ready">Ready</option>
            <option value="In preparation">In preparation</option>
            <option value="Need guidance">Need guidance</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Special Requirements</label>
          <textarea rows={4} className={`${inputClass} resize-none`} placeholder="e.g., crane access requirements, electrical specifications, shielding work, special logistics, etc." value={form.requirements} onChange={(e) => handleChange("requirements", e.target.value)} />
        </div>

        {status === "error" && (
          <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl p-4 flex items-center justify-between">
            <p className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</p>
            <button type="button" onClick={() => setStatus("idle")} className="text-red-600 dark:text-red-400 text-sm font-semibold underline ml-4 flex-shrink-0">Retry</button>
          </div>
        )}

        <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-orange text-white font-bold rounded-xl hover:bg-orange/90 transition-all hover:shadow-lg text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {status === "loading" ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Service Request"
          )}
        </button>
      </form>
    </div>
  );
}
