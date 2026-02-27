import { useStore } from "../context/StoreContext";

function SummaryPage({ navigate, orderInfo }) {
  const { state } = useStore();
  return (
    <div style={{ background: "#f0ece4", minHeight: "100vh", paddingTop: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: "500px", padding: "40px 24px" }}>
        <div style={{
          width: "64px", height: "64px", background: "#27ae60", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px", fontSize: "28px",
        }}>✓</div>
        <h1 style={{ fontFamily: "'Georgia', serif", fontWeight: "900", fontSize: "48px", margin: "0 0 12px", color: "#111", lineHeight: 1.1 }}>Order Confirmed!</h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#777", margin: "0 0 6px" }}>Thank you, {state.user?.email}.</p>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#777", margin: "0 0 32px" }}>Your order has been placed successfully.</p>

        <div style={{
          background: "#fff", borderRadius: "4px", padding: "20px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "28px",
        }}>
          <div>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#aaa", letterSpacing: "1px", marginBottom: "4px" }}>ITEMS</p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "700", color: "#111", margin: 0 }}>{orderInfo?.totalItems || 0}</p>
          </div>
          <div>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#aaa", letterSpacing: "1px", marginBottom: "4px" }}>TOTAL PRICE</p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "700", color: "#e74c3c", margin: 0 }}>${orderInfo?.totalPrice?.toFixed(2) || "0.00"}</p>
          </div>
          <div>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#aaa", letterSpacing: "1px", marginBottom: "4px" }}>STATUS</p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: "700", color: "#27ae60", margin: 0 }}>Processing...</p>
          </div>
        </div>

        <button onClick={() => navigate("#/products")} style={{
          background: "#111", color: "#fff", border: "none", padding: "13px 28px",
          borderRadius: "3px", fontSize: "13px", fontWeight: "600", cursor: "pointer",
          fontFamily: "Arial, sans-serif",
        }}>Continue Shopping →</button>
      </div>
    </div>
  );
}

export default SummaryPage;