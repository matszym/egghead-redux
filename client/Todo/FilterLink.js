import React from 'react';
import {connect} from 'react-redux';

import Link from './Link.js';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter
  };
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch({
      type: 'SET_VISIBILITY_FILTER',
      payload: {
        filter: ownProps.filter
      }
    })
  };
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;