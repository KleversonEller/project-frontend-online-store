import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      produto: {},
      loading: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { results } = await getProductsFromCategoryAndQuery(match.params.id,
      match.params.name);
    const item = results.find((itens) => itens.id === match.params.idP);
    this.setState({
      produto: item,
    });
  }

  render() {
    const { produto, loading } = this.state;
    return (
      <div>
        {loading
          ? <p>Carregando...</p>
          : (
            <div>
              <img src={ produto.thumbnail } alt={ produto.title } />
              <p data-testid="product-detail-name">{ produto.title }</p>
              <p>
                {`R$ ${produto.price}` }
              </p>
            </div>
          )}
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default Details;
