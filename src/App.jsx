import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState, useRef } from "react";
import { motion as m, useScroll } from "framer-motion";
import { BrowserRouter, Routes, Outlet, Route } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(false);

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithNav
              isDark={isDark}
              setIsDark={setIsDark}
              scrollYValue={scrollYValue}
            />
          }
        >
          <Route
            path="/"
            element={<Home isDark={isDark} scrollContainer={scrollContainer} />}
          />
          {/* add pages here */}
        </Route>
      </Routes>
    </BrowserRouter>

    // // only for previewing change this when implementing routes
    // <div className={`App ${isDark ? "dark" : ""} `}>
    //   <Home isDark={isDark} setIsDark={setIsDark} />
    // </div>
  );
}

const LayoutWithNav = ({ isDark, setIsDark, scrollYValue }) => {
  return (
    <div className={`${isDark ? "dark" : " "}`}>
      <header className="sticky top-0">
        <Navbar
          isDark={isDark}
          setIsDark={setIsDark}
          scrollYValue={scrollYValue}
        />
      </header>
      <Outlet />
    </div>
  );
};

export default App;
