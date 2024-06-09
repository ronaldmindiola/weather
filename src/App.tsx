import NavBar from "./components/organisms/NavBar";
import Config from "./components/organisms/Config";
import Display from "./components/molecules/Display";
import Forecast from "./components/organisms/Forecast";
import { AlertDialog } from "./components/ui/alert-dialog";

function App() {
  return (
    <>
      <NavBar />
      <Config />
      <Display />
      <Forecast />
      <AlertDialog />
    </>
  );
}

export default App;
