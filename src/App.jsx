import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState, useRef, useContext } from "react";
import { useScroll } from "framer-motion";
import { BrowserRouter, Routes, Outlet, Route } from "react-router-dom";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";
function App() {
  // Make this a context??
  const scrollContainer = useRef(null);
  const { scrollY } = useScroll({
    container: scrollContainer,
  });

  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollYValue(latest);
    });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LayoutWithNav scrollYValue={scrollYValue} />}
          >
            <Route
              path="/"
              element={<Home scrollContainer={scrollContainer} />}
            />
            <Route path="/testing" element={<div className="">Hello</div>} />
            {/* add pages here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const LayoutWithNav = ({ scrollYValue }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col-reverse  sm:flex-col w-screen set-container-height ${
        isDark ? "dark" : " "
      }`}
    >
      <Navbar scrollYValue={scrollYValue} />

      <Outlet />
    </div>
  );
};

export default App;
