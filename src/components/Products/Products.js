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
    setLoadingProducts(true);
    getProducts().then(p => {
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

    // const calcDiscountPercent = (listPrice, price) => {
    //   return Math.floor((price * 100) / listPrice);
    // };

    const renderCard = (product) => {
      const {
        productId,
        productName,
        stars,
        imageUrl,
        price,
        installments,
        listPrice,
      } = product;
      const mainInstallments = installments[0] || null;
      
      const renderInstallments = () => {
        if (!mainInstallments) {
          return (
            <span className="installments hidden">
              À vista
            </span>
          );
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

      const renderDiscount = () => {
        if (!listPrice) {
          return null;
        }
  
        return (
          <div className="discount">
            <span>
              OFF
            </span>
          </div>
        )
      };

      return (
        <div className="productCard" productId={productId}>
          {renderDiscount()}    
          <img src={imageUrl} alt={productName} />
          <p className="productName">{productName}</p>
          <div className="starsBlock">
            {stars} estrelas
          </div>
          <div className="priceBlock">
            <p className="fullPrice">
              por <strong>R$ {parseMoney(price)}</strong>
            </p>
            {renderInstallments()}
          </div>
          <button className="btnProducts">
            Compra
          </button>
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
        <h3>Mais vendidos</h3>
        <div className="productsBlock">
          {renderProducts()}
        </div>
      </div>
    </div>
  );
}

export default Products;




//
//
//