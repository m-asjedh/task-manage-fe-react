import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ closeModal }) => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("In complete");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your API call to add the task
      alert("Task added successfully");
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="fixed flex top-0 left-0 items-center justify-center right-0 bottom-0 bg-gray-800 bg-opacity-50">
      <div className="w-[500px] h-[450px] shadow-md border flex flex-col p-8 z-30 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">Add New Task</h2>
          <button onClick={closeModal}>Close</button>
        </div>
        <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-y-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="task">Task</label>
            <input
              id="task"
              type="text"
              className="border"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              className="border"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              className="border h-[30px]"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="In complete">In complete</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <button
            type="submit"
            className="p-2 w-[100px] bg-sky-300 flex justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
