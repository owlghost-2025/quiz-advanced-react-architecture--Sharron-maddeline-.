import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { PRODUCTS } from "../data/products";

function ProductsPage() {
  const { dispatch, state } = useStore();
  const [added, setAdded] = useState({});

  function addToCart(product) {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setAdded(a => ({ ...a, [product.id]: true }));
    setTimeout(() => setAdded(a => ({ ...a, [product.id]: false })), 800);
  }

  return (
    <div style={{ background: "#f0ece4", minHeight: "100vh", paddingTop: "44px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>
        <p style={{ color: "#999", fontSize: "11px", letterSpacing: "2px", fontWeight: "700", margin: "0 0 4px", fontFamily: "Arial, sans-serif" }}>OUR COLLECTION</p>
        <h1 style={{ fontFamily: "'Georgia', serif", fontWeight: "900", fontSize: "44px", margin: "0 0 8px", color: "#111" }}>Featured Products</h1>
        <p style={{ fontSize: "13px", color: "#777", margin: "0 0 36px", fontFamily: "Arial, sans-serif" }}>Handpicked tech essentials for the discerning professional.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {PRODUCTS.map(p => {
            const cartItem = state.cart.find(i => i.id === p.id);
            return (
              <div key={p.id} style={{
                background: "#fff", borderRadius: "4px", padding: "16px",
                position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}>
                {p.badge && (
                  <div style={{
                    position: "absolute", top: "10px", right: "10px",
                    background: p.badge === "SALE" ? "#e74c3c" : p.badge === "NEW" ? "#27ae60" : p.badge === "PREMIUM" ? "#8e44ad" : "#e67e22",
                    color: "#fff", fontSize: "9px", fontWeight: "700", padding: "2px 7px",
                    borderRadius: "2px", letterSpacing: "1px", fontFamily: "Arial, sans-serif",
                  }}>{p.badge}</div>
                )}
                <div style={{
                  height: "100px", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "48px", marginBottom: "12px",
                }}>{p.emoji}</div>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: "600", margin: "0 0 4px", color: "#111" }}>{p.name}</p>
                <p style={{ fontSize: "14px", fontWeight: "700", color: "#e67e22", margin: "0 0 12px", fontFamily: "Arial, sans-serif" }}>
                  ${p.price.toFixed(2)}
                  {cartItem && <span style={{ fontSize: "11px", color: "#aaa", marginLeft: "6px" }}>qty {cartItem.qty}</span>}
                </p>
                <button onClick={() => addToCart(p)} style={{
                  width: "100%", background: added[p.id] ? "#27ae60" : "#111",
                  color: "#fff", border: "none", padding: "9px", borderRadius: "3px",
                  fontSize: "12px", fontWeight: "600", cursor: "pointer",
                  fontFamily: "Arial, sans-serif", transition: "background 0.2s",
                }}>
                  {added[p.id] ? "✓ Added!" : "+ Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;