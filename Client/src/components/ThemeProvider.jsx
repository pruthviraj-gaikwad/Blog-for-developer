import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return <div className="min-h-screen">{children}</div>;
}
