import { useState } from 'react';
import './styles.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from './components/CompleteTodo';
import { CategorySelect } from './components/CategorySelect';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [category, setCategory] = useState('work');
  const [categorizedTodo, setCategorizedTodo] = useState('all');

  //追加処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onChangeCategory = (event) => setCategory(event.target.value);
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodo = {
      id: Date.now(),
      todoText: todoText,
      category: category,
    };
    setIncompleteTodos([...incompleteTodos, newTodo]);
    setTodoText('');
  };

  //削除処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了処理
  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻る処理
  const onClickRotate = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //カテゴリ選択処理
  const getCategoryLabel = (value) => {
    switch (value) {
      case 'work':
        return '仕事';
      case 'hobby':
        return '趣味';
      case 'study':
        return '勉強';
    }
  };

  //フィルター処理
  const handleCategoryClick = (category) => {
    setCategorizedTodo(category);
    console.log(categorizedTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClick={onClickAdd}
        onChangeCategory={onChangeCategory}
        category={category}
      />

      <CategorySelect
        handleCategoryClick={handleCategoryClick}
        categorizedTodo={categorizedTodo}
      />

      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        getCategoryLabel={getCategoryLabel}
        categorizedTodo={categorizedTodo}
      />

      <CompleteTodo
        todos={completeTodos}
        onClick={onClickRotate}
        getCategoryLabel={getCategoryLabel}
        categorizedTodo={categorizedTodo}
      />
    </>
  );
};
