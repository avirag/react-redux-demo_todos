import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let textInput = React.createRef();

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!textInput.current.value.trim()) {
          return;
        }
        dispatch(addTodo(textInput.current.value));
        textInput.current.value = '';
      }}>
        <input type="text" ref={textInput} />
        <button type="submit">
          Add Todo
      </button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);