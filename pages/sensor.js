import { Table, Container } from 'semantic-ui-react'
import BrewTable from '../components/Brews/BrewTable'
import baseUrl from '../utils/baseUrl'
import axios from 'axios'
import TemperatureDisplay from '../components/Sensor/TemperatureDisplay';


function Sensor({ temp }) {

  return (
    <>
      <TemperatureDisplay temp={temp.temperature} />
    </>
  );
}

Sensor.getInitialProps = async ctx => {
  //fetch data on server
  const url = `${baseUrl}/api/temperature`;
  const response = await axios.get(url);
  //return response data as an object 
  return { temp: response.data };

}

export default Sensor;
