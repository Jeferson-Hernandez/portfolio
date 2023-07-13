import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { VerticalLinks } from "./components/VerticalLinks";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { SkillPage } from "./pages/SkillPage";
import { WorkPage } from "./pages/WorkPage";

function App() {
  return (
    <main className="bg-[#1c2541]">
      <NavBar />
      <HomePage />
      <AboutPage />
      <WorkPage />
      <SkillPage />
      <Footer />
      <VerticalLinks />
    </main>
  );
}

export default App;
