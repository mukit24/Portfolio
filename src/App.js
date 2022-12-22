import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";


function App() {
  const [projects, setprojects] = useState({ loader: true, projectList: [], error: false })

  const baseURL = "https://mukitsportfolio.pythonanywhere.com/projects/";

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setprojects({ loader: false, projectList: response.data })
    }).catch((error) => {
      setprojects({ loader: false, projectList: [], error: true })
    });

  }, [])

  const tagSet = new Set()

  for (let i in projects.projectList) {
    const tagList = projects.projectList[i].tags;
    for (let j in tagList) {
      tagSet.add(tagList[j].name)
    }
  }

  const tags = [...tagSet]

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/projects' element={<Projects tags={tags}/>} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
