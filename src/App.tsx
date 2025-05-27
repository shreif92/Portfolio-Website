import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Loading from "./components/LoadingThreeDotsPulse";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container m-auto">
        <Banner />

        <div ref={aboutRef} id="about">
          {aboutInView && (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          )}
        </div>

        <div ref={projectsRef} id="projects">
          {projectsInView && (
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          )}
        </div>

        <div ref={skillsRef} id="skills">
          {skillsInView && (
            <Suspense fallback={<Loading />}>
              <Skills />
            </Suspense>
          )}
        </div>

        <div ref={contactRef} id="contact">
          {contactInView && (
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
