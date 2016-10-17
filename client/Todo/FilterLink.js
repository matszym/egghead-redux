import React from 'react';

import {store} from './todo.state.js';

class FilterLink extends React.Component {
  render() {
    const { filter, children, currentFilter } = this.props;
    if (filter === currentFilter) {
      return <span>{children}</span>;
    }
    return (
      <a 
        href="#"
        onClick={e => {
          e.preventDefault();
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            payload: {
              filter
            }
          });
        }}
      >
        {children}
      </a>
    );
  }
}

export default FilterLink;