import { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [text, setText] = useState('');

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(text);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form" action="">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={text}
            className="field"
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};



export default SearchBar;
