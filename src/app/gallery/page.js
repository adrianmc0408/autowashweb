import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { Grid2, ImageList, ImageListItem } from "@mui/material";

export default function Gallery() {
    var itemData = [{
        img: '/autowash/AutoWash-Boxes-tapiceria-1.jpg',
        title: 'Image',
    }];
    return (
        <PageWrapper
            headerStyle={3}
            headerBg={"black"}
            footerStyle={2}
            isOnepage={true}
            headerType={3}
        >
            <Grid2 container>

            </Grid2>

        </PageWrapper>
    );
}