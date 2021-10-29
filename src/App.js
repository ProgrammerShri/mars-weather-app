import React, { useState, useEffect } from "react";
import "./App.css";
import { getWeather } from "./services/weatherApi";
import Loading from "./components/Loading";
import WeatherPage from "./components/WeatherPage";

function App() {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const d = await getWeather();
    console.log("D", d);
    setData(d);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      {data.length !== 0 && data ? <WeatherPage data={data} /> : <Loading />}
      <div className="credit">
        <p>This is legit photo from Mars</p>
        <p>Photo by Nicolas Lobos on Unsplash</p>
      </div>
    </div>
  );
}

export default App;
