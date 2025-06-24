export const CategorySelect = ({ handleCategoryClick, categorizedTodo }) => {
  // TODO: categoriesを別ファイルに切り出す
  const categories = [
    { id: 1, key: 'work', label: '仕事' },
    { id: 2, key: 'hobby', label: '趣味' },
    { id: 3, key: 'study', label: '勉強' },
    { id: 4, key: 'all', label: 'すべて' },
  ];

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
