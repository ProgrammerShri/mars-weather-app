import React, { useState, useEffect } from "react";
import "./css/Weather.css";
import Card from "./Card";

const WeatherPage = ({ data }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [downloaded, setDownloaded] = useState(false);

  const handleCelsius = (boolean) => {
    setIsCelsius(boolean);
  };

  useEffect(() => {
    setTimeout(() => {
      setDownloaded(true);
    }, 12500);
  }, []);
  return (
    <section className="weatherpage">
      <div className="weatherpage__box">
        <h2 className="weatherpage__box__h2">Robot: InSight</h2>
        <h2 className="weatherpage__box__h2">
          Mission: Daily weather measurement
        </h2>
        <h2 className="weatherpage__box__h2">
          Location: Elysium Planitia, Mars
        </h2>
        <h2 className="weatherpage__box__h2">Season: {data[6][4]}</h2>
        <h2 className="weatherpage__box__h2">Receiving data ...</h2>
        <div className={downloaded ? "today" : "today none"}>
          <div className="today__sol">
            <h3 className="today__sol__sol">Sol {data[6][0]}</h3>
            <h3 className="today__sol__day">{data[6][1]}</h3>
          </div>
          <div className="today__temperature">
            <h3 className="today__temperature__h3">
              High: {isCelsius ? data[6][2].cmax : data[6][3].fmax}{" "}
              <span
                className={isCelsius ? "cursor active" : "cursor"}
                onClick={() => handleCelsius(true)}
              >
                C
              </span>
              <span className="slash">|</span>
              <span
                className={isCelsius ? "cursor" : "cursor active"}
                onClick={() => handleCelsius(false)}
              >
                F
              </span>
            </h3>
            <h3 className="today__temperature__h3">
              Low: {isCelsius ? data[6][2].cmin : data[6][3].fmin}{" "}
              <span
                className={isCelsius ? "cursor active" : "cursor"}
                onClick={() => handleCelsius(true)}
              >
                C
              </span>
              <span className="slash">|</span>
              <span
                className={isCelsius ? "cursor" : "cursor active"}
                onClick={() => handleCelsius(false)}
              >
                F
              </span>
            </h3>
          </div>
        </div>
        <div
          className={
            downloaded
              ? "weatherpage__box__grid"
              : "weatherpage__box__grid none"
          }
        >
          {data
            ? data.map((one) => {
                if (one[0] !== data[6][0]) {
                  return (
                    <Card
                      key={one[0]}
                      sol={"Sol " + one[0]}
                      day={one[1]}
                      high={isCelsius ? one[2].cmax : one[3].fmax}
                      low={isCelsius ? one[2].cmin : one[3].fmin}
                      celsius={isCelsius}
                    />
                  );
                }
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default WeatherPage;
