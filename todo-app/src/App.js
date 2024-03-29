import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { useState,useRef,useCallback } from 'react';


const App = () => {
//useState를 사용하여 todos정의 하고  todos를 props로 전달하기!!
const [todos, setTodos] = useState([
  {
    id : 1,
    text : '리액트의 기초 알아보기',
    checked : true,
  },
  {
    id : 2,
    text : '컴포넌트 스타일링해 보기',
    checked : true,
  },
  {
    id : 3,
    text : '일정 관리 앱 만들어 보기',
    checked : false,
  },
]);

//고윳값으로 사용될 id
//ref를 사용하여 변수 담기
const nextId = useRef(4);

const onInsert = useCallback(
  text=> {
    const todo ={
      id : nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo)); 
    nextId.current =+1; //새로운 객체를 만들때마다 next Id 1씩 더하기
  },
  [todos],
)

//삭제 기능
const onRemove =useCallback(
  id => {
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(id);
  },
  [todos],
);

//수정기능
const onToggle = useCallback(
  id=>{
    setTodos(
      todos.map(todo=>    //객체의 checked 를 반전
        todo.id === id? {...todo,checked:!todo.checked} : todo),
    );
  },
  [todos],
) 

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
};

export default App;