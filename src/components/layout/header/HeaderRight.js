import Link from "next/link";
import CartHeader from "./CartHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useHeaderContex } from "@/providers/HeaderContex";
import SocialHeader from "./SocialHeader";

const HeaderRight = () => {
  const { style } = useHeaderContex();
  return (
    <div className="headerarea__component">
      <div className="headerarea__right">
        <SocialHeader />
      </div>
    </div>
  );
};

export default HeaderRight;
