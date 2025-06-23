export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClick, category, onChangeCategory } =
    props;

  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />

      {/* カテゴリ選択ボタン 
      TODO:　Mapで書き直せるか取り組む
      */}
      <select
        className="category-select-button"
        value={category}
        onChange={onChangeCategory}
      >
        <option value="work">仕事</option>
        <option value="hobby">趣味</option>
        <option value="study">勉強</option>
      </select>

      <button
        disabled={todoText === ''}
        className="todo-button"
        onClick={onClick}
      ></button>
    </div>
  );
};
