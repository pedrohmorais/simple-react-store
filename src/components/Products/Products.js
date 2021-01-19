// import searchIcon from '../../assets/icons/search.svg';
// import userIcon from '../../assets/icons/user.svg';
// import cartIcon from '../../assets/icons/cart.svg';
import React, { useState } from 'react';
import './style.css';
import { getProducts } from '../../services/products';

const parseMoney = (vl) => vl.toLocaleString('pt-br', {minimumFractionDigits: 2});

function Products() {
  const [products, setProducts] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(false);

  if (!loadingProducts) {
    debugger;
    getProducts().then(p => {
      setLoadingProducts(true);
      setProducts(p);
    });
  }
  
  const renderProducts = () => {
    if (!products) {
      return loading();
    }

    // {
    //   "productId": 1,
    //   "productName": "SAPATO FLOATER PRETO",
    //   "stars": 1,
    //   "imageUrl": "https://corebiz-test.herokuapp.com/images/product-1.png",
    //   "listPrice": null,
    //   "price": 25990,
    //   "installments": [
    //     {
    //       "quantity": 9,
    //       "value": 2887
    //     }
    //   ]
    // },

    const renderCard = (product) => {
      const {
        productId,
        productName,
        stars,
        imageUrl,
        price,
        installments,
      } = product;
      const mainInstallments = installments[0] || null;
      
      const renderInstallments = () => {
        if (!mainInstallments) {
          return null;
        }
        const {
          quantity: installmentsQuantity,
          value: installmentsValue,
        } = mainInstallments;
        return (
          <span className="installments">
            ou em {installmentsQuantity}x de R${parseMoney(installmentsValue)}
          </span>
        );
      }
      return (
        <div className="productCard" productId={productId}>
          <img src={imageUrl} alt={productName} />
          <p className="productName">{productName}</p>
          <div className="starsBlock">
            {stars} estrelas
          </div>
          <div className="priceBlock">
            <span className="fullPrice">por R$ {parseMoney(price)}</span>
            {renderInstallments()}
          </div>
        </div>
      )
    };

    return products.map(product => renderCard(product));
  }
  
  const loading = () => {
    return (
      <span>Carregando...</span>
    )
  }

  return (
    <div id="productsContainer">
      <div className="container">
        {renderProducts()}
      </div>
    </div>
  );
}

export default Products;

