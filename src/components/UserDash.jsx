import React from "react";
import { IoMdAdd } from "react-icons/io";
import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const UserDash = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-10 mx-10">
        <div>Hello User,</div>
        <button className="p-3 bg-blue-500 font-bold rounded-lg flex flex-col justify-center items-center">
          Add Tasks
          <IoMdAdd size={20} />
        </button>
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
            <td className="border px-4 py-2">12-10-2024</td>
            <td className="border px-4 py-2">Sleep</td>
            <td className="border px-4 py-2">Incomplete</td>
            <td className="border px-4 py-2">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  mr-2">
                <LuClipboardEdit size={20} />
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <MdDeleteOutline size={20} />
              </button>
            </td>
          </tbody>
          <tbody>
            <td className="border px-4 py-2">12-10-2024</td>
            <td className="border px-4 py-2">Sleep</td>
            <td className="border px-4 py-2">Incomplete</td>
            <td className="border px-4 py-2">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  mr-2">
                <LuClipboardEdit size={20} />
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <MdDeleteOutline size={20} />
              </button>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDash;
