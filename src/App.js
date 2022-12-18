import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' exact element={<HomePage />}/>
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:id' element={<ProjectDetails />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
