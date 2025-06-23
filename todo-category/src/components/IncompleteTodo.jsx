export const IncompleteTodo = (props) => {
  const {
    todos,
    onClickComplete,
    onClickDelete,
    getCategoryLabel,
    categorizedTodo,
  } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos
          .filter(
            (todo) =>
              categorizedTodo === 'all' || todo.category === categorizedTodo,
          )
          .map((todo, index) => (
            <li key={todo.id}>
              <div className="list-row">
                <span className={`category-label ${todo.category}`}>
                  {getCategoryLabel(todo.category)}
                </span>
                <p className="todo-item">{todo.todoText}</p>
                <button
                  className="complete-button"
                  onClick={() => onClickComplete(index)}
                ></button>
                <button
                  className="trash-button"
                  onClick={() => onClickDelete(index)}
                ></button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
