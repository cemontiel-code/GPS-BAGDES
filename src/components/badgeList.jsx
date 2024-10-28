import "../App.css";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import { useEffect, useState } from "react";

function BadgeList() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (data != null) {
      setInfo(data);
    } else {
      return <div> Cargando ...</div>;
    }
  }, [info]);

  return (
    <div className="container bg-brand-white w-ful h-full justify-center">
      <h2 className="employee-list-title">Lista de Empleados</h2>

      <div className="employee-grid-container">
        {info.map((worker) => (
          <Link to={"/badge/" + worker.id}>
            <div className="employee-card">
              <img
                className="employee-card-pfp"
                src={worker.pfp}
                alt={"foto de perfil de " + worker.fName + " " + worker.lName}
                crossOrigin="anonymous"
              >
                {console.log(worker.pfp)}
              </img>
              <div> {worker.fName + " ," + worker.lName} </div>
            </div>
          </Link>
        ))}
        ;
      </div>
    </div>
  );
}

export default BadgeList;
