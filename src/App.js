import Header from './Sections/Header';
import Footer from './Sections/Footer';
import HomeSection from './Sections/HomeSection';
import AboutSection from './Sections/AboutSection';
import SkillsSection from './Sections/SkillsSection';
import ProjectsSection from './Sections/ProjectsSection';
import ContactSection from './Sections/ContactSection';

function App() {
  return (
    <div className="App">
        <div className="container"> 
          <Header/>  
          <main class="mt-5">
            <HomeSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
          </main>
          <Footer/>
        </div>
    </div>
  );
}

export default App;

