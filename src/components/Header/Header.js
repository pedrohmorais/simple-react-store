import logo from '../../assets/logos/corebiz.svg';
import searchIcon from '../../assets/icons/search.svg';
import userIcon from '../../assets/icons/user.svg';
import cartIcon from '../../assets/icons/cart.svg';
import './style.css';

const renderCartAmountItems = (items = 0) => {
  if(items <= 0) {
    return null;
  }
  return (
    <div className="cartItems">
      {items}
    </div>
  )
}

function Header() {
  return (
    <div id="mainHeader">
      <header className="container">
        <div className="column">
          <img src={logo} className="mainLogo" alt="logo" />
        </div>
        <div className="column">
          <div className="searchField">
            <input type="text" placeholder="O que você está procurando ?" />
            <img src={searchIcon} alt="search" />
          </div>
        </div>
        <div className="column">
          <div className="sideOptions">
            <button className="myAccount">
              <img src={userIcon} alt="My Account" />
              <span>
                Minha conta
              </span>
            </button>
            <button className="cart">
              <img src={cartIcon} alt="Cart" />
              {renderCartAmountItems(1)}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
