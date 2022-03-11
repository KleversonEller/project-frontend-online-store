import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Produts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categoryId: '',
      produtos: [],
    };
  }

  busckText = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
    );
  }

   busckProduts = async (event) => {
     event.preventDefault();
     const { categoryId, query } = this.state;
     const Produts = await getProductsFromCategoryAndQuery(categoryId);
     const checkCategory = (() => {
       let check = '';
       if (check === categoryId) {
         check = categoryId;
       } else {
         check = query;
       }
     }
     );
     return checkCategory;
   }

   render() {
     return (
       <div>
         <input
           data-testid="query-input"
           type="text"
           onChange={ this.busckText }
           name="query-input"
         />
         <button
           data-testid="query-button"
           type="submit"
           onClick={ this.busckProduts }
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
export default Produts;
