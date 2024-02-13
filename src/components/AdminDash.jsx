import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const AdminDash = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-10 mx-10">
        <div className="text-3xl font-semibold">Hello Admin,</div>
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
            <td className="border px-4 py-2">Mohamed Asjedh</td>
            <td className="border px-4 py-2">m.asjedhcr7@gmail.com</td>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <MdDeleteOutline size={20} />
              </button>
            </td>
          </tbody>
          <tbody>
            <td className="border px-4 py-2">Mohamed Asjedh</td>
            <td className="border px-4 py-2">m.asjedhcr7@gmail.com</td>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">
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

export default AdminDash;
