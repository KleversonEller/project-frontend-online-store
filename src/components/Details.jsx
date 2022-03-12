import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      produto: {},
      loading: false,
      listSave: [],
    };
    this.saveCar = this.saveCar.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { results } = await getProductsFromCategoryAndQuery('',
      match.params.name);
    const item = results.find((itens) => itens.id === match.params.idP);
    const valueLocal = JSON.parse(localStorage.getItem('cartProduts'));
    return valueLocal && this.setState({
      listSave: valueLocal,
      produto: item,
    });
  }

  saveCar() {
    this.setState((prev) => ({
      listSave: [...prev.listSave, prev.produto],
    }), () => {
      const { listSave } = this.state;
      localStorage.setItem('cartProduts', JSON.stringify(listSave));
    });
  }

  render() {
    const { produto, loading } = this.state;
    return (
      <div>
        <Link
          to="/car"
          data-testid="shopping-cart-button"
        >
          <MdShoppingCart />
        </Link>
        {loading
          ? <p>Carregando...</p>
          : (
            <div>
              <img src={ produto.thumbnail } alt={ produto.title } />
              <p data-testid="product-detail-name">{ produto.title }</p>
              <p>
                {`R$ ${produto.price}` }
              </p>
              <button
                data-testid="product-detail-add-to-cart"
                type="button"
                name={ produto.id }
                onClick={ this.saveCar }
              >
                Adicionar ao carrinho
              </button>
            </div>
          )}
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default Details;
