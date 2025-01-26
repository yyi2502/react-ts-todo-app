import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import TodoFilterCheckbox from "./components/TodoFilterCheckbox";
import TodoView from "./components/TodoView";
import InputTodo from "./components/InputTodo";

export interface TodoType {
  id: string;
  text: string;
  completed: boolean;
  detail?: string;
}

const App = () => {
  // 期日の追加
  // 当日だったらフラグを付ける
  // ドラッグでソート
  // タスク自体で編集

  interface FilterType {
    incomplete: boolean;
    completed: boolean;
  }

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todo, setTodo] = useState<TodoType>({
    id: "",
    text: "",
    completed: false,
    detail: "",
  });

  const [filter, setFilter] = useState<FilterType>({
    incomplete: true,
    completed: true,
  });

  // TODO入力時（onChange()）の処理
  const onChangeTodo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const targetText = event.target.value;
    setTodo({
      text: targetText,
      id: todo.id,
      completed: todo.completed || false, //completedがtrueでなかったら、falseに
      detail: todo.detail,
    });
  };

  // TODO詳細入力時の処理
  const onChangeTodoDetail = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const targetText = event.target.value;
    setTodo({ ...todo, detail: targetText });
  };

  // 追加ボタン
  const onClickAdd = (): void => {
    if (todo.text === "") return; // 未入力なら除外
    setTodos([...todos, { ...todo, id: todo.id || uuid() }]); // id入っていなかったらuuid生成
    setTodo({ id: "", text: "", completed: false, detail: "" }); // todoリセット
  };

  // 削除ボタン
  const onClickDelete = (thisId: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== thisId);
    setTodos(newTodos);
  };

  // 完了チェックボックス
  const onChangeTodoCompleted = (thisId: string): void => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === thisId ? { ...todo, completed: !todo.completed } : todo // idが同じだったら（編集だったら）状態のみ上書き、それ以外だったらそのままtodo内容を格納
      )
    );
  };

  // 編集ボタン
  const onClickEdit = (thisTodo: TodoType): void => {
    const newTodos = todos.filter((todo) => todo.id !== thisTodo.id);
    setTodos(newTodos);
    setTodo(thisTodo);
  };

  return (
    <>
      <section className="mx-auto shadow-md rounded-md bg-sky-100 w-[94%] max-w-[600px] p-8 m-10">
        <h1 className="text-3xl font-bold text-center">
          TODO App
          <br />
          react + typescript
        </h1>

        {/* 絞り込み用チェックボックス */}
        <TodoFilterCheckbox filter={filter} setFilter={setFilter} />

        {/* 未完了TODO表示 */}
        {/* props多いけどいいのか？ */}
        <TodoView
          view={"incomplete"}
          filter={filter}
          todos={todos}
          onChangeTodoCompleted={onChangeTodoCompleted}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />

        {/* 完了TODO表示 */}
        {/* props多いけどいいのか？ */}
        <TodoView
          view={"completed"}
          filter={filter}
          todos={todos}
          onChangeTodoCompleted={onChangeTodoCompleted}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />

        {/* 入力フォーム */}
        <InputTodo
          todo={todo}
          onChangeTodo={onChangeTodo}
          onChangeTodoDetail={onChangeTodoDetail}
          onClickAdd={onClickAdd}
        />
      </section>
    </>
  );
};
export default App;
