import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
    };
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  async handleSearchButton({ target }) {
    const { busca } = await getProductsFromCategoryAndQuery(target.id, target.value);
    this.setState({ produtos: busca });
  }

  async catchInput() {
    const text = document.getElementsByClassName('button');
    return text.value;
  }

  render() {
    return (
      <div>
        <input
          className="button"
          data-testid="query-input"
          type="text"
          name="query-input"
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.handleSearchButton }
        >
          Busca:
        </button>
        {/* <div key={element}>
           { produts.map((elemento) => (
             )) }
         </div> */}
      </div>
    );
  }
}

// Products.propTypes {
//   produtos.propTypes:
// }
export default Products;
