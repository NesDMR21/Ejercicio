export default function TaskStats({ tasks }) {
    const total = tasks.length;
    const pending = tasks.filter(t => !t.completed).length;
  
    return (
      <div className="mt-4 text-center text-gray-700">
        <p>Total: {total} | Pendientes: {pending}</p>
      </div>
    );
  }
  