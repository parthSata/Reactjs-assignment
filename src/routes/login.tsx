import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import MobileFrame from "../components/MobileFrame";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — PopX" },
      { name: "description", content: "Sign in to your PopX account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const valid = email.length > 0 && password.length > 0;

  return (
    <MobileFrame>
      <h1 className="h-title">Signin to your<br />PopX account</h1>
      <p className="h-sub">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

      <div className="field">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button
        className={`btn ${valid ? "btn-primary" : "btn-disabled"}`}
        style={{ marginTop: 22 }}
        disabled={!valid}
        onClick={() => navigate({ to: "/account" })}
      >
        Login
      </button>

      <p style={{ marginTop: 16, fontSize: 13, color: "#6c6f74" }}>
        New here? <Link to="/signup" style={{ color: "#6c25ff", fontWeight: 600 }}>Create an account</Link>
      </p>
    </MobileFrame>
  );
}