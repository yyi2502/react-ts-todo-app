import { TodoType } from "../App";

// TODO表示
interface TodoViewProps {
  view: "completed" | "incomplete";
  filter: { incomplete: boolean; completed: boolean };
  todos: TodoType[];
  onChangeTodoCompleted: (id: string) => void;
  onClickEdit: (todo: TodoType) => void;
  onClickDelete: (id: string) => void;
}

const TodoView: React.FC<TodoViewProps> = ({
  view,
  filter,
  todos,
  onChangeTodoCompleted,
  onClickEdit,
  onClickDelete,
}) => {
  const filteredTodos = () => {
    // 表示エリア判定（完了or未完了）＆絞り込み判定
    if (
      (view === "incomplete" && filter.incomplete) ||
      (view === "completed" && filter.completed)
    ) {
      return todos.filter((todo) =>
        view === "incomplete" ? !todo.completed : todo.completed
      );
    } else {
      return []; // または空の配列を返す
    }
  };

  return (
    <div>
      <ul>
        {filteredTodos().map((todo) => {
          return (
            <li
              key={todo.id}
              className={`flex items-center gap-4 mt-2 p-4 w-full rounded ${view === "completed" ? "bg-gray-100 hover:bg-gray-50" : "bg-gray-50 hover:bg-white"}`}
            >
              <label
                htmlFor={todo.id}
                className="flex flex-auto gap-4 cursor-pointer"
              >
                <input
                  id={todo.id}
                  type="checkbox"
                  value="completed"
                  onChange={() => onChangeTodoCompleted(todo.id)}
                  checked={todo.completed}
                  className="cursor-pointer"
                />

                <div
                  className={`w-full ${view === "completed" ? "line-through" : ""}`}
                >
                  <p>{todo.text}</p>
                  <p className="text-sm text-gray-400">(id: {todo.id})</p>
                  {todo.detail && (
                    <p className="text-sm text-gray-400">{todo.detail}</p>
                  )}
                </div>
              </label>

              <button
                onClick={() => onClickEdit(todo)}
                className="block flex-none py-2 px-3 rounded bg-sky-700 text-white justify-center cursor-pointer hover:bg-sky-500"
              >
                編集
              </button>

              <button
                onClick={() => onClickDelete(todo.id)}
                className="block flex-none py-2 px-3 rounded bg-sky-700 text-white justify-center cursor-pointer hover:bg-sky-500"
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoView;
