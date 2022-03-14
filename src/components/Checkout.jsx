import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Nome Completo:
          <input
            data-testid="checkout-fullname"
            type="text"
            name="name"
            id="name"
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            data-testid="checkout-email"
            type="text"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            data-testid="checkout-cpf"
            type="text"
            name="cpf"
            id="cpf"
          />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            data-testid="checkout-phone"
            type="text"
            name="phone"
            id="phone"
          />
        </label>
        <label htmlFor="cep">
          CEP:
          <input
            data-testid="checkout-cep"
            type="text"
            name="cep"
            id="cep"
          />
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            data-testid="checkout-address"
            type="text"
            name="address"
            id="address"
          />
        </label>
        <button type="submit">
          Finalizar
        </button>
      </div>
    );
  }
}

export default Checkout;
