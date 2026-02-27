import { useStore } from "../context/StoreContext";

function CheckoutPage({ navigate }) {
  const { state, dispatch } = useStore();

  function placeOrder() {
    dispatch({ type: "CLEAR_CART" });
    navigate("#/summary");
  }

  if (state.cart.length === 0) {
    return (
      <div style={{ background: "#f0ece4", minHeight: "100vh", paddingTop: "44px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "40px 24px" }}>
          <p style={{ color: "#999", fontSize: "11px", letterSpacing: "2px", fontWeight: "700", margin: "0 0 4px", fontFamily: "Arial, sans-serif" }}>CHECKOUT</p>
          <h1 style={{ fontFamily: "'Georgia', serif", fontWeight: "900", fontSize: "44px", margin: "0 0 40px", color: "#111" }}>Your Cart</h1>
          <div style={{ textAlign: "center", padding: "80px 0", color: "#aaa" }}>
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>🛒</div>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "15px", fontWeight: "600", color: "#777" }}>Your cart is empty</p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#aaa" }}>Add some products before checking out.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#f0ece4", minHeight: "100vh", paddingTop: "44px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "40px 24px" }}>
        <p style={{ color: "#999", fontSize: "11px", letterSpacing: "2px", fontWeight: "700", margin: "0 0 4px", fontFamily: "Arial, sans-serif" }}>CHECKOUT</p>
        <h1 style={{ fontFamily: "'Georgia', serif", fontWeight: "900", fontSize: "44px", margin: "0 0 4px", color: "#111" }}>Your Cart</h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#888", marginBottom: "28px" }}>{state.totalItems} items ready for purchase</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "20px", alignItems: "start" }}>
          <div>
            {state.cart.map(item => (
              <div key={item.id} style={{
                background: "#fff", borderRadius: "4px", padding: "16px 20px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                marginBottom: "10px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "28px" }}>{item.emoji}</span>
                  <div>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: "600", margin: 0, color: "#111" }}>{item.name}</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#aaa", margin: "2px 0 0" }}>Qty {item.qty} · ${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", fontWeight: "700", color: "#e67e22" }}>
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div style={{ background: "#111", borderRadius: "4px", padding: "24px", color: "#fff" }}>
            <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "20px", margin: "0 0 20px", fontWeight: "700" }}>Order Summary</h3>
            {state.cart.map(item => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", color: "#bbb" }}>{item.name.split(" ").slice(0, 2).join(" ")} ×{item.qty}</span>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", color: "#fff" }}>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #333", paddingTop: "10px", marginTop: "10px" }}>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", color: "#bbb" }}>Shipping</span>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", color: "#27ae60" }}>Free</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "15px", fontWeight: "700" }}>Total</span>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "15px", fontWeight: "700", color: "#e67e22" }}>${state.totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={placeOrder} style={{
              width: "100%", background: "#e67e22", color: "#fff", border: "none",
              padding: "13px", borderRadius: "3px", fontSize: "13px", fontWeight: "700",
              cursor: "pointer", marginTop: "20px", fontFamily: "Arial, sans-serif",
            }}>Place Order →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;