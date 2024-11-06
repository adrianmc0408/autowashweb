import Link from "next/link";

const LinksFooter = ({ style }) => {
  const items = [
    {
      name: "Términos y condiciones",
      path: "#",
    },
    {
      name: "Política de privacidad",
      path: "#",
    },
    {
      name: "Política de privacidad",
      path: "#",
    }
  ];
  return (
    <div
      className={`col-xl-6 ${!style ? "col-lg-6" : "col-lg-2"
        } col-md-6 col-sm-6`}
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div className="footer__widget footer__quick">
        <div className="footer__menu__title">
          <h6>LINKS :</h6>
        </div>
        <div className="footer__menu">
          <ul>
            {items?.map(({ name, path }, idx) => (
              <li key={idx}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinksFooter;
