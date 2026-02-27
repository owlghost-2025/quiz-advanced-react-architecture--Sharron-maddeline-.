import { useState, useEffect } from "react";

function useRoute() {
  const [route, setRoute] = useState(window.location.hash || "#/login");
  useEffect(() => {
    const handler = () => setRoute(window.location.hash || "#/login");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  const navigate = (path) => { window.location.hash = path; };
  return { route, navigate };
}

export { useRoute };
