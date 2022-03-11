import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const list = this.props;
    const { products } = list;
    const { id, name } = this.props;
    return (
      <div>
        { products.map((product) => (
          <div key={ product.id } data-testid="product">
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.title }</p>
            <p>{`R$ ${product.price}` }</p>
            <br />
            <Link
              data-testid="product-detail-link"
              to={ `/details/${id}/${name}/${product.id}` }
            >
              Detalhes
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductCard;
