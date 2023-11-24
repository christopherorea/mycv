const Nav = ()=>{

    return(
        <div className="home-navbar">
          <span className="Card-Heading home-heading">@THCOOKIEH</span>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <span className="Card-Heading home-heading1">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z">
                  </path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link4 Navbar-Link">About</span>
              <span className="home-link5 Navbar-Link">Experience</span>
              <span className="home-link6 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
    );
};

export default Nav;