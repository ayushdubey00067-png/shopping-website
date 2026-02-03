import { useState, useEffect } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button 
      onClick={() => setDark(!dark)}
      className="px-3 py-1 bg-gray-800 text-white rounded"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
