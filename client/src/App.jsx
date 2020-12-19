import { useContext } from "react";
import "./App.scss";
import SideNav from "./components/SideNav";
import Browser from "./pages/Browser";
import { AppContext } from "./context/AppContext";

function App() {
  const { browserOpen } = useContext(AppContext);
  return (
    <div>
      <SideNav />
      <div className="container">{browserOpen && <Browser />}</div>
    </div>
  );
}

export default App;
