import { categories } from '../utils/categories';

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

      <select
        className="category-select-button"
        value={category}
        onChange={onChangeCategory}
      >
        {/* .slice(0,3)→配列の０以上３未満([0][1][2])を返す */}
        {categories.slice(0, 3).map((category) => (
          <option key={category.id} value={category.key}>
            {category.label}
          </option>
        ))}
      </select>

      <button
        disabled={todoText === ''}
        className="todo-button"
        onClick={onClick}
      />
    </div>
  );
};
