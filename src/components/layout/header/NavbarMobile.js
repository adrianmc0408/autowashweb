import Link from "next/link";
import ItemMobile from "./ItemMobile";
import { useHeaderContex } from "@/providers/HeaderContex";
import { usePathname } from 'next/navigation';


const NavbarMobile = () => {
  const { isOnepage, style, headerType, isCollection, home } =
    useHeaderContex();
  const pathName = usePathname()
  const navItemsHome = [
    {
      name: "Inicio",
      icon: false,
      path: "#",
      dropdown: null,
      position: "static",
    },
    {
      name: "Servicios",
      icon: false,
      path: "#servicios",
      dropdown: null,
      position: "static",
    },
    {
      name: "Contacto",
      icon: false,
      path: "#contacto",
      dropdown: null,
      position: "static",
    },
    {
      name: "Galería",
      icon: false,
      path: "/services/galeria",
      dropdown: null,
      position: "static",
    },
    {
      name: "Textos legales",
      icon: false,
      path: "/textosLegales",
      dropdown: null,
      position: "static",
    },
  ]
  const navItemsServices = [
    {
      name: "Inicio",
      icon: false,
      path: "/",
      dropdown: null,
      position: "static",
    },
    {
      name: "Limpieza de coches",
      icon: false,
      path: "/services/limpiezaCoches",
      dropdown: null,
      position: "static",
    },
    {
      name: "Limpieza de sofás",
      icon: false,
      path: "/services/limpiezaSofas",
      dropdown: null,
      position: "static",
    },
    {
      name: "Galería",
      path: "/services/galeria",
      dropdown: null,
      position: "static",
    },
    {
      name: "Textos legales",
      icon: false,
      path: "/textosLegales",
      dropdown: null,
      position: "static",
    },
  ]
  const navItemsTextos = [
    {
      name: "Inicio",
      icon: false,
      path: "/",
      dropdown: null,
      position: "static",
    }
  ]
  const mobileItems = pathName.includes("services") ? navItemsServices : pathName.includes("Legales") ? navItemsTextos : navItemsHome;
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
