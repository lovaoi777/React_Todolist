import './TodoInsert.scss';
import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  //값이 바뀔때마다 최적화 시켜주기

  const onClick = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      //submit 이벤트는 브라우저에서 새로고침을 발생한다
      //이를 방지하기 위해 이 함수를 호출한다
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit" onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
