import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDash = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const data = await axios.get(
      `http://localhost:8080/api/v1/taskManager/users`
    );
    return data;
  };

  const deleteUser = async (id) => {
    const data = await axios.delete(
      `http://localhost:8080/api/v1/taskManager/deleteUsers/${id}`
    );
    return data;
  };

  useEffect(() => {
    async function getData() {
      await fetchUsers().then((res) => setUsers(res.data));
    }
    getData();
  }, []);

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    window.location.reload();
  };

  const userLogout = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-between items-center my-10 mx-10">
        <div className="text-3xl font-semibold">Hello Admin,</div>
        <button
          className="p-3 bg-red-500 text-white font-bold rounded-lg flex flex-col justify-center items-center"
          onClick={userLogout}
        >
          Logout
        </button>
      </div>
      <div className="overflow-x-auto m-20">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Number of Tasks</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.tasks.length}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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

export default AdminDash;
