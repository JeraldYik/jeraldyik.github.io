import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import WorkExperiences from "./components/WorkExperiences";
// import Projects from "./components/Projects";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Projects /> */}
      <WorkExperiences />
      <Footer />
    </div>
  );
}

export default App;
