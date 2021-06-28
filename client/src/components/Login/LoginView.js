import React from 'react'
import { Link } from 'react-router-dom'
import TextFieldInput from './../common/TextFieldInput'

function LoginView(props) {
  const { t, i18n } = props;
  const rtl = ( i18n.languages[0] == 'pk' ? 'text-right' : '');
  const { error, isLoading } = props.login
  
  // check loader status
  if (isLoading){
    document.body.classList.add("loading")
  } else {
    document.body.classList.remove("loading")
  }

  return (
    <div className="container mb-5">
      {/* <!-- Login Form Card Starts --> */}
      <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{width: "25rem"}}>
        <div className="card-body">
          <h4 className={`card-title ${rtl}`}>{t('login.title')}</h4>
          {/* <!-- Login Form Start --> */}
          <form onSubmit={props.handleSubmit} autoComplete="off" noValidate>

            <TextFieldInput 
              type="email"
              name="email"
              className={`form-control ${rtl}`}
              placeholder="abc@abc.com"
              id="email"
              value={props.email}
              onChange={props.handleChange}
              infoText={t('login.email_info')}
              lblText={t('login.lbl_email')}
              i18n={i18n}
              t={t}
              error={error.email}
            />

            <TextFieldInput 
              type="password"
              name="password"
              className={`form-control ${rtl}`}
              placeholder="******"
              id="password"
              value={props.password}
              onChange={props.handleChange}
              infoText={t('login.password_info')}
              lblText={t('login.lbl_password')}
              i18n={i18n}
              t={t}
              error={error.password}
            />

            <button type="submit" className={`btn btn-warning w-100 shadow btn-sm rounded ${rtl}`}>{t('login.btn_signin')}</button>
          </form>
          {/* <!-- Login Form Ends --> */}

          {/* <!-- OR Seperator --> */}
          <hr className="hr-text" data-content={t('login.seperator_text')} />

          {/* <!-- Create account button --> */}
          <Link to="/register" className={`btn btn-dark btn-sm w-100 mt-2 ${rtl}`}>{t('login.btn_register_text')}</Link>
          <a href="#" className={`btn btn-outline-success btn-sm w-100 mt-2 ${rtl}`}>
            <i className="fab fa-google"></i> {t('login.btn_login_google')}
        </a>
          <a href="#" className={`btn btn-outline-primary btn-sm w-100 mt-2 ${rtl}`}>
            <i className="fab fa-facebook-square"></i> {t('login.btn_login_facebook')}
        </a>
        </div>
      </div>
      {/* <!-- Login Form Card Ends --> */}
    </div>
  )
}

export default LoginView
