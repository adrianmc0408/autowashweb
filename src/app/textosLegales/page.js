import ServiceMain from "@/components/layout/main/ServiceMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import './page.css';
export default function TextosLegales() {
  return (
    <PageWrapper
      headerStyle={3}
      headerBg={"black"}
      footerStyle={2}
      isOnepage={true}
      headerType={3}
    >
      <ThemeController />
      <Grid2 container display={"flex"} justifyContent={"center"} padding={"20px"}>
        <Card sx={["box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;", "margin-bottom : 20px;", "width: 80%;"]}
        >
          <CardContent className="cardContentText">
            <Typography variant="h5" fontWeight={"bold"} marginBottom={"10px"}>
              Aviso Legal
            </Typography>
            <Typography variant="body1" marginBottom={"10px"}>
              El titular de este sitio web es GUILLERMO MARTINEZ CABELLO, con N.I.F. 53805577K, con domicilio en Calle Los Madroños, 33 b, 28990 Torrejón de Velasco, Madrid.
            </Typography>
            <Typography variant="body1">
              El acceso al site de GUILLERMO MARTINEZ CABELLO es gratuito. Todo el contenido es propiedad intelectual de GUILLERMO MARTINEZ CABELLO. Cualquier utilización de los mismos contraria a las normas en materia de propiedad intelectual será perseguida con arreglo a la legislación vigente.
            </Typography>
          </CardContent>

        </Card>
        <Card sx={["box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;", "margin-bottom : 20px;", "width: 80%;"]}
        >
          <CardContent className="cardContentText">
            <Typography variant="h5" fontWeight={"bold"} marginBottom={"10px"}>
              Politica de Privacidad
            </Typography>
            <Typography variant="body1" marginBottom={"10px"}>
              USO Y TRATAMIENTO DE DATOS DE CARÁCTER PERSONAL
            </Typography>
            <Typography variant="body1" marginBottom={"10px"}>
              Le informamos que los datos de carácter personal que pudieran proporcionarse, a través de este sitio web, así como los que pudiera facilitar en el futuro en el marco de su relación jurídica con esta entidad, serán incorporados a nuestra base de datos.
            </Typography>
            <Typography variant="body1" marginBottom={"10px"}>
              Se informa sobre los siguientes extremos relativos a la protección de datos:
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Responsable del tratamiento:
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              Somos responsables de los datos recogidos en el formulario correspondiente.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Necesidad del tratamiento:
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              La comunicación de sus datos a través del formulario correspondiente es obligatoria para que podamos contactar.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Finalidades del tratamiento y legitimación del tratamiento:
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              Gestionar, administrar, prestarle los servicios o facilitarle los productos que solicite y, en su caso, para el cumplimiento y ejecución de los contratos que pudiera celebrar, conocer mejor sus gustos, adecuar los servicios a sus preferencias.
              Enviarle, por correo postal, correo electrónico y otros medios de comunicación electrónica equivalente, comunicaciones comerciales y publicitarias sobre nuestros productos y/o servicios.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Destinatarios:
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              Contratamos con alguna entidad que presta servicios como los de mantenimiento y hosting, a través de contratos de encargo del tratamiento para dar soporte a los fines de tratamiento indicados.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Plazo de conservación de datos:
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              Conservaremos sus datos mientras se mantenga el tratamiento y no solicite la supresión de los mismos.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Derechos:
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              Podrá ejercitar los derechos de acceso, rectificación, supresión, limitación al tratamiento, oposición, portabilidad y derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, mediante comunicación escrita al domicilio indicado en el aviso legal. También podrá revocar su consentimiento sin efectos retroactivos u oponerse a la recepción de comunicaciones comerciales publicitarias por email y otros medios de comunicación electrónica equivalente, y presentar una reclamación ante la Autoridad de control, en España, la Agencia Española de Protección de Datos.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Modificación de la política de privacidad:
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              Nos reservamos el derecho a modificar nuestra Política de Privacidad, de acuerdo con nuestro propio criterio, o motivado por un cambio doctrinal de la Autoridad competente en Protección de Datos, legislativo o jurisprudencial. El uso de la Web después de dichos cambios implicará la aceptación de estos.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Legislación aplicable:
            </Typography>
            <Typography variant="body1">
              Cualquier controversia que se derive del uso de este sitio web será regida, interpretada y sometida de acuerdo con las leyes de España.
            </Typography>
          </CardContent>

        </Card>
        <Card sx={["box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;", "margin-bottom : 20px;", "width: 80%;"]}
        >
          <CardContent className="cardContentText">
            <Typography variant="h5" fontWeight={"bold"} marginBottom={"16px"}>
              Declaración de Accesibilidad
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Política de accesibilidad
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              La empresa <strong>GUILLERMO MARTINEZ CABELLO</strong> se ha comprometido a hacer accesible su sitio web de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público, o desarrollos financiados desde Europa.
              <br />
              La presente declaración de accesibilidad se aplica al sitio web, excluyendo los contenidos incrustados provenientes de otros dominios.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Situación de cumplimiento
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              Este sitio web es <strong>Parcialmente Conforme</strong> con el RD 1112/2018 debido a la falta de conformidad de los aspectos que se indican a continuación.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Contenido no accesible
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              El contenido que se recoge a continuación no es accesible por los siguientes motivos:
            </Typography>
            <ul style={{ marginBottom: "16px", paddingLeft: "20px" }}>
              <li>
                Algunas de las páginas no tienen definido su título correctamente – Requisito número 9.2.4.2 Titulado de páginas de UNE-EN 301549:2022.
              </li>
              <li>
                Pueden existir algunas imágenes cuya alternativa no esté implementada o no sea correcta – Requisito 9.1.1.1 Contenido no textual UNE-EN 301549:2022.
              </li>
              <li>
                Pueden existir encabezados que no sean claros o breves, o que no deberían ser encabezados – Requisito número 9.2.4.6 Encabezados y etiquetas de UNE-EN 301549:2022.
              </li>
              <li>
                Puede haber campos de formulario donde su etiqueta no sea correcta o no exista – Requisito número 9.2.5.3 Inclusión de la etiqueta en el nombre de UNE-EN 301549:2022 y requisito 9.3.3.2 Etiquetas o instrucciones de UNE-EN 301549:2022.
              </li>
              <li>
                Podrían existir fallos puntuales de edición en alguna página web.
              </li>
            </ul>

            <Typography variant="body1" marginBottom={"16px"}>
              <strong>Carga desproporcionada:</strong> No resulta aplicable.
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              <strong>El contenido no entra dentro del ámbito de la legislación aplicable:</strong> Podrían existir archivos ofimáticos en PDF u otros formatos publicados antes del 20 de septiembre de 2018 que no cumplan en su totalidad todos los requisitos de accesibilidad.
              <br />
              Puede haber contenidos de terceros que no estén desarrollados en esta Unidad, ni bajo su control, como archivos ofimáticos de diferentes organismos que deban publicarse en este sitio.
            </Typography>

            <Typography variant="subtitle1" fontWeight={"bold"} marginBottom={"8px"}>
              Observaciones y datos de contacto
            </Typography>
            <Typography variant="body1" marginBottom={"16px"}>
              Puede realizar comunicaciones sobre requisitos de accesibilidad [artículo 10.2.a) del RD 1112/2018] como, por ejemplo:
            </Typography>
            <ul style={{ marginBottom: "16px", paddingLeft: "20px" }}>
              <li>Informar sobre cualquier posible incumplimiento por parte de este sitio web.</li>
              <li>Transmitir otras dificultades de acceso al contenido.</li>
              <li>
                Formular cualquier otra consulta o sugerencia de mejora relativa a la accesibilidad del sitio web llamando al teléfono <strong>640 188 935</strong>.
              </li>
            </ul>

            <Typography variant="body1" marginBottom={"16px"}>
              Puede presentar:
            </Typography>
            <ul style={{ marginBottom: "16px", paddingLeft: "20px" }}>
              <li>Una queja relativa al cumplimiento de los requisitos del RD 1112/2018.</li>
              <li>
                Una solicitud de información accesible relativa a:
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    Contenidos que están excluidos del ámbito de aplicación del RD 1112/2018 según lo establecido por el artículo 3, apartado 4.
                  </li>
                  <li>
                    Contenidos que están exentos del cumplimiento de los requisitos de accesibilidad por imponer una carga desproporcionada.
                  </li>
                </ul>
              </li>
            </ul>

            <Typography variant="body1">
              En la solicitud de información accesible, se debe concretar, con toda claridad, los hechos, razones y petición que permitan constatar que se trata de una solicitud razonable y legítima.
            </Typography>
          </CardContent>

        </Card>
      </Grid2>
    </PageWrapper >

  );
}