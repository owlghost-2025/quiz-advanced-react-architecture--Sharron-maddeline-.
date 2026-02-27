import { useStore } from "../context/StoreContext";

function Navbar({ navigate, route }) {
  const { state, dispatch } = useStore();
  function logout() {
    dispatch({ type: "LOGOUT" });
    navigate("#/login");
  }
  const NavLink = ({ label, path, route, navigate, badge, badgeCount }) => {
    const isActive = route === path;
    return (
      <a
        href={path}
        onClick={(e) => { e.preventDefault(); navigate(path); }}
        style={{
          color: isActive ? "#fff" : "#aaa",
          textDecoration: "none",
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
          fontWeight: 600,
          position: "relative",
        }}
      >
        {label}
        {badge && (
          <span style={{
            position: "absolute",
            top: "-8px",
            right: "-12px",
            background: "#e74c3c",
            color: "#fff",
            fontSize: "9px",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
          }}>
            {badgeCount}
          </span>
        )}
      </a>
    );
  };

  return (
    <nav style={{
      background: "#111", color: "#fff", display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 24px", height: "44px",
      fontFamily: "'Arial Black', sans-serif", fontSize: "13px", position: "fixed",
      top: 0, left: 0, right: 0, zIndex: 100,
    }}>
      <span style={{ fontWeight: 900, letterSpacing: "1px", fontSize: "15px" }}>
        <span style={{ color: "#fff" }}>OB</span>
        <span style={{ color: "#c0392b" }}>SI</span>
        <span style={{ color: "#fff" }}>DIAN</span>
      </span>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span style={{ color: "#aaa", fontSize: "12px" }}>{state.user?.email}</span>
        <NavLink label="Products" path="#/products" route={route} navigate={navigate} />
        <NavLink
          label={`Checkout${state.totalItems > 0 ? ` ${state.totalItems}` : ""}`}
          path="#/checkout"
          route={route}
          navigate={navigate}
          badge={state.totalItems > 0}
          badgeCount={state.totalItems}
        />
        <button onClick={logout} style={{
          background: "none", border: "none", color: "#e74c3c", cursor: "pointer",
          fontSize: "12px", fontFamily: "inherit", padding: 0,
        }}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;

function NavLink({ label, path, route, navigate, badge, badgeCount }) {
  const active = route === path;
  return (
    <a onClick={() => navigate(path)} style={{
      color: active ? "#e67e22" : "#ccc", cursor: "pointer", textDecoration: "none",
      fontSize: "12px", fontWeight: active ? "bold" : "normal", position: "relative",
    }}>
      {label}
      {badge && (
        <span style={{
          background: "#e67e22", color: "#fff", borderRadius: "50%", fontSize: "9px",
          padding: "1px 4px", position: "absolute", top: "-6px", right: "-10px",
        }}>{badgeCount}</span>
      )}
    </a>
  );
}