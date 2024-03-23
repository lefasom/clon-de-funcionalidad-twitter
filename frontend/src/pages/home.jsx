import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({  title: '', description: '' });

  const getAllList = async () => {
    try {
      const resp = await axios.get('http://localhost:3000/tasks');
      setList(resp.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createItem = async () => {
    try {

      await axios.post('http://localhost:3000/tasks', formData);
      setFormData({  title: '', description: '' });
      getAllList();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const updateItem = async (id) => {
    try {

      await axios.put(`http://localhost:3000/tasks/${id}`, formData);
      setFormData({  title: '', description: '' });
      getAllList();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      getAllList();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">List of tasks</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createItem();
        }}
        className="mb-8"
      >
        <input
          type="text"
          placeholder="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Item</button>
      </form>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {list.map(({ id, title, description }) => (
            <tr key={id}>
              <td className="px-6 py-4 whitespace-nowrap">{title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{description}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => deleteItem(id)} className="text-red-500 mr-2">Delete</button>
                <button onClick={() => updateItem(id)} className="text-blue-500">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
