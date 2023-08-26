import React from 'react';

import BaseInput from './UI/input/BaseInput';
import BaseSelect from './UI/select/BaseSelect';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div className="filter">
      <div className="filter__row">
        <BaseInput
          value={filter.query}
          placeholder="Поиск..."
          onChange={event => setFilter({...filter, query: event.target.value})}
        />
      </div>

      <div className="filter__row">
        <BaseSelect
          value={filter.sort}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        />
      </div>
    </div>
  );
}

export default PostFilter;