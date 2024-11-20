
import Home8Main from "@/components/layout/main/Home8Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "AutoWash Boxes",
  description: "AutoWash Boxes",
};
export default function Home8Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      headerBg={"black"}
      footerStyle={2}
      isOnepage={true}
      headerType={3}
      copyright={2}
    >
      <ThemeController />
      <Home8Main />
    </PageWrapper>
  );
}

