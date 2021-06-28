import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import LandingPage from './components/layout/LandingPage';
import { useTranslation } from "react-i18next";
import PrivateRoute from './components/common/PrivateRoute'
import NavbarContainer from './components/layout/Navbar/NavbarContainer';
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';
import YourAccountContainer from './components/YourAccount/YourAccountContainer';
import setAuthToken from './utils/setAuthToken'
import { SET_LOGIN_USER } from './redux/actions/types'
import PasswordChangeContainer from './components/PasswordChange/PasswordChangeContainer'
import SellerIntroContainer from './components/SellerAccount/SellerIntroContainer'
import YourAddressesContainer from './components/YourAddresses/YourAddressesContainer'
import NewAddressContainer from './components/NewAddress/NewAddressContainer'

// check localStorage for data
if (localStorage.jwtToken && localStorage.user) {
  // setAuthToken to HTTP header
  setAuthToken(localStorage.jwtToken)

  // redux setup for user data
  store.dispatch({ type: SET_LOGIN_USER, payload: JSON.parse(localStorage.user) })

}

function App() {
  const [t, i18n] = useTranslation('common');

  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavbarContainer t={t} i18n={i18n} />
          <Route exact path="/">
            <LandingPage t={t} i18n={i18n} />
          </Route>
          <Route exact path="/login" >
            <LoginContainer t={t} i18n={i18n} />
          </Route>
          <Route exact path="/register" >
            <RegisterContainer t={t} i18n={i18n} />
          </Route>
          <Route exact path="/your_account" >
            <PrivateRoute>
              <YourAccountContainer t={t} i18n={i18n} />
            </PrivateRoute>
          </Route>
          <Route exact path="/password_change" >
            <PrivateRoute>
              <PasswordChangeContainer t={t} i18n={i18n} />
            </PrivateRoute>
          </Route>
          <Route exact path="/seller_intro" >
            <PrivateRoute>
              <SellerIntroContainer t={t} i18n={i18n} />
            </PrivateRoute>
          </Route>
          <Route exact path="/your_addresses" >
            <PrivateRoute>
              <YourAddressesContainer t={t} i18n={i18n} />
            </PrivateRoute>
          </Route>
          <Route exact path="/add_new_address" >
            <PrivateRoute>
              <NewAddressContainer t={t} i18n={i18n} />
            </PrivateRoute>
          </Route>
          <Footer t={t} i18n={i18n} />
        </div>
      </Router>
    </Provider>
  )
}

export default App;