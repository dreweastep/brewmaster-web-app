import { Table, Container } from 'semantic-ui-react'
import BrewTable from '../components/Brews/BrewTable'
import baseUrl from '../utils/baseUrl.js'
import axios from 'axios'


function Brews({ brews, user }) {

    const myBrews = brews.filter(function (brew) {
        return brew.userID == user._id
      });

    return (
        <>
         <BrewTable brews={myBrews} />
        </>
    );
}

Brews.getInitialProps = async ctx => {
    //fetch data on server
    const url = `${baseUrl}/api/brews`;
    const response = await axios.get(url);
    //return response data as an object 
    return { brews: response.data };

}

export default Brews;
