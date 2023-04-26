import "./Navbar.css";

function Navbar () {

    return (
  <div className="navbar">
    <img src={require("./img/WANDERWALL-ICON.png")} alt="beige icon reading wanderwall, travel socially" className="navbar-image" />
    <div className="middle">
    <div className='search'></div>
    <div className='nav-link'>Posts</div>
    <div className='nav-link'>Users</div>
    <div className='nav-link'>Trips</div>
    <div className='nav-link'>About</div>
    </div>
    <div className="navbar-image">
    <img src={require("./img/menu512.png")} alt="menu icon" className='menu-icon' />
    </div>
  </div>
    );
};

export default Navbar;