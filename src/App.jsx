import { useState } from "react";
import Home from "./pages/home/Home";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    // only for previewing change this when implementing routes
    <div className={`App ${isDark ? "dark" : ""} `}>
      <Home isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
