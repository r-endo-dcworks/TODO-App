import { categories } from '../utils/categories';
export const CategorySelect = ({ handleCategoryClick, categorizedTodo }) => {
  return (
    <div className="input-category-area">
      <p className="category-select">
        カテゴリ選択：
        {categories.map((category) => (
          <button
            key={category.id}
            className={
              categorizedTodo === category.key ? 'active' : category.key
            }
            onClick={() => {
              if (categorizedTodo !== category.key) {
                handleCategoryClick(category.key);
              }
            }}
          >
            {category.label}
          </button>
        ))}
      </p>
    </div>
  );
};
