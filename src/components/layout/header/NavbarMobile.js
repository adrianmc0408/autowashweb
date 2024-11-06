import Link from "next/link";
import ItemMobile from "./ItemMobile";
import { useHeaderContex } from "@/providers/HeaderContex";

const NavbarMobile = () => {
  const { isOnepage, style, headerType, isCollection, home } =
    useHeaderContex();
  const mobileItems = [
    {
      name: "Inicio",
      toggler: true,
      path: "#",
      dropdown: false,
      nestedDropdown: false,
      dropdownItems: []
    },
    {
      name: "Servicios",
      toggler: true,
      path: "#servicios",
      dropdown: false,
      nestedDropdown: false,
      dropdownItems: []
    },
    {
      name: "Contacto",
      toggler: true,
      path: "#contacto",
      dropdown: false,
      nestedDropdown: false,
      dropdownItems: []
    }
  ]
  return (
    <nav className="offcanvas__menu">
      <ul className="offcanvas__menu_ul">
        {mobileItems?.map((item, idx) =>
          !item?.name ? "" : <ItemMobile key={idx} item={item} />
        )}
      </ul>

    </nav>
  );
};

export default NavbarMobile;
