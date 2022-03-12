import React from 'react';
import PropTypes from 'prop-types';

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: false,
      valida: false,
    };
  }

  componentDidMount() {
    const saveList = JSON.parse(localStorage.getItem('cartProduts'));
    return saveList
      ? this.setState({
        produtos: saveList,
        valida: true,
      })
      : this.setState({
        valida: false,
      });
  }

  render() {
    const { valida, produtos } = this.state;
    return (
      <div>
        {valida
          ? (
            produtos.map((product) => (
              <div key={ product.id } data-testid="product">
                <p data-testid="shopping-cart-product-name">{ product.title }</p>
                <p
                  data-testid="shopping-cart-product-quantity"
                >
                  1
                </p>
              </div>
            )))
          : <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio</p>}
      </div>
    );
  }
}

Car.propTypes = {
  produtosList: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default Car;
