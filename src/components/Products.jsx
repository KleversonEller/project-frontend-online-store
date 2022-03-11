import React from 'react';

class Products extends React.Component {
  render() {
    const {
      handleSearchButton,
      catchInput,
    } = this.props;

    return (
      <div>
        <input
          className="button"
          data-testid="query-input"
          type="text"
          name="inputSearch"
          onChange={ catchInput }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ handleSearchButton }
        >
          Busca:
        </button>
      </div>
    );
  }
}

Products.propTypes = {
  handleSearchButton: PropTypes.func.isRequired,
  catchInput: PropTypes.func.isRequired,
};

export default Products;
