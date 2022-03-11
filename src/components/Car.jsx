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
    const { produtosList } = this.props;
    return produtosList
      ? this.setState({
        produtos: produtosList,
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
          ? produtos
          : <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio</p>}
      </div>
    );
  }
}

Car.propTypes = {
  produtosList: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default Car;
