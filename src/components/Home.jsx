import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Category from './Category';
import ProductCard from './ProductCard';
import Products from './Products';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      products: [],
      isThereListRender: false,
      inputSearch: '',
      isThereSearchProdut: false,
      id: '',
      name: '',
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.catchInput = this.catchInput.bind(this);
  }

  componentDidMount() {
    this.listCategories();
  }

  async handleSearchButton() {
    const { inputSearch } = this.state;
    const busca = await getProductsFromCategoryAndQuery('', inputSearch);
    const { results } = busca;
    this.setState({ products: results });
    if (results.length === 0) {
      this.setState({ isThereSearchProdut: false });
    } else {
      this.setState({ isThereSearchProdut: true });
    }
  }

  async handleCategoryChange({ target }) {
    const { results } = await getProductsFromCategoryAndQuery(target.id, target.value);
    console.log(results);
    this.setState({ products: results,
      isThereListRender: true,
      id: target.id,
      name: target.value,
    });
    console.log(target.id, target.value);
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
    const { categoriesList, products,
      isThereListRender, isThereSearchProdut, id, name } = this.state;
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
        <Products
          catchInput={ this.catchInput }
          handleSearchButton={ this.handleSearchButton }
        />
        <h4>Categorias:</h4>
        {categoriesList.map((category) => (
          <Category
            key={ category.id }
            category={ category }
            handleCategoryChange={ this.handleCategoryChange }
          />
        ))}
        { isThereListRender ? <ProductCard
          products={ products }
          id={ id }
          name={ name }
        /> : '' }
        {isThereSearchProdut
          ? (products.map((product) => (
            <div key={ product.id } data-testid="product">
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.title}</p>
              <p>{`R$ ${product.price}`}</p>
            </div>
          ))) : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

export default Home;
