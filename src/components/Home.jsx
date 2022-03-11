import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Category from './Category';
import ProductCard from './ProductCard';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      products: [],
      inputSearch: '',
      isThereSearchProdut: false,
      name: '',
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.catchInput = this.catchInput.bind(this);
  }

  componentDidMount() {
    this.listCategories();
  }

  async handleCategoryChange({ target }) {
    const { results } = await getProductsFromCategoryAndQuery('', target.value);
    this.setState({ products: results,
      name: target.value,
    });
  }

  catchInput({ target }) {
    this.setState({
      inputSearch: target.value,
    });
  }

  async listCategories() {
    const categories = await getCategories();
    this.setState({ categoriesList: categories });
  }

  render() {
    const { categoriesList, products, isThereSearchProdut,
      name, inputSearch } = this.state;
    return (
      <div>
        <Link
          to="/car"
          data-testid="shopping-cart-button"
        >
          <MdShoppingCart />
        </Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          className="button"
          data-testid="query-input"
          type="text"
          name="inputSearch"
          onChange={ this.catchInput }
        />
        <button
          data-testid="query-button"
          value={ inputSearch }
          type="submit"
          onClick={ this.handleCategoryChange }
        >
          Busca:
        </button>
        <h3>Categorias:</h3>
        {categoriesList.map((category) => (
          <Category
            key={ category.id }
            category={ category }
            handleCategoryChange={ this.handleCategoryChange }
          />
        ))}
        <ProductCard
          products={ products }
          name={ name }
        />
        {isThereSearchProdut
          ? (
            <ProductCard
              products={ products }
              name={ name }
            />) : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

export default Home;
