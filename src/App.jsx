import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { VerticalLinks } from "./components/VerticalLinks";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { SkillPage } from "./pages/SkillPage";
import { WorkPage } from "./pages/WorkPage";

function App() {
  return (
    <main className="content">
      <NavBar />
      <HomePage />
      <AboutPage />
      <WorkPage />
      <SkillPage />
      <ContactPage />
      <Footer />
      <VerticalLinks />
    </main>
  );
}

export default App;
