import { useTranslation } from "react-i18next";
import {Header} from './styled';
import Gamburger from '../gamburger';

function HeaderComponent() {
  const { t } = useTranslation();

  return (
    <Header>
      <Gamburger />
      <h1>{t("drift_cross_section_parameters")}</h1>
    </Header>
  );
}

export default HeaderComponent;
