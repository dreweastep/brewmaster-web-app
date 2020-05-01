import AccountHeader from "../components/Account/AccountHeader";
import AccountPermissions from '../components/Account/AccountPermissions'
import { parseCookies } from "nookies";
import baseUrl from "../utils/baseUrl";
import axios from "axios";


function Account({ user }) {
  return (
    <>
      <AccountHeader {...user} />
      {user.role === 'root' && <AccountPermissions/>}
    </>
  );
}


export default Account;
