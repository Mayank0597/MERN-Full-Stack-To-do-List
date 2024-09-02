import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input
        type="text"
        name=""
        className="create_form_input"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" className="create_form_button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
