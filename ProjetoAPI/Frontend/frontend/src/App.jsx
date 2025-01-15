/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more2
      </p>
    </>
  )
}

export default App
*/

import React, { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import axios from "axios";

const API_URL = "http://localhost:5000/api/projects";

function App() {
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(API_URL);
      setProjects(response.data);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  const handleAddProject = async (project) => {
    try {
      const response = await axios.post(API_URL, project);
      setProjects([...projects, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar projeto:", error);
    }
  };

  const handleUpdateProject = async (updatedProject) => {
    try {
      await axios.put(`${API_URL}/${updatedProject.id}`, updatedProject);
      setProjects(projects.map(p => (p.id === updatedProject.id ? updatedProject : p)));
      setEditProject(null);
    } catch (error) {
      console.error("Erro ao atualizar projeto:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProjects(projects.filter(p => p.id !== id));
    } catch (error) {
      console.error("Erro ao deletar projeto:", error);
    }
  };

  return (
    <div className="container">
      <h1>Gerenciamento de Projetos</h1>
      <ProjectForm
        onSubmit={editProject ? handleUpdateProject : handleAddProject}
        editProject={editProject}
        setEditProject={setEditProject}
      />
      <ProjectList
        projects={projects}
        onEdit={setEditProject}
        onDelete={handleDeleteProject}
      />
    </div>
  );
}

export default App;
