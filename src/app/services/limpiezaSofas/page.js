import ServiceMain from "@/components/layout/main/ServiceMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import './page.css';
export default function LimpiezaSofas() {
  return (
    <PageWrapper
      headerStyle={3}
      headerBg={"black"}
      footerStyle={2}
      isOnepage={true}
      headerType={3}
    >
      <ThemeController />
      <Grid2 container display={"flex"} justifyContent={"center"}>
        <Grid2 size={{ xl: 3, lg: 4, md: 6, sm: 12 }} padding={"2rem"}>
          <Card sx={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <CardActionArea>
              <div class="containerImg">
                <img className="background" src="/autowash/AutoWash-Boxes-silla.jpg" />
                <img className="front-image" src="/autowash/AutoWash-Boxes-silla.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Limpieza de sillas
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Trabajamos con un equipamiento preciso con el que limpiar todo tipo de sillas tanto en vehículos como exteriores y sin que la limpieza ocasione ningún perjuicio
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xl: 3, lg: 4, md: 6, sm: 12 }} padding={"2rem"}>
          <Card sx={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <CardActionArea>
              <div class="containerImg">
                <img className="background" src="/autowash/AutoWash-Boxes-sillones.jpg" />
                <img className="front-image" src="/autowash/AutoWash-Boxes-sillones.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Limpieza de sillones
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Si tienes que limpiar sillones, lo mejor es que lo dejes en manos de profesionales como los que puedes encontrar en nuestra empresa. </Typography>
                <br></br>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Extremamos las precauciones para que el servicio no afecte a la estructura o al propio tapizado del sillón
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xl: 3, lg: 4, md: 6, sm: 12 }} padding={"2rem"}>
          <Card sx={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <CardActionArea>
              <div class="containerImg">
                <img className="background" src="/autowash/AutoWash-Boxes-persona-reparando-sofa.jpg" />
                <img className="front-image" src="/autowash/AutoWash-Boxes-persona-reparando-sofa.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Reparación de sofás
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Nos dedicamos tanto a la limpieza como a la reparación de sofás, ya que entendemos que estos elementos pueden tener una segunda vida de un modo mucho más práctico.
                </Typography>
                <br></br>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Traenos tu sofás para que los examinemos y determinemos la mejor solución con unos servicios eficaces.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>


      </Grid2>
    </PageWrapper>
  );
}