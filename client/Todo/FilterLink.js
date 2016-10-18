import React from 'react';
import Link from './Link.js';

class FilterLink extends React.Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    )
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const {props} = this;
    const {store} = this.context;
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

FilterLink.contextTypes = {
  store: React.PropTypes.object
}

export default FilterLink;