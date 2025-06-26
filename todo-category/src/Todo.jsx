import { useState } from 'react';
import './styles.css';
import { InputTodo } from './components/InputTodo';
import { CategorySelect } from './components/CategorySelect';
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from './components/CompleteTodo';

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
  const onClickDelete = (id) => {
    const newTodos = incompleteTodos.filter((todo) => todo.id !== id);
    setIncompleteTodos(newTodos);
  };

  //完了処理
  //選択されたTODOをcompleteTodosに追加
  //filterでincompleteTodosから非表示
  const onClickComplete = (id) => {
    const newTodos = incompleteTodos.find((todo) => todo.id === id);
    setIncompleteTodos(incompleteTodos.filter((todo) => todo.id !== id));
    setCompleteTodos([...completeTodos, newTodos]);
  };

  //戻る処理
  const onClickRotate = (id) => {
    const newTodos = completeTodos.find((todo) => todo.id === id);
    setCompleteTodos(completeTodos.filter((todo) => todo.id !== id));
    setIncompleteTodos([...incompleteTodos, newTodos]);
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

      <CategorySelect {...{ handleCategoryClick, categorizedTodo }} />

      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        {...{ getCategoryLabel, categorizedTodo }}
      />

      <CompleteTodo
        todos={completeTodos}
        onClick={onClickRotate}
        {...{ getCategoryLabel, categorizedTodo }}
      />
    </>
  );
};
