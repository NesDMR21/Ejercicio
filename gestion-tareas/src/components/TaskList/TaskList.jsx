import TaskItem from '../TaskItem/TaskItem';

export default function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No hay tareas.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
        ))
      )}
    </div>
  );
}