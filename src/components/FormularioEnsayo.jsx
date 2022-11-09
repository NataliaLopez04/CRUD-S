import React from "react";
import { useState } from "react";

const FormularioEnsayo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const info = {
      id: Date.now(),
      title: title,
      description,
      completed,
    };
    console.log(info);
  };
  return (
    <div>
      <h3>Formulario</h3>
      <form action="" onSubmit={submit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="title">Description</label>
          <textarea
            id="title"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <label htmlFor="completed">Completed</label>
          <input
            type="checkbox"
            onChange={(e) => setCompleted(e.target.checked)}
            checked={completed}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormularioEnsayo;
