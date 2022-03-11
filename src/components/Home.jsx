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
      isThereListRender: false,
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  componentDidMount() {
    this.listCategories();
  }

  async handleCategoryChange({ target }) {
    const { results } = await getProductsFromCategoryAndQuery(target.id, target.value);
    console.log(results);
    this.setState({ products: results, isThereListRender: true });
    // console.log(products);
  }

  async listCategories() {
    const categories = await getCategories();
    this.setState({ categoriesList: categories });
  }

  render() {
    const { categoriesList, products, isThereListRender } = this.state;
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
        <h4>Categorias:</h4>
        {categoriesList.map((category) => (
          <Category
            key={ category.id }
            category={ category }
            handleCategoryChange={ this.handleCategoryChange }
          />
        ))}
        { isThereListRender ? <ProductCard products={ products } /> : '' }
      </div>
    );
  }
}
export default Home;
