const Social = ({ children, type }) => {
  const icons = [
    {
      name: "facebook",
      path: "https://www.facebook.com/autowashboxes",
    },
    {
      name: "twitter",
      path: "https://x.com/AutoWashBoxes",
    },

    {
      name: "instagram",
      path: "https://www.instagram.com/autowashboxes/",
    }
    ,
    {
      name: "whatsapp",
      path: "https://api.whatsapp.com/send?phone=34640188935",
    }
  ];
  return (
    <div
      className={`headerarea__icon ${type === "copyright" ? "copyright__icon" : ""
        }`}
    >
      <ul>
        {icons.map(({ name, path }, idx) => (
          <li key={idx}>
            <a href={path}>
              <i className={`icofont-${name}`}></i>
            </a>
          </li>
        ))}

        {children ? children : ""}
      </ul>
    </div>
  );
};

export default Social;
