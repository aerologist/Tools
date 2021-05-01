import { useTranslation } from "react-i18next";
import { HeaderMobile } from "./styled";
import Gamburger from "../gamburger";

function HeaderMobileComponent() {
  const { t } = useTranslation();

  return (
    <HeaderMobile>
      <Gamburger />
      <h1>{t("drift_cross_section")}</h1>
    </HeaderMobile>
  );
}

export default HeaderMobileComponent;
