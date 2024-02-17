import React, { useState } from "react";
import axios from "axios";
import { RiCloseCircleLine } from "react-icons/ri";

const AddTask = ({ onTaskCreate, isAddTaskModalOpen }) => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("In complete");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task || !date) {
      setError("Task name and date are required.");
      return;
    }
    const userId = window.localStorage.getItem("userId");
    try {
      await axios.post(
        `http://localhost:8080/api/v1/taskManager/create/${userId}`,
        {
          task,
          taskStatus: status,
          taskDate: date,
        }
      );
      onTaskCreate();
      handleClose();
      window.location.reload();
    } catch (err) {
      console.error("Error creating task:", err);
      setError("An error occurred while creating the task. Please try again.");
    }
  };

  const handleClose = () => {
    setTask("");
    setStatus("In complete");
    setDate("");
    setError("");
    onTaskCreate();
  };

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-50 ${
        isAddTaskModalOpen ? "" : "hidden"
      }`}
    >
      <div className="w-[500px] shadow-md border bg-white rounded-lg p-8 relative">
        <button className="absolute top-2 right-2" onClick={handleClose}>
          <RiCloseCircleLine size={24} />
        </button>
        <h2 className="font-semibold text-xl mb-6">Add New Task</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="task" className="block mb-2">
              Task
            </label>
            <input
              id="task"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="border px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-2">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block mb-2">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border px-4 py-2 w-full"
            >
              <option value="In complete">In complete</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
