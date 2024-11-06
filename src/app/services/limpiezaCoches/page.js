import ServiceMain from "@/components/layout/main/ServiceMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import './page.css';
export default function LimpiezaCoches() {
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
                <img class="background" src="/autowash/AutoWash-Boxes-tapiceria-1.jpg" />
                <img class="front-image" src="/autowash/AutoWash-Boxes-tapiceria-1.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Limpieza de tapicerías
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Nuestro equipo utiliza productos de alta calidad y técnicas avanzadas para eliminar manchas, olores y suciedad de las tapicerías de los coches.
                </Typography>
                <br></br>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  ¡Déjanos cuidar de tus tapicerías y devolverles su aspecto original!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xl: 3, lg: 4, md: 6, sm: 12 }} padding={"2rem"}>
          <Card sx={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <CardActionArea>
              <div class="containerImg">
                <img class="background" src="/autowash/AutoWash-Boxes-faro.jpg" />
                <img class="front-image" src="/autowash/AutoWash-Boxes-faro.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Pulido de faros
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Nuestro equipo utiliza técnicas avanzadas y los mejores productos para restaurar la claridad de los faros.</Typography>
                <br></br>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  ¡Déjanos cuidar de sus faros y brindarle una mejor experiencia de conducción!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xl: 3, lg: 4, md: 6, sm: 12 }} padding={"2rem"}>
          <Card sx={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <CardActionArea>
              <div class="containerImg">
                <img class="background" src="\autowash\AutoWash-Boxes-pulido-de-carroceria-2.jpg" />
                <img class="front-image" src="\autowash\AutoWash-Boxes-pulido-de-carroceria-2.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Pulido de carrocerías
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Con nuestro equipo altamente capacitado y productos de primera calidad, podemos eliminar arañazos, manchas y otras imperfecciones de la superficie de su coche.
                </Typography>
                <br></br>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  ¡Déjanos hacer que su coche brille como nuevo!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xl: 3, lg: 4, md: 6, sm: 12 }} padding={"2rem"}>
          <Card sx={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <CardActionArea>
              <div class="containerImg">
                <img class="background" src="\autowash\AutoWash-Boxes-hombre-encerando-vehiculo.jpg" />
                <img class="front-image" src="\autowash\AutoWash-Boxes-hombre-encerando-vehiculo.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Encerado de carrocerías
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Utilizamos ceras de alta calidad y técnicas avanzadas para asegurarnos de que su coche tenga un acabado brillante y duradero.
                </Typography>
                <br></br>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Déjanos proteger y mejorar la apariencia de su coche con nuestro servicio de encerado.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xl: 3, lg: 4, md: 6, sm: 12 }} padding={"2rem"}>
          <Card sx={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <CardActionArea>
              <div class="containerImg">
                <img class="background" src="\autowash\AutoWash-Boxes-motor.jpg" />
                <img class="front-image" src="\autowash\AutoWash-Boxes-motor.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Limpieza de motores
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Utilizamos técnicas avanzadas y productos de alta calidad para eliminar la suciedad, el aceite y otros contaminantes de su motor.
                </Typography>
                <br></br>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Deja que nuestro equipo altamente capacitado limpie y proteja su motor con nuestro servicio de limpieza de motores de coches.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>

        <Grid2 size={{ xl: 3, lg: 4, md: 6, sm: 12 }} padding={"2rem"}>
          <Card sx={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <CardActionArea>
              <div class="containerImg">
                <img class="background" src="\autowash\AutoWash-Boxes-tapiceria-3.jpg" />
                <img class="front-image" src="\autowash\AutoWash-Boxes-tapiceria-3.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Reparación de tapicerías
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Nuestro equipo altamente capacitado utiliza técnicas avanzadas y materiales de alta calidad para reparar rasgaduras, quemaduras y otros daños en la tapicería.
                </Typography>
                <br></br>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  ¡Déjanos ayudarle a que su coche se vea y se sienta como nuevo!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
        <Grid2 size={{ xl: 3, lg: 4, md: 6, sm: 12 }} padding={"2rem"}>
          <Card sx={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <CardActionArea>
              <div class="containerImg">
                <img class="background" src="\autowash\AutoWash-Boxes-vehiculo-limpio.jpg" />
                <img class="front-image" src="\autowash\AutoWash-Boxes-vehiculo-limpio.jpg" />
              </div>
              <CardContent className="cardContentText">
                <Typography gutterBottom variant="h5" component="div">
                  Limpieza detailing
                </Typography>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  Nuestro equipo altamente capacitado utiliza técnicas avanzadas y productos de alta calidad para limpiar a fondo su coche, incluyendo la carrocería, el interior, los cristales, las llantas y más.
                </Typography>
                <br></br>
                <Typography variant="body" sx={{ color: 'text.secondary' }}>
                  ¡Déjanos ayudarle a que su coche se vea y se sienta como nuevo!</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>

      </Grid2>
    </PageWrapper>
  );
}