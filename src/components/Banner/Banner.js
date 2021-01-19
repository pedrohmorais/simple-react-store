import bannerImage1 from '../../assets/images/banner1.jpg';
// import searchIcon from '../../assets/icons/search.svg';
// import userIcon from '../../assets/icons/user.svg';
// import cartIcon from '../../assets/icons/cart.svg';
import './style.css';

const separator = (
  <svg width="990" height="430" viewBox="0 0 990 430" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H960C835.5 176.5 1067.5 266 960 430H0V0Z" fill="black"/>
  </svg>
);

const renderItem = () => {
  return (
    <div className="bannerItem">
      <div className="bannerItemBg">
        {separator}
        <img src={bannerImage1} alt="banner 1" />
      </div>
    </div>
  )
}

function Banner() {
  return (
    <div id="mainBanner">
      {renderItem()}
    </div>
  );
}

export default Banner;

