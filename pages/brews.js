import { Table, Container } from 'semantic-ui-react'
import BrewTable from '../components/Brews/BrewTable'
// import baseUrl from '../utils/baseUrl'
import axios from 'axios'


function Brews({ brews }) {

    return (
        <>
         <BrewTable brews={brews} />
        </>
    );
}

Brews.getInitialProps = async ctx => {
    //fetch data on server
    const url = `${window.location.href.replace('/brew', '')}/api/brews`;
    const response = await axios.get(url);
    //return response data as an object 
    return { brews: response.data };

}

export default Brews;
