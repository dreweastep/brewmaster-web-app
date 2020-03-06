import BrewCardList from "../components/Index/BrewCardList"
import axios from 'axios'
import React from "react";
// import baseUrl from '../utils/baseUrl'

function Home({ brews }) {
  return (
    <>
      <BrewCardList brews={brews} />
    </>
  );
}

Home.getInitialProps = async ctx => {

  //fetch data on server
  const url = `${window.location.href.substring(0, str.length - 1)}/api/brews`;
  const response = await axios.get(url);
  //return response data as an object 
  return {brews: response.data};
}

export default Home;
