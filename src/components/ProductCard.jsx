import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const list = this.props;
    const { products } = list;
    return (
      <div>
        { products.map((product) => (
          <div key={ product.id } data-testid="product">
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.title }</p>
            <p>{`R$ ${product.price}` }</p>
          </div>
        ))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
