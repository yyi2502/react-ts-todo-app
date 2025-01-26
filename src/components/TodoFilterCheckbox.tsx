// 絞り込み用チェックボックス
const TodoFilterCheckbox = ({ filter, setFilter }: boolean | any) => {
  return (
    <div className="mt-10">
      <label htmlFor="incompleteCheckbox" className="cursor-pointer mr-5">
        <input
          type="checkbox"
          id="incompleteCheckbox"
          value="incomplete"
          checked={filter.incomplete}
          onChange={() =>
            setFilter({ ...filter, incomplete: !filter.incomplete })
          }
        />
        未完了
      </label>
      <label htmlFor="completedCheckbox" className="cursor-pointer">
        <input
          type="checkbox"
          id="completedCheckbox"
          value="completed"
          checked={filter.completed}
          onChange={() =>
            setFilter({ ...filter, completed: !filter.completed })
          }
        />
        完了
      </label>
    </div>
  );
};

export default TodoFilterCheckbox;
