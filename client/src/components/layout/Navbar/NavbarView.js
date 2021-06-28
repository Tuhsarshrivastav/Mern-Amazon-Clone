import React from 'react'
import { Link } from 'react-router-dom'
import { apiBaseURL } from './../../../utils/constant'

function NavbarView(props) {
  const { t, rtl } = props;
  const { isAuthenticated, user } = props.login

  const authLinks = (
    <li className="nav-item dropdown px-2">
      <a className="nav-link" href="login.html" id="userAccount" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <img
          src={apiBaseURL + "/profile_pic/" + user.profile_pic}
          width="40"
          height="40"
          className="rounded-circle"
        />
      </a>
      <div className="dropdown-menu px-3" aria-labelledby="userAccount">
        <div className="d-flex flex-column justify-content-center">
          <button type="button" onClick={props.logoutUser} className={`btn btn-warning w-75 btn-sm font-weight-bold ${rtl}`}>{t('navbar.logout')}</button>
        </div>
      </div>
    </li>
  )

  const guestLinks = (
    <li className="nav-item dropdown px-2">
      <a className="nav-link" href="login.html" id="userAccount" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-2x fa-user-circle"></i>
      </a>
      <div className="dropdown-menu px-3" aria-labelledby="userAccount">
        <div className="d-flex flex-column justify-content-center">
          <Link to="/login" className={`btn btn-warning w-75 btn-sm font-weight-bold ${rtl}`}>{t('navbar.menu_signin_btn_title')}</Link>
          <small>{t('navbar.menu_signin_sub_title')}? <Link to="/register">{t('navbar.menu_signing_register_text')}</Link></small>
        </div>
      </div>
    </li>
  )

  const drawerAuthLinks = (
    <React.Fragment>
      <Link to="/your_account" className={`btn btn-outline-success my-2 btn-sm ${rtl}`}>{t('navbar.btn_account_title')}</Link>
      <button type="button" onClick={props.logoutUser} className={`btn btn-warning my-2 btn-sm ${rtl}`}>{t('navbar.logout')}</button>
    </React.Fragment>
  )

  const drawerGuestLinks = (
    <React.Fragment>
      <Link to="/register" className={`btn btn-outline-success my-2 btn-sm ${rtl}`}>{t('navbar.register')}</Link>
      <Link to="/login" className={`btn btn-warning my-2 btn-sm ${rtl}`}>{t('navbar.btn_signin_title')}</Link>
    </React.Fragment>
  )

  const drawerProfilePic = () => {
    if (isAuthenticated){
      return (
        <img
          src={apiBaseURL + "/profile_pic/" + user.profile_pic}
          width="40"
          height="40"
          className="rounded-circle"
          style={{ marginRight: "5px" }}
        />
      )
    } else {
      return (
        <i className="fas fa-user-circle"></i>
      )
    }
  }

  return (
    <React.Fragment>
      {/* <!-- Navbar Starts --> */}
      <nav id="pageTop" className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <!-- Drawer Start --> */}
        <button className="btn btn-outline-light" data-toggle="drawer" data-target="#amazonDrawer">
          <i className="fas fa-sliders-h"></i>
        </button>

        <div className="drawer drawer-left slide" tabIndex="-1" role="dialog" aria-labelledby="drawer-demo-title"
          aria-hidden="true" id="amazonDrawer">
          <div className="drawer-content drawer-content-scrollable" role="document">
            <div className="drawer-header bg-dark text-white">
              <h4 className={`drawer-title mx-auto ${rtl}`} id="drawer-demo-title">
                {drawerProfilePic()}
                {t('navbar.sidebar_title', { username: ( user.username ? user.username : "Sign In" ) })}
              </h4>
            </div>
            <div className="drawer-body">
              <h6 className={`text-muted text-uppercase ${rtl}`}>{t('navbar.sidebar_help_title')}</h6>
              {isAuthenticated ? drawerAuthLinks : drawerGuestLinks}
            </div>
            <div className="drawer-footer">
              <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="drawer" aria-label="Close">
                <i className="fas fa-2x fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Drawer Ends --> */}

        <Link className="navbar-brand pl-2" to="/">
          <img src="assets/img/amazon_logo_white.png" height="30" width="100" alt="amazon logo white" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Search Bar Starts --> */}
          <form className="form-inline px-lg-5" onSubmit={props.handleSearch} noValidate method="get">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="dropdown">
                  <button className={`btn btn-secondary dropdown-toggle ${rtl}`} name="btnCategory" type="button"
                    id="btnCategoryDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {t(props.productCategory[props.selectedCat])}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="btnCategoryDropdownMenu">
                    <a className={`dropdown-item ${rtl}`} href="#" onClick={(e) => { props.handleCatChange(e, 0) }}>{t('navbar.product_category.all')}</a>
                    <a className={`dropdown-item ${rtl}`} href="#" onClick={(e) => { props.handleCatChange(e, 1) }}>{t('navbar.product_category.smartphone')}</a>
                    <a className={`dropdown-item ${rtl}`} href="#" onClick={(e) => { props.handleCatChange(e, 2) }}>{t('navbar.product_category.kitchen_hardware')}</a>
                    <a className={`dropdown-item ${rtl}`} href="#" onClick={(e) => { props.handleCatChange(e, 3) }}>{t('navbar.product_category.prime_deal')}</a>
                    <a className={`dropdown-item ${rtl}`} href="#" onClick={(e) => { props.handleCatChange(e, 4) }}>{t('navbar.product_category.book')}</a>
                  </div>
                </div>
              </div>
              <input type="text" className={`form-control ${rtl}`} size="50" name="query" id="query"
                onChange={props.handleQueryChange} value={props.query}
              />
              <input type="text" name="category" id="category" value={props.selectedCat} readOnly hidden />
              <div className="input-group-append">
                <button type="submit" className="btn btn-warning">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          {/* <!-- Search Bar Ends --> */}
          <ul className="navbar-nav">
            {/* <!-- Preffered Language Starts --> */}
            <li className="nav-item dropdown px-2">
              <a className="nav-link" href="#" id="prefLanguageDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-2x fa-language"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="prefLanguageDropdown">
                <form className="p-3">
                  <div className="dropdown-divider"></div>
                  <div className="custom-control custom-radio mb-2">
                    <input className="custom-control-input" type="radio" name="prefLang" id="englishLang" value="en"
                      onChange={props.handleChangeLang} checked={props.prefLang == "en" ? true : false} />
                    <label className="custom-control-label" htmlFor="englishLang">
                      <img src="assets/img/flag/english.svg" alt="uk flag" width="50" height="30" />
                    </label>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="custom-control custom-radio mb-2">
                    <input className="custom-control-input" type="radio" name="prefLang" id="hindiLang" value="in"
                      onChange={props.handleChangeLang} checked={props.prefLang == "in" ? true : false} />
                    <label className="custom-control-label" htmlFor="hindiLang">
                      <img src="assets/img/flag/hindi.svg" alt="uk flag" width="50" height="30" />
                    </label>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="custom-control custom-radio mb-2">
                    <input className="custom-control-input" type="radio" name="prefLang" id="urduLang" value="pk"
                      onChange={props.handleChangeLang} checked={props.prefLang == "pk" ? true : false} />
                    <label className="custom-control-label" htmlFor="urduLang">
                      <img src="assets/img/flag/urdu.svg" alt="uk flag" width="50" height="30" />
                    </label>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="custom-control custom-radio">
                    <input className="custom-control-input" type="radio" name="prefLang" id="banglaLang" value="bd"
                      onChange={props.handleChangeLang} checked={props.prefLang == "bd" ? true : false} />
                    <label className="custom-control-label" htmlFor="banglaLang">
                      <img src="assets/img/flag/bangla.svg" alt="uk flag" width="50" height="30" />
                    </label>
                  </div>
                  <div className="dropdown-divider"></div>
                </form>
              </div>
            </li>
            {/* <!-- Preffered Language Ends -->
        <!-- User Account Starts --> */}
            {isAuthenticated ? authLinks : guestLinks}
            {/* <!-- User Account Ends -->
        <!-- Shopping Cart Starts --> */}
            <li className="nav-item px-2">
              <a className="nav-link" href="#" aria-disabled="true">
                <i className="fas fa-2x text-light fa-shopping-cart"></i>
                <span className="badge badge-warning badge-pill">0</span>
              </a>
            </li>
            {/* <!-- Shopping Cart Starts --> */}
          </ul>
        </div>
      </nav>
      {/* <!-- Navbar Ends --> */}

    </React.Fragment>
  );
}

export default NavbarView;
