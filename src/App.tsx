import "./App.css";
import { CanvasRevealPage } from "./components/ui/CanvasRevealPage";
import NavLayout from "./Layouts/Shared/NavLayout";
import { AboutAlmonds } from "./Pages/AboutAlmonds/AboutAlmonds";

function App() {
  return (
    <NavLayout>
      <CanvasRevealPage />
      <AboutAlmonds />
    </NavLayout>
  );
}

export default App;
