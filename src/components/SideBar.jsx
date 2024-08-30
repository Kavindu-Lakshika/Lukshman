import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../Css/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faShoppingCart,
  faCalendarDays,
  faMapMarkerAlt,
  faUsers,
  faTags,
  faStore,
  faShoppingBag,
  faCamera,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ onLogout }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const logout = () => {
    onLogout();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="wrapper">
      <aside id="sidebar" className={isExpanded ? "expand" : ""}>
        <div className="d-flex align-items-center mt-1">
          <button className="toggle-btn" onClick={toggleSidebar} type="button">
            <FontAwesomeIcon icon={faCamera} />
          </button>
          <div className="sidebar-logo">
            <Link to="/dashboard">Lakshman Camera</Link>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <Link
              to="/dashboard"
              className={`sidebar-link ${isActive("/dashboard") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faTachometerAlt} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/booking"
              className={`sidebar-link ${isActive("/booking") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>Bookings</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/item"
              className={`sidebar-link ${isActive("/item") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Items</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/branch"
              className={`sidebar-link ${isActive("/branch") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Branches</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/customer"
              className={`sidebar-link ${isActive("/customer") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faUsers} />
              <span>Customers</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/buyer"
              className={`sidebar-link ${isActive("/buyer") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faShoppingBag} />
              <span>Buyers</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/vender"
              className={`sidebar-link ${isActive("/vender") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faStore} />
              <span>Venders</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/brand"
              className={`sidebar-link ${isActive("/brand") ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faTags} />
              <span>Brands</span>
            </Link>
          </li>
        </ul>
        <div className="sidebar-footer mb-3">
          <Link to="/logout" className="sidebar-link" onClick={logout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
