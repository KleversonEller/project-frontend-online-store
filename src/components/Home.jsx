import React from 'react';
import { getCategories } from '../services/api';
import Category from './Category';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.listCategories();
  }

  async listCategories() {
    const categories = await getCategories();
    this.setState({ categoriesList: categories });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <h4>Categorias:</h4>
        {categoriesList.map((category) => (
          <Category key={ category.id } category={ category } />
        ))}
      </div>
    );
  }
}
export default Home;
