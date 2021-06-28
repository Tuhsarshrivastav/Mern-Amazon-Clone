import LandingPage from "./components/Layout/LandingPage";
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation("common");
  return (
    <div>
      <LandingPage t={t} i18n={i18n} />
    </div>
  );
}

export default App;
