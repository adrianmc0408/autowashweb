import coches from "@/assets/img/autowash/autowash-servicio-coches.png";
import sofas from "@/assets/img/autowash/autowash-servicio-sofas.png";
const getAllServices = () => {
  const services = [
    {
      id: 1,
      title: "Limpieza de vehículos",
      desc: "Contamos con los profesionales perfectos para efectuar una amplia cantidad de tareas relacionadas tanto con la limpieza exterior como con la limpieza interior de los vehículos. ",
      detailsImg: coches,
      img: coches,
      category: "lavadero",
      duration: "1500",
      name: "limpiezaCoches"
    },
    {
      id: 1,
      title: "Limpieza de sofás",
      desc: "Nuestra empresa cuenta con los medios adecuados para llevar a cabo una completa limpieza de sofás en Torrejón de Velasco",
      detailsImg: sofas,
      img: sofas,
      category: "lavadero",
      duration: "1500",
      name: "limpiezaSofas"
    },
  ]
  return services;
};

export default getAllServices;
