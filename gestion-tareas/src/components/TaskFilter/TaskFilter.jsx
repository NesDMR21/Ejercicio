export default function TaskFilter({ filter, setFilter }) {
    const filters = ['all', 'active', 'completed'];
  
    return (
      <div className="flex justify-center space-x-4 my-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded ${filter === f ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border'}`}
          >
            {f === 'all' ? 'Todas' : f === 'active' ? 'Activas' : 'Completadas'}
          </button>
        ))}
      </div>
    );
  }