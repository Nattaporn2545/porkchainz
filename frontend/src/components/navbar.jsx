import "../components/navbar.css";
import { Link } from "react-router-dom";
import { GiPig } from "react-icons/gi";

function navbar() {
  return (
    <div className="navbar">
      
      <div className="logo">
      <GiPig  style={{color:'#074cb3',fontSize:'2rem',paddingRight:'3px'}} />
        <p> PorkChain</p>
        
      </div>
      <div className="item">
        <ul className="item-1">
          <li>
            <Link className="role" to="/farmerPork">Farmer</Link>
          </li>
        </ul>
        <ul className="item-2">
          <li>
            logout
          </li>
          <li>
            profile
          </li>
        </ul>
      </div>

    </div>

  )
}

export default navbar