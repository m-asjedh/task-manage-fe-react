import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import AddTask from "./AddTask";
import { useNavigate } from "react-router-dom";

const UserDash = () => {
  const fetchUserTasks = async (userId) => {
    const response = await axios.get(
      `http://localhost:8080/api/v1/taskManager/tasks/${userId}`
    );
    return response.data;
  };

  const deleteUserTask = async (userId, taskId) => {
    await axios.delete(
      `http://localhost:8080/api/v1/taskManager/tasks/${userId}/${taskId}`
    );

    fetchUserTasks(userId);
  };

  const completeUserTask = async (userId, taskId, task) => {
    await axios.put(
      `http://localhost:8080/api/v1/taskManager/tasks/${userId}/${taskId}`,
      {
        task: task,
        taskStatus: "Complete",
      }
    );

    fetchUserTasks(userId);
  };

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    if (userId) {
      fetchUserTasks(userId)
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching tasks:", error))
        .finally(() => setIsLoading(false));
    }
  }, []);

  const handleDeleteTask = async (taskId) => {
    const userId = window.localStorage.getItem("userId");
    if (userId) {
      await deleteUserTask(userId, taskId);
      window.location.reload();
    }
  };

  const handleCompleteTask = async (taskId, task) => {
    const userId = window.localStorage.getItem("userId");
    if (userId) {
      await completeUserTask(userId, taskId, task);
      window.location.reload();
    }
  };

  const openAddTaskModal = () => {
    setIsAddTaskModalOpen(true);
  };

  const userLogout = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-between items-center my-10 mx-10">
        <div>Hello User,</div>
        <div className="flex gap-4">
          <button
            className="p-3 bg-blue-500 font-bold rounded-lg flex flex-col justify-center items-center"
            onClick={openAddTaskModal}
          >
            Add Tasks
            <IoMdAdd size={20} />
          </button>
          <button
            className="p-3 bg-red-500 text-white font-bold rounded-lg flex flex-col justify-center items-center"
            onClick={userLogout}
          >
            Logout
          </button>
        </div>
        {isAddTaskModalOpen && (
          <AddTask
            isAddTaskModalOpen={isAddTaskModalOpen}
            onTaskCreate={() => setIsAddTaskModalOpen(false)}
          />
        )}
      </div>
      <div className="overflow-x-auto m-20">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((task) => (
              <tr key={task.taskId}>
                <td className="border px-4 py-2">{task.taskDate}</td>
                <td className="border px-4 py-2">{task.task}</td>
                <td className="border px-4 py-2">{task.taskStatus}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleCompleteTask(task.taskId, task.task)}
                    disabled={task.taskStatus === "Complete"}
                  >
                    <LuClipboardEdit size={20} />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteTask(task.taskId)}
                  >
                    <MdDeleteOutline size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDash;
