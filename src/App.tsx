import "./App.css";
import { CanvasRevealPage } from "./components/ui/CanvasRevealPage";
import NavLayout from "./Layouts/Shared/NavLayout";

function App() {
  return (
    <NavLayout>
      {/* <LandingPage /> */}
      <CanvasRevealPage />
    </NavLayout>
  );
}

export default App;
