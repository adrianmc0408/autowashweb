import ButtonPopup from "@/components/shared/buttons/ButtonPopup";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import heroVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import heroVectorImage4 from "@/assets/img/herobaner/vector__4.png";
import heroBgImage6 from "@/assets/img/banner/autowash-banner.jpg";
import Image from "next/image";

const Hero8 = () => {
  return (
    <div
      className="herobanner d-flex align-items-center height__800 bg__image position-relative herobanner__margin"
      style={{ background: `url('${heroBgImage6.src}')` }}
    >
      <div className="container-fluid full__width__padding">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--2">
                  <div className="herobanner__small__text">
                    <span className="text__gradient">
                      AutoWasht Boxes
                    </span>
                  </div>
                  <div className="herobanner__title herobanner__title--2">
                    <h1>
                      Limpieza de coches en{" "}
                      <span className="text__gradient">Torrejón de Velasco</span>
                    </h1>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary
                      text={"Todos nuestros servicios"}
                      path={"#servicios"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero8;
