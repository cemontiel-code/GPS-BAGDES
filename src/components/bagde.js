import { useParams } from "react-router-dom";
import "../App.css";
import data from "../data/data.json";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

function Bagde() {
  
  const { id } = useParams();
  const dataIndex = parseInt(id);
 
  return (
    <div className="App">

      <div className={window.innerWidth > 600 ? "App-body" : "App-mobile-body"}>
        <div
          className={
            window.innerWidth > 600 ? "container-l" : "container-mobile-l"
          }
        >
          <div className="pfp-container">
            <img
              className="pfp "
              src={data[dataIndex].pfp}
             alt={'foto de perfil de '+data[dataIndex].fName + " " + data[dataIndex].lName} crossOrigin="anonymous"
            ></img>
          </div>
          <div className="text-container full-name">
            <p>
              <b>
                {data[dataIndex].lName} ,{data[dataIndex].fName}{" "}
              </b>
            </p>
          </div>
          <div className="text-container cargo">
            <b>{data[dataIndex].title}</b>
          </div>
          <div className="text-container dni">{"v-" + data[dataIndex].dni}</div>
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
                    <a href={"tel:" + data[dataIndex].contInfo.tlf}>
                      {data[dataIndex].contInfo.tlf}
                    </a>
                  </div>
                </li>
                <hr className="my-3 h-px border-t-0  bg-neutral-400" />
                <li className="card-content flex flex-1">
                  <div className="flex gap-5">
                    <AiFillMail />
                    <a href={"mailto:" + data[dataIndex].contInfo.email}>
                      {data[dataIndex].contInfo.email}
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
                {data[dataIndex].medCond.map((info) => (
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
              {data[dataIndex].emerCont.map((emer, index) => (
                <ul className="card-content">
                  <li className="card-content " key={index}>
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
