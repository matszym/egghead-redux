import React from 'react';

import {store} from './todo.state.js';
import Link from './Link.js';

class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    )
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const {props} = this;
    const state = store.getState();

    return (
      <Link
        active={
          props.filter ===
          state.visibilityFilter
        }
        onClick={() => 
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            payload: {
              filter: props.filter
            }
          })
        }
      >
        {props.children}
      </Link>
    );
  }
}

export default FilterLink;