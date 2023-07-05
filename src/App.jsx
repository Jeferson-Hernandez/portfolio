import { NavBar } from "./components/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="bg-darkBlue">
      <NavBar />
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
