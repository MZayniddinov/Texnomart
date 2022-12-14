import "./Header.scss";
import { useEffect, useRef, useState } from "react";

// components
import HeaderTop from "./header_top/HeaderTop";
import HeaderCenter from "./header_center/HeaderCenter";
import HeaderBottom from "./header_bottom/HeaderBottom";
import HeaderApp from "./header_app/HeaderApp";
import CatalogDropdown from "./catalog-dropdown/CatalogDropdown";

const Header = ({ setMobSidebarActive, setBasketActive }) => {
  const header = useRef();
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const [isCatalogActive, setIsCatalogActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > header.current.offsetHeight + 50) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };
  }, []);
  return (
    <header
      className={isHeaderFixed ? "header header__fixed" : "header"}
      ref={header}
    >
      <HeaderTop isHeaderFixed={isHeaderFixed} />
      <div className="container">
        <HeaderCenter
          setMobSidebarActive={setMobSidebarActive}
          setBasketActive={setBasketActive}
          isHeaderFixed={isHeaderFixed}
          isCatalogActive={isCatalogActive}
          setIsCatalogActive={setIsCatalogActive}
        />
        <HeaderBottom
          isHeaderFixed={isHeaderFixed}
          isCatalogActive={isCatalogActive}
          setIsCatalogActive={setIsCatalogActive}
        />
      </div>
      <HeaderApp />
      <CatalogDropdown isCatalogActive={isCatalogActive} />
    </header>
  );
};

export default Header;
