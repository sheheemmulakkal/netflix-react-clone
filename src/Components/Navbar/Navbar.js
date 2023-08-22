import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar h-20 flex items-center pl-4 text-white">
      <div className="w-1/2 navbar-left flex">
        <div className="logo w-1/6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"
          />
        </div>
        <div className="nav-menu pl-3">
          <ul className="nav-list font-semibold">
            <li className="nav-list-item inline mx-2">Home</li>
            <li className="nav-list-item inline mx-2">TV Shows</li>
            <li className="nav-list-item inline mx-2">Movies</li>
            <li className="nav-list-item inline mx-2">Recently Added</li>
            <li className="nav-list-item inline mx-2">My List</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 navbar-right flex justify-end pr-3">
        <ul className="nav-right-menu flex flex-row font-semibold">
          <li className="nav-right-list-item inline mx-3">
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
          <li className="nav-right-list-item inline mx-3">KIDS</li>
          <li className="nav-right-list-item inline mx-3">DVD</li>
          <li className="nav-right-list-item inline mx-3">
            <i class="fa-solid fa-bell" style={{ color: "#ffffff" }}></i>
          </li>
          <li className="nav-right-list-item inline mx-3 avatar">
            <img
              src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
              alt="Avatar"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
