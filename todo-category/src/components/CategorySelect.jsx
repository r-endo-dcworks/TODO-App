export const CategorySelect = ({ handleCategoryClick, categorizedTodo }) => {
  const categories = [
    { key: 'work', label: '仕事' },
    { key: 'hobby', label: '趣味' },
    { key: 'study', label: '勉強' },
    { key: 'all', label: 'すべて' },
  ];

  return (
    <div className="input-category-area">
      <p className="category-select">
        カテゴリ選択：
        {categories.map(({ key, label }) => (
          <button
            className={categorizedTodo === key ? 'active' : key}
            onClick={() => {
              if (categorizedTodo !== key) {
                handleCategoryClick(key);
              }
            }}
          >
            {label}
          </button>
        ))}
      </p>
    </div>
  );
};
