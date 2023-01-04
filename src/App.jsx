import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
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
            <Route
              path="/Projects"
              element={<Projects scrollContainer={scrollContainer} />}
            />
            <Route
              path="/Events"
              element={<Events scrollContainer={scrollContainer} />}
            />
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
      className={`flex flex-col-reverse  sm:flex-col w-full set-container-height md:h-full ${
        isDark ? "dark" : " "
      }`}
    >
      <Navbar scrollYValue={scrollYValue} />

      <Outlet />
    </div>
  );
};

export default App;
