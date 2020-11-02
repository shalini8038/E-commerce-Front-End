import React,{Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout,isAutheticated } from "../auth/helper";


const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "black" };
  } else {
    return { color: "green" };
  }
};

const Menu = ({ history }) => (
  <div>
   

    <ul className="navbar navbar-expand-lg navbar navbar-dark bg-secondary">

    <li className="nav-item navbar-nav collapse navbar-collapse">
        <Link  style={{color:"HighlightText",fontFamily:"cursive",fontSize:"30px"}} className="nav-link">
          E-Commerce Store
        </Link>
      </li>


      <li className="nav-item navbar-nav collapse navbar-collapse">
        <Link style={currentTab(history, "/"),{fontSize:"20px"}} className="nav-link active" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item navbar-nav collapse navbar-collapse">
        <Link
          style={currentTab(history, "/cart"),{fontSize:"20px",color:"HighlightText"}}
          className="nav-link active"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAutheticated() && isAutheticated().user.role === 0 && (
        <li className="nav-item navbar-nav collapse navbar-collapse">
        <Link
          style={currentTab(history, "/user/dashboard"),{fontSize:"20px"}}
          className="nav-link active"
          to="/user/dashboard"
        >
          User Dashboard
        </Link>
      </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="nav-item navbar-nav collapse navbar-collapse">
        <Link
          style={currentTab(history, "/admin/dashboard"),{fontSize:"20px"}}
          className="nav-link active"
          to="/admin/dashboard"
        >
          A. Dashboard
        </Link>
      </li>
      )}
      {!isAutheticated()&&(
        <Fragment>
        <li className="nav-item navbar-nav collapse navbar-collapse">
          <Link
            style={currentTab(history, "/signup"),{fontSize:"20px"}}
            className="nav-link active"
            to="/signup"
          >
            Signup
          </Link>
        </li>
        <li className="nav-item navbar-nav collapse navbar-collapse">
          <Link
            style={currentTab(history, "/signin"),{fontSize:"20px"}}
            className="nav-link active"
            to="/signin"
          >
            Sign In
          </Link>
        </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className="nav-item navbar-nav collapse navbar-collapse">
        <span className="nav-link text-warning" style={{fontSize:"20px"}}
        onClick={()=>{
          signout(()=>{
            history.push("/")
          });
        }}
        >
          Signout
        </span>
      </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
