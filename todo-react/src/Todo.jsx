import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {

  const [todoText, setTodeText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //追加処理
  const onChangeTodoText = (event) => setTodeText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodeText("")
  };

  //削除処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了処理
  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻る処理
  const onClickRotate = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />

      {isMaxLimitIncompleteTodos && (
        <p class="limit">登録できるのは５個までです。</p>
      )}


      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo
        todos={completeTodos}
        onClick={onClickRotate}
      />
    </>
  );
};