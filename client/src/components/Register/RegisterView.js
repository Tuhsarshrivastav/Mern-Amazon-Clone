import React from 'react'
import { Link } from 'react-router-dom'
import TextFieldInput from './../common/TextFieldInput'

function RegisterView(props) {
  const { t, i18n } = props;
  const rtl = ( i18n.languages[0] == 'pk' ? 'text-right' : '');

  const { error, isLoading } = props.register

  // check loader status
  if (isLoading){
    document.body.classList.add("loading")
  } else {
    document.body.classList.remove("loading")
  }
  
  return (
    <div className="container mb-5">
      {/* <!-- Register Form Card Starts --> */}
      <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{width: "25rem"}}>
        <div className="card-body">
          <h4 className={`card-title rtl`}>{t('register.title')}</h4>
          {/* <!-- Register Form Start --> */}
          <form onSubmit={props.handleSubmit} autoComplete="off" noValidate>
            
            <TextFieldInput 
              type="text"
              name="username"
              className={`form-control ${rtl}`}
              placeholder="Enter user name"
              id="username"
              value={props.username}
              onChange={props.handleChange}
              lblText={t('register.lbl_name')}
              i18n={i18n}
              t={t}
              error={error.username}
            />

            <TextFieldInput 
              type="email"
              name="email"
              className={`form-control ${rtl}`}
              placeholder="abc@abc.com"
              id="email"
              value={props.email}
              onChange={props.handleChange}
              lblText={t('register.lbl_email')}
              infoText={t('register.email_info')}
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
              lblText={t('register.lbl_pass1')}
              infoText={t('register.password_info')}
              i18n={i18n}
              t={t}
              error={error.password}
            />

            <TextFieldInput 
              type="password"
              name="password2"
              className={`form-control ${rtl}`}
              placeholder="******"
              id="password2"
              value={props.password2}
              onChange={props.handleChange}
              lblText={t('register.lbl_pass2')}
              infoText={t('register.password2_info')}
              i18n={i18n}
              t={t}
              error={error.password2}
            />

            <button type="submit" className={`btn btn-warning w-100 shadow btn-sm rounded ${rtl}`}>{t('register.btn_register')}</button>
          </form>
          {/* <!-- Register Form Ends --> */}

          {/* <!-- OR Seperator --> */}
          <hr className="hr-text" data-content={t('register.seperator_text')} />

          {/* <!-- Create account button --> */}
          <p className="text-center">{t('register.have_account_text')} <Link to="/login">{t('register.btn_signin_text')} <i className="fas fa-caret-right"></i></Link></p>
          <a href="#" className={`btn btn-outline-success btn-sm w-100 mt-2 ${rtl}`}>
            <i className="fab fa-google"></i> {t('register.btn_login_google')}
        </a>
          <a href="#" className={`btn btn-outline-primary btn-sm w-100 mt-2 ${rtl}`}>
            <i className="fab fa-facebook-square"></i> {t('register.btn_login_facebook')}
        </a>
        </div>
      </div>
      {/* <!-- Register Form Card Ends --> */}
    </div>
  )
}

export default RegisterView
