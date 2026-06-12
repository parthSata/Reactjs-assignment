import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import MobileFrame from "../components/MobileFrame";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your PopX account" },
      { name: "description", content: "Create a new PopX account." },
    ],
  }),
  component: SignupPage,
});

function Field({ label, required, value, onChange, type = "text" }: {
  label: string; required?: boolean; value: string; onChange: (v: string) => void; type?: string;
}) {
  return (
    <div className="field">
      <label>{label}{required && <span className="req">*</span>}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder="Marry Doe" />
    </div>
  );
}

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", password: "", company: "", agency: "yes",
  });
  const set = (k: string) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <MobileFrame>
      <h1 className="h-title">Create your<br />PopX account</h1>

      <Field label="Full Name" required value={form.name} onChange={set("name")} />
      <Field label="Phone number" required value={form.phone} onChange={set("phone")} />
      <Field label="Email address" required value={form.email} onChange={set("email")} type="email" />
      <Field label="Password" required value={form.password} onChange={set("password")} type="password" />
      <Field label="Company name" value={form.company} onChange={set("company")} />

      <div style={{ marginTop: 18 }}>
        <div style={{ fontSize: 13, color: "#1a1a1a" }}>
          Are you an Agency?<span className="req">*</span>
        </div>
        <div className="radio-row">
          <label className="radio">
            <input type="radio" name="agency" checked={form.agency === "yes"} onChange={() => set("agency")("yes")} />
            Yes
          </label>
          <label className="radio">
            <input type="radio" name="agency" checked={form.agency === "no"} onChange={() => set("agency")("no")} />
            No
          </label>
        </div>
      </div>

      <div className="bottom-actions">
        <button className="btn btn-primary" onClick={() => navigate({ to: "/account" })}>
          Create Account
        </button>
      </div>
    </MobileFrame>
  );
}