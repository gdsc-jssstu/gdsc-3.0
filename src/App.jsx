import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import { useEffect, useState, useRef, useContext } from "react";
import { useScroll } from "framer-motion";
import { BrowserRouter, Routes, Outlet, Route } from "react-router-dom";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";

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
    <div className={`${isDark ? "dark" : " "}`}>
      <header className="sticky top-0">
        <Navbar scrollYValue={scrollYValue} />
      </header>
      <Outlet />
    </div>
  );
};

export default App;
