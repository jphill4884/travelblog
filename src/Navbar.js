import "./Navbar.css";

function Navbar () {

    return (
  <div className="navbar">
    <img src={require("./img/WANDERWALL-ICON.png")} alt="beige icon reaading wanderwall, travel socially" className="navbar-image" />
    <div className='search'></div>
    <div>Posts</div>
    <div>Users</div>
    <div>Trips</div>
    <div>About</div>
    <div className='menu'></div>
  </div>
    );
};

export default Navbar;