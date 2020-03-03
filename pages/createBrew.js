import BrewCardList from "../components/Index/BrewCardList"
import axios from 'axios'
import { useEffect, useState } from "react";
import baseUrl from '../utils/baseUrl'
import BrewForm from '../components/CreateBrew/BrewForm'

function CreateBrew() {
  return (
    <>
      <BrewForm/>
    </>
  );
}


export default CreateBrew;
