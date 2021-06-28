import React from 'react'
import { Link } from 'react-router-dom'
import FileFieldInput from './../common/FileFieldInput'
import TextFieldInput from './../common/TextFieldInput'
import { apiBaseURL } from './../../utils/constant'

function PasswordChangeView(props) {

  const { t, i18n } = props;
  const rtl = (i18n.languages[0] == 'pk' ? 'text-right' : '');

  const { error, isLoading, user } = props.login

  // check loader status
  if (isLoading) {
    document.body.classList.add("loading")
  } else {
    document.body.classList.remove("loading")
  }

  return (
    <div className="container w-50 mt-5 mb-5">
      {/* <!-- Change Password Form Card Starts -->
    <!-- URL Breadcrumb Starts --> */}
      <nav aria-label="breadcrumb">
        <ol className={`breadcrumb bg-transparent ml-n3 ${rtl}`}>
          <li className="breadcrumb-item"><Link to="/your_account">{t('password_change.breadcrumb.link1')}</Link></li>
          <li className="breadcrumb-item active text-danger" aria-current="page">{t('password_change.breadcrumb.link2')}</li>
        </ol>
      </nav>
      {/* <!-- URL Breadcrumb Ends --> */}

      <h3 className={`${rtl}`}>{t('password_change.title')}</h3>
      <div className="card mx-auto mt-5 shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
        <img
          src={apiBaseURL + "/profile_pic/" + user.profile_pic}
          width="200"
          height="200"
          className="rounded-circle mx-auto"
        />
      </div>

      <form onSubmit={props.handlePicUpload} encType="multipart/form-data" className="needs-validation w-85 mx-auto mt-5 font-weight-bold" autoComplete="off" noValidate>

        <FileFieldInput
          type="file"
          name="profile_pic"
          className={`form-control ${rtl}`}
          id="profile_pic"
          onChange={props.handlePicChange}
          lblText={t("password_change.profile_pic.lbl_txt")}
          i18n={i18n}
          t={t}
          error={error.profile_pic}
        />
        <button type="submit" className="btn btn-danger shadow btn-sm rounded">{t("password_change.profile_pic.btn_txt_submit")}</button>
      </form>

      {/* <!-- Change Password Form Starts --> */}
      <form onSubmit={props.handleSubmit} className="needs-validation w-85 mx-auto mt-5 font-weight-bold" autoComplete="off" noValidate>

        <TextFieldInput
          type="text"
          name="username"
          className={`form-control ${rtl}`}
          placeholder="Ganguly Tech"
          id="username"
          value={props.username}
          onChange={props.handleChange}
          lblText={t('password_change.lbl_txt_username')}
          i18n={i18n}
          t={t}
          error={error.username}
        />

        <TextFieldInput
          type="password"
          name="oldPassword"
          className={`form-control ${rtl}`}
          placeholder="*******"
          id="odlPassword"
          value={props.oldPassword}
          onChange={props.handleChange}
          lblText={t('password_change.lbl_txt_old_password')}
          i18n={i18n}
          t={t}
          error={error.oldPassword}
        />

        <TextFieldInput
          type="password"
          name="newPassword"
          className={`form-control ${rtl}`}
          placeholder="*******"
          id="newPassword"
          value={props.newPassword}
          onChange={props.handleChange}
          infoText={t('password_change.info_txt_new_password')}
          lblText={t('password_change.lbl_txt_new_password')}
          i18n={i18n}
          t={t}
          error={error.newPassword}
        />

        <TextFieldInput
          type="password"
          name="newPassword2"
          className={`form-control ${rtl}`}
          placeholder="*******"
          id="newPassword"
          value={props.newPassword2}
          onChange={props.handleChange}
          infoText={t('password_change.info_txt_new_password2')}
          lblText={t('password_change.lbl_txt_new_password2')}
          i18n={i18n}
          t={t}
          error={error.newPassword2}
        />

        <button type="submit" className="btn btn-warning shadow btn-sm rounded">{t('password_change.btn_txt_submit')}</button>
      </form>
      {/* <!-- Change Password Form Ends -->
    <!-- Change Password Form Card Ends --> */}
    </div>
  )
}

export default PasswordChangeView
