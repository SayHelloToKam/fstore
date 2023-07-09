import "./Header.css";

import { PiShoppingCartBold } from "react-icons/pi";

function Header() {
  return (
    <div className='header-container'>
      <p className='branding'>BESTIES</p>
      <div className='cart-box'>
        <p className='cart-icon'>
          <PiShoppingCartBold />
        </p>
        <p className='cart-number'>2</p>
      </div>
    </div>
  );
}

export default Header;
