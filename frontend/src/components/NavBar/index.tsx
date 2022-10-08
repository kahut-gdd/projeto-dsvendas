import kahutDev from 'assets/img/kahutDev.png'

function NavBar() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
        <div className="container">
          <nav className="my-2 my-md-0 mr-md-3">
            <img src={kahutDev} alt="kahutDev" width="120" />
          </nav>
        </div>
      </div>
    );
  }
  
  export default NavBar;