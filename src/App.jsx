import Navbar from "./components/Navbar";
import Home from "./pages/Home";
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
      <header className="absolute sm:relative bottom-0 z-10">
        <Navbar scrollYValue={scrollYValue} />
      </header>
      <Outlet />
    </div>
  );
};

export default App;
