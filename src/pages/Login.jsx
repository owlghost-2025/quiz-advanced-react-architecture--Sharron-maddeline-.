import { useState } from "react";
import { MOCK_USERS } from "../data/users";
import { useStore } from "../context/StoreContext";

function LoginPage({ navigate }) {
  const { dispatch } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    if (!email.includes("@")) { setError("Enter a valid email address."); return; }
    if (!user) { setError("Invalid email or password."); return; }
    setError("");
    dispatch({ type: "LOGIN", payload: { email: user.email } });
    navigate("#/products");
  }

  return (
    <div style={{
      minHeight: "100vh", background: "#111", display: "flex",
      alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        background: "#f0ece4", width: "340px", borderRadius: "4px",
        overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}>
        <div style={{ height: "5px", background: "#c0392b" }} />
        <div style={{ padding: "36px 40px 40px" }}>
          <p style={{ color: "#c0392b", fontWeight: "700", fontSize: "11px", letterSpacing: "2px", margin: "0 0 8px", fontFamily: "Arial, sans-serif" }}>WELCOME BACK</p>
          <h1 style={{ fontFamily: "'Georgia', serif", fontWeight: "900", fontSize: "38px", lineHeight: 1.1, margin: "0 0 10px", color: "#111" }}>
            Sign in to your account
          </h1>
          <p style={{ fontSize: "13px", color: "#666", margin: "0 0 24px", fontFamily: "Arial, sans-serif" }}>Access your cart and continue shopping.</p>

          {error && (
            <div style={{
              border: "1px solid #e74c3c", color: "#e74c3c", background: "#fff0f0",
              padding: "10px 14px", borderRadius: "3px", fontSize: "13px", marginBottom: "14px",
              fontFamily: "Arial, sans-serif",
            }}>{error}</div>
          )}

          <label style={labelStyle}>EMAIL ADDRESS</label>
          <input
            type="email" placeholder="you@example.com" value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
            style={inputStyle}
          />

          <label style={{ ...labelStyle, marginTop: "16px" }}>PASSWORD</label>
          <input
            type="password" value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
            style={inputStyle}
          />

          <button onClick={handleSubmit} style={{
            width: "100%", background: "#111", color: "#fff", border: "none",
            padding: "14px", borderRadius: "3px", fontSize: "14px", fontWeight: "600",
            cursor: "pointer", marginTop: "20px", fontFamily: "Arial, sans-serif",
            letterSpacing: "0.5px",
          }}>Sign In →</button>

          <p style={{ fontSize: "11px", color: "#999", marginTop: "12px", fontFamily: "Arial, sans-serif" }}>
            Use any email + password (4+ chars) to sign in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

const labelStyle = {
  display: "block", fontSize: "10px", fontWeight: "700", letterSpacing: "1.5px",
  color: "#555", marginBottom: "6px", fontFamily: "Arial, sans-serif",
};
const inputStyle = {
  width: "100%", padding: "11px 12px", border: "1px solid #ddd", borderRadius: "3px",
  fontSize: "14px", background: "#fff", fontFamily: "Arial, sans-serif",
  boxSizing: "border-box", outline: "none",
};