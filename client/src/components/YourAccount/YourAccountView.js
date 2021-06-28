import React from 'react'
import { Link } from 'react-router-dom'

function YourAccountView(props) {
  const { t, i18n } = props;
  const rtl = ( i18n.languages[0] == 'pk' ? 'text-right' : '');

  return (
    <div className="container mt-5">
      {/* <!-- Your Account Starts --> */}
      <h2 className={`${rtl}`}>{t('your_account.title')}</h2>
      {/* <!-- Account Panel Starts --> */}
      <div className="row">
        <div className="col-md-4">
          <a href="your_orders.html" className="btn w-100">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <i className="fas fa-2x fa-shopping-bag"></i>
                  <span className={`h4 ${rtl}`}>{t('your_account.btn1.title')}</span>
                </div>
                <small className={`text-muted ${rtl}`}>{t('your_account.btn1.sub_title')}</small>
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-4">
          <Link to="/password_change" className="btn w-100">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <i className="fas fa-2x fa-key"></i>
                  <span className={`h4 ${rtl}`}>{t('your_account.btn2.title')}</span>
                </div>
                <small className={`text-muted ${rtl}`}>{t('your_account.btn2.sub_title')}</small>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/your_addresses" className="btn w-100">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <i className="fas fa-2x fa-map-marked-alt"></i>
                  <span className={`h4 ${rtl}`}>{t('your_account.btn3.title')}</span>
                </div>
                <small className={`text-muted ${rtl}`}>{t('your_account.btn3.sub_title')}</small>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <!-- Account Panel Starts --> */}

      <div className="row">
        <div className="col-md-4">
          <Link to="/seller_intro" className="btn w-100">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <i className="fas fa-universal-access fa-2x"></i>
                  <span className={`h4 ${rtl}`}>{t('your_account.btn4.title')}</span>
                </div>
                <small className={`text-muted ${rtl}`}>{t('your_account.btn4.sub_title')}</small>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <!-- Your Account Ends --> */}
    </div>
  )
}

export default YourAccountView
