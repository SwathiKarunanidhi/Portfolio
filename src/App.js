import { lazy, Suspense } from "react";
import "./App.css";
import Home from "./components/Home";
import { LazyReveal } from "./components/LazyReveal";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";
const Experience = lazy(() =>
  import("./components/Experience").then((module) => ({
    default: module.Experience,
  }))
);
function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Home />
      <LazyReveal>
        <Suspense fallback={<p>Loading...</p>}>
          <Experience />
        </Suspense>
      </LazyReveal>
    </ThemeProvider>
  );
}

export default App;
