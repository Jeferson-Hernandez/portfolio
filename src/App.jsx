import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { SkillPage } from "./pages/SkillPage";
import { WorkPage } from "./pages/WorkPage";

function App() {
  return (
    <main className="bg-darkBlue">
      <NavBar />
      <HomePage />
      <AboutPage />
      <WorkPage />
      <SkillPage />
      <Footer />
    </main>
  );
}

export default App;
