import "./App.css";
import NavLayout from "./Layouts/Shared/NavLayout";
import { LandingPage } from "./Pages/Landing/LandingPage";

function App() {
  return (
    <NavLayout>
      <LandingPage />
    </NavLayout>
  );
}

export default App;
