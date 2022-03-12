import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      listSave: [],
    };
    this.saveCar = this.saveCar.bind(this);
  }

  componentDidMount() {
    const valueLocal = JSON.parse(localStorage.getItem('cartProduts'));
    return valueLocal && this.setState({
      listSave: valueLocal,
    });
  }

  saveCar(event) {
    const { products } = this.props;
    const item = products.find((objeto) => objeto.id === event.target.name);
    console.log(item);
    this.setState((prev) => ({
      listSave: [...prev.listSave, item],
    }), () => {
      const { listSave } = this.state;
      localStorage.setItem('cartProduts', JSON.stringify(listSave));
    });
  }

  render() {
    const list = this.props;
    const { products } = list;
    const { name } = this.props;
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
              to={ `/details/${name}/${product.id}` }
            >
              Detalhes
            </Link>
            <br />
            <button
              data-testid="product-add-to-cart"
              type="button"
              name={ product.id }
              onClick={ this.saveCar }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductCard;
