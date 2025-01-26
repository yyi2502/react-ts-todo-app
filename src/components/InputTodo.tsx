import { TodoType } from "../App";

// 入力フォーム
interface InputTodoProps {
  todo: TodoType;
  onChangeTodo: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTodoDetail: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickAdd: () => void;
}

const InputTodo: React.FC<InputTodoProps> = ({
  todo,
  onChangeTodo,
  onChangeTodoDetail,
  onClickAdd,
}) => {
  return (
    <div className="rounded mt-6">
      <div className="flex gap-2 items-start">
        <div className="w-4/5">
          <input
            type="text"
            placeholder="タスクの追加"
            value={todo.text}
            onChange={(event) => onChangeTodo(event)}
            className="block w-full mb-2 py-2 px-3 text-gray-700 border border-gray-200 rounded bg-white cursor-text focus:outline-none focus:border-blue-200"
          />
          <textarea
            placeholder="詳細（任意）"
            value={todo.detail}
            onChange={(event) => onChangeTodoDetail(event)}
            className="block w-full py-2 px-3 text-gray-700 border border-gray-200 rounded bg-white cursor-text focus:outline-none focus:border-blue-200"
          />
        </div>
        <button
          onClick={onClickAdd}
          className="block py-2 w-1/5 rounded bg-sky-700 text-white justify-center cursor-pointer hover:bg-sky-500"
        >
          追加
        </button>
      </div>
    </div>
  );
};
export default InputTodo;
