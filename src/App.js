import {
  BrowserRouter as Enrutador,
  Routes,
  Route,
} from "react-router-dom";
import Bagde from "./components/bagde";
import BadgeList from "./components/badgeList";
import "./App.css";
import data from "./data/data.json";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (data != null) {
      setInfo(data);
    } else {
      return <div> Cargando ...</div>;
    }
  }, [info]);

  return (
    <div className="App">
      <Enrutador>
      <div className="App-header p-1">
          <img
            className="App-logo"
            src={process.env.PUBLIC_URL + "/GPSLOGOTIPO SIN INFO@400X.png"}
            alt="logo de GPS"
          />
        </div>
        <Routes>
          <Route path="badge/:id" element={<Bagde />}></Route>
          <Route path="/" element={<BadgeList />}></Route>
        </Routes>

    

        
      </Enrutador>
    </div>
  );
}

export default App;
