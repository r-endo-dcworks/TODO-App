export const CompleteTodo = (props) => {
  const { todos, onClick, getCategoryLabel, categorizedTodo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
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
                  className="rotate-button"
                  onClick={() => onClick(index)}
                ></button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
