import "./App.css";
import NavLayout from "./Layouts/Shared/NavLayout";
import { AboutAlmonds } from "./Pages/AboutAlmonds/AboutAlmonds";
import { LandingPage } from "./Pages/Landing/LandingPage";

function App() {
  return (
    <NavLayout>
      <LandingPage />
      <AboutAlmonds />
    </NavLayout>
  );
}

export default App;
