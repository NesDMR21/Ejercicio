import { useEffect, useState } from 'react';

export default function TaskForm({ addTask, editingTask, updateTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const task = { title, description };
    editingTask ? updateTask({ ...editingTask, ...task }) : addTask(task);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <input
        type="text"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full mb-2 p-2 border rounded"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editingTask ? 'Actualizar' : 'Agregar'} Tarea
      </button>
    </form>
  );
}
