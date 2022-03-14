import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: false,
      valida: false,
      quantity: [],
    };
    this.defineQuantity = this.defineQuantity.bind(this);
  }

  componentDidMount() {
    const saveList = JSON.parse(localStorage.getItem('cartProduts'));
    return saveList
      ? this.setState({
        produtos: saveList,
        valida: true,
        quantity: saveList.map((item) => ({
          id: item.id,
          quantidade: 1,
          estoque: item.available_quantity,
        })),
      })
      : this.setState({
        valida: false,
      });
  }

  defineQuantity(event) {
    const { quantity } = this.state;
    const id = event.target.value;
    const pega = quantity.find((objeto) => objeto.id === id);
    if (event.target.name === 'soma' && pega.quantidade + 1 <= pega.estoque) {
      this.setState((prev) => ({
        quantity: prev.quantity
          .map((objeto) => (objeto.id === id
            ? { id: objeto.id,
              quantidade: objeto.quantidade + 1,
              estoque: objeto.estoque }
            : objeto)),
      }));
    } else if (event.target.name === 'subtrai' && pega.quantidade > 1) {
      this.setState((prev) => ({
        quantity: prev.quantity
          .map((objeto) => (objeto.id === id
            ? { id: objeto.id,
              quantidade: objeto.quantidade - 1,
              estoque: objeto.estoque }
            : objeto)),
      }));
    }
  }

  render() {
    const { valida, produtos, quantity } = this.state;
    return (
      <div>
        {valida
          ? (
            produtos.map((product) => (
              <div key={ product.id } data-testid="product">
                <p
                  data-testid="shopping-cart-product-name"
                >
                  { product.title }
                </p>
                <button
                  name="subtrai"
                  value={ product.id }
                  onClick={ this.defineQuantity }
                  data-testid="product-decrease-quantity"
                  type="button"
                >
                  -
                </button>
                <p
                  data-testid="shopping-cart-product-quantity "
                >
                  { quantity.find((objeto) => objeto.id === product.id).quantidade }
                </p>
                <button
                  name="soma"
                  value={ product.id }
                  onClick={ this.defineQuantity }
                  data-testid="product-increase-quantity"
                  type="button"
                  disabled={ quantity
                    .find((objeto) => objeto.id === product.id).quantidade
                    === quantity.find((objeto) => objeto.id === product.id).estoque }
                >
                  +
                </button>
              </div>
            )))
          : <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio</p>}
        <Link
          data-testid="checkout-products"
          to="/checkout"
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

Car.propTypes = {
  produtosList: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default Car;
