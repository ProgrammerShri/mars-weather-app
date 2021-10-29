import axios from "axios";
import moment from "moment";

export const getWeather = async () => {
  let shortData = [];
  try {
    const { data } = await axios.get(
      "https://api.nasa.gov/insight_weather/?api_key=Byl1ufVGrUxwP5A4ldrsLobSfoARlUAfgqD92gWO&feedtype=json&ver=1.0"
    );
    let sol_keys = data.sol_keys;
    if (sol_keys.length === 0) return shortData;
    for (let i = 0; i < 7; i++) {
      shortData.push([
        sol_keys[i],
        moment(data[sol_keys[i]].First_UTC).format("MMMM DD"),
        {
          cmin: Math.round(data[sol_keys[i]].AT.mn),
          cmax: Math.round(data[sol_keys[i]].AT.mx),
        },
        {
          fmin: Math.round(data[sol_keys[i]].AT.mn * 1.8 + 32),
          fmax: Math.round(data[sol_keys[i]].AT.mx * 1.8 + 32),
        },
        data[sol_keys[i]].Season,
      ]);
    }
  } catch (error) {
    console.error(error);
  }
  return shortData;
};
