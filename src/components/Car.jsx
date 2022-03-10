import React from 'react';

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: false,
      valida: false,
    };
  }

  componentDidMount() {
    const { produtos } = this.state;
    return produtos
      ? this.setState({
        valida: true,
      })
      : this.setState({
        valida: false,
      });
    //   const { maths } = this.props;
    //   this.setState({
    //     produtos: maths.params.produtos,
    //   });
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

export default Car;
