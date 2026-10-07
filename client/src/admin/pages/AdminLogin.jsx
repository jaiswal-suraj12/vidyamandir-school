import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, ArrowRight } from "lucide-react";
import { api } from "../../services/api";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@vidhyamandirbajitpur.edu.in");
  const [password, setPassword] = useState("Admin2vidhya25@12Mandir!");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await api.login(email, password);

      localStorage.setItem("abvm_token", data.token);
      localStorage.setItem("abvm_admin", JSON.stringify(data.admin));

      navigate("/admin/dashboard");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        {/* School Logo */}
        <div className="admin-logo-mark large">
          <img
            src="/images/school-logo.png"
            alt="Awasiya Bal Vidya Mandir School Logo"
          />
        </div>

        <span className="section-label">
          School Administration
        </span>

        <h1>Welcome Back</h1>

        <p>
          Sign in to manage your school website.
        </p>

        {error && (
          <div className="admin-error">
            {error}
          </div>
        )}

        <form onSubmit={submit}>
          <label>
            <Mail size={16} />
            Email

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            <LockKeyhole size={16} />
            Password

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button
            className="admin-primary full"
            disabled={loading}
          >
            {loading ? (
              "Signing in..."
            ) : (
              <>
                Sign In
                <ArrowRight size={17} />
              </>
            )}
          </button>
        </form>

        <small>
          Use the administrator credentials configured in server/.env.
        </small>
      </div>
    </div>
  );
}