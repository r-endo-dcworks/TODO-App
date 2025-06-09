export const CompleteTodo = (props) => {

  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button className="rotate-button" onClick={() => onClick(index)}></button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
};