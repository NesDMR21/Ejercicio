export default function TaskItem({ task, onDelete, onToggle, onEdit }) {
    return (
      <div className={`p-4 bg-white rounded shadow flex justify-between items-start ${task.completed ? 'opacity-70' : ''}`}>
        <div>
          <h3 className={`text-lg font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
        </div>
        <div className="space-x-2">
          <button onClick={() => onToggle(task.id)} className="text-green-600 hover:underline">
            {task.completed ? 'Desmarcar' : 'Completar'}
          </button>
          <button onClick={() => onEdit(task)} className="text-blue-600 hover:underline">
            Editar
          </button>
          <button onClick={() => onDelete(task.id)} className="text-red-600 hover:underline">
            Eliminar
          </button>
        </div>
      </div>
    );
  }