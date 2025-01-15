import React from "react";

/*
function ProjectList({ projects, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Projetos</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Prazo: {new Date(project.deadline).toLocaleDateString()}</p>
            <button onClick={() => onEdit(project)}>Editar</button>
            <button onClick={() => onDelete(project.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
*/

function ProjectList({ projects }) {
  return (
    <div>
      <h2>Lista de Projetos</h2>
      <ul>
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Prazo: {new Date(project.deadline).toLocaleDateString()}</p>
            </li>
          ))
        ) : (
          <p>Nenhum projeto encontrado.</p>
        )}
      </ul>
    </div>
  );
}
export default ProjectList;