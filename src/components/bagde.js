//import { useState ,useEffect } from "react";
import "../App.css";
import data from "../data/data.json";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

function Bagde() {
  if (!data) {
    return <div>Loading...</div>;
  }
  /*const {employee, setEmployee} = useState(data[0]);

  useEffect(() => {})
    */
  return (
    <div className="App">
      <div className="App-header">
        <img
          className="App-logo"
          src={process.env.PUBLIC_URL + "/GPSLOGOTIPO SIN INFO@400X.png"}
          alt="logo de GPS"
        />
      </div>

      <div
        className={window.innerWidth > 600 ? "App-body" : "App-mobile-body"}
        aria-label="this content main body space"
      >
        <div
          className={
            window.innerWidth > 600 ? "container-l" : "container-mobile-l"
          }
        >
          <div className="pfp-container">
            <img
              className="pfp "
              src={data[0].pfp}
              crossOrigin="use-credentials"
              alt={"foto de perfil" + data[0].fName + " " + data[0].lName}
            ></img>
          </div>
          <div className="text-container full-name">
            <p>
              <b>
                {data[0].lName} ,{data[0].fName}{" "}
              </b>
            </p>
          </div>
          <div className="text-container cargo">
            <b>{data[0].title}</b>
          </div>
          <div className="text-container dni">{"v-" + data[0].dni}</div>
        </div>
        <div
          className={
            window.innerWidth > 600 ? "container-r" : "container-mobile-r"
          }
        >
          <div className="card-container">
            <div className="card-title">
              <h3> datos de contacto</h3>
            </div>
            <div className={window.innerWidth > 600 ? "card" : "card mobile"}>
              <ul className="card-content">
                <li className="card-content flex">
                  <div className="flex gap-5">
                    <AiFillPhone />
                    <a href={"tel:" + data[0].contInfo.tlf}>
                      {data[0].contInfo.tlf}
                    </a>
                  </div>
                </li>
                <hr className="my-3 h-px border-t-0  bg-neutral-400" />
                <li className="card-content flex flex-1">
                  <div className="flex gap-5">
                    <AiFillMail />
                    <a href={"mailto:" + data[0].contInfo.email}>
                      {data[0].contInfo.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-container">
            <div className="card-title">informacion Medica</div>

            <div className={window.innerWidth > 600 ? "card" : "card mobile"}>
              <div className={"grid grid-cols-1 md:grid-cols-3 card-content"}>
                {data[0].medCond.map((info) => (
                  <div className="relative mb-12 px-3 lg:mb-0 text-left">
                    <div className="mb-2 flex justify-center">
                      <span className="text-primary">
                        <ul>
                          <li key={info.id}>
                            <div>
                              <b>Nombre de la Condición </b>
                            </div>
                            {info.condName}
                          </li>
                          <li key={info.id + "2"}>
                            <div>
                              <b>Tratamiento o Consideraciones</b>
                            </div>
                            {info.condtreat}
                          </li>
                        </ul>
                      </span>
                    </div>
                    <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card-title">contactos de emergencia</div>

            <div className={window.innerWidth > 600 ? "card" : "card mobile"}>
              {data[0].emerCont.map((emer, index) => (
                <ul className="card-content">
                  <li className="card-content ">
                    <b>Nombre </b> {emer.contName}
                    <div className="flex gap-5">
                      <AiFillPhone />
                      <a href={"tel:" + emer.contTlf}>{emer.contTlf}</a>
                    </div>
                  </li>
                </ul>
              ))}
              <hr className="my-3 h-px border-t-0  bg-neutral-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bagde;
