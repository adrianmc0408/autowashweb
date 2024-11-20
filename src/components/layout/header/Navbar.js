import homeImage1 from "@/assets/img/mega/home-1.png";
import homeImage2 from "@/assets/img/mega/home-2.png";
import homeImage3 from "@/assets/img/mega/home-3.png";
import homeImage4 from "@/assets/img/mega/home-4.png";
import homeImage5 from "@/assets/img/mega/home-5.png";
import homeImage6 from "@/assets/img/mega/home-6.png";
import homeImage7 from "@/assets/img/mega/home-7.png";
import homeImage8 from "@/assets/img/mega/home-8.png";
import homeImage9 from "@/assets/img/mega/home-9.png";
import homeImage10 from "@/assets/img/mega/home-10.png";
import homeImage11 from "@/assets/img/mega/home-11.png";
import homeImage12 from "@/assets/img/mega/home-12.png";
import homeImage13 from "@/assets/img/mega/home-13.png";
import homeImage14 from "@/assets/img/mega/home-14.png";
import homeImage15 from "@/assets/img/mega/home-15.png";
import homeImage16 from "@/assets/img/mega/home-16.png";
import homeImage17 from "@/assets/img/mega/home-17.png";
import homeImage18 from "@/assets/img/mega/home-18.png";
import homeImage19 from "@/assets/img/mega/home-19.png";
import homeImage20 from "@/assets/img/mega/home-20.png";
import comingImage1 from "@/assets/img/mega/coming_1.png";
import comingImage2 from "@/assets/img/mega/coming_2.png";
import comingImage3 from "@/assets/img/mega/coming_3.png";
import comingImage4 from "@/assets/img/mega/coming_4.png";
import comingImage5 from "@/assets/img/mega/coming_5.png";
import megaMenuImage1 from "@/assets/img/mega/mega_menu_1.png";
import DropdownHome from "./DropdownHome";
import DropdownPages from "./DropdownPages";
import DropdownEcommerce from "./DropdownEcommerce";
import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { isOnepage, style, headerType, footerStyle, isCollection, home } =
    useHeaderContex();
  const pathName = usePathname();
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
  const navItemsRaw = pathName.includes("services") ? navItemsServices : pathName.includes("Legales") ? navItemsTextos : navItemsHome;

  const navItems = navItemsRaw?.map((navItem, idx) => 
  ({
    ...navItem,
    dropdown: isOnepage ? null : (
      <DropdownHome dropdownItems={navItem.dropdownItems} />
    ),
  })
  );
  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
