export const IncompleteTodo = (props) => {

  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button className="complete-button" onClick={() => onClickComplete(index)}></button>
              <button className="trash-button" onClick={() => onClickDelete(index)}></button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
};