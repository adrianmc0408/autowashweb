import ServiceMain from "@/components/layout/main/ServiceMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { Grid2 } from "@mui/material";
import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Galeria() {
  // Obtener las imágenes de la carpeta /public/autowash/galeria
  const galeriaPath = path.join(process.cwd(), "public/autowash/galeria");
  const images = fs.readdirSync(galeriaPath).map((file) => `/autowash/galeria/${file}`);

  return (
    <PageWrapper
      headerStyle={3}
      headerBg={"black"}
      footerStyle={2}
      isOnepage={true}
      headerType={3}
    >
      <ThemeController />
      <Grid2 container display={"flex"} justifyContent={"center"} spacing={2} margin={"1rem"}>
        {images.map((image, index) => (
          <Grid2
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display={"flex"}
            justifyContent={"center"}
          >
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <Image
                src={image}
                alt={`Galería ${index + 1}`}
                width={16} // Usamos proporción 16:9 como ejemplo
                height={9}
                layout="responsive" // Mantiene la proporción de aspecto
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            </div>
          </Grid2>
        ))}
      </Grid2>
    </PageWrapper>
  );
}
