import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { handleCategoryChange, category: { name, id } } = this.props;

    return (
      <label htmlFor={ name }>
        <input
          data-testid="category"
          type="radio"
          value={ name }
          id={ id }
          name="category"
          onChange={ handleCategoryChange }
        />
        { name }
      </label>
    );
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Category;
