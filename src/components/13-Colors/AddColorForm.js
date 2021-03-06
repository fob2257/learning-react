import React from 'react';
import PropTypes from 'prop-types';

import { addColor } from '../11-Colors/creators';


const AddColorFormStateless = (props, { store }) => {
  let _title, _color;

  const submit = (e) => {
    e.preventDefault();
    store.dispatch(addColor(_title.value, _color.value));

    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  };

  return (
    <form className='add-color' onSubmit={submit}>
      <input ref={input => _title = input} type='text' placeholder='color title....' required></input>
      <input ref={input => _color = input} type='color' required></input>
      <button>ADD</button>
    </form>
  );
};

AddColorFormStateless.contextTypes = {
  store: PropTypes.object,
};

export default AddColorFormStateless;
