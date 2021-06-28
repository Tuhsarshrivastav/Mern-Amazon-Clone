import React from 'react'

function Footer(props) {

  const { t, i18n } = props;
  const rtl = ( i18n.languages[0] == 'pk' ? 'text-right' : '');

  return (
    <React.Fragment>
      {/* <!-- Footer Starts --> */}
      <div className="container-fluid bg-dark px-0">
        <a href="#pageTop" className={`btn btn-dark btn-block mb-5 ${rtl}`}>{t('footer.back_to_top')}</a>

        <div className="container">
          <div className="row text-white mb-5">

            <div className="col-md-3">
              <h5>{t('footer.upper.col1.title')}</h5>
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.about')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.career')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.press_release')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.investment')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.offers')}</a> <br />
            </div>

            <div className="col-md-3">
              <h5>{t('footer.upper.col2.title')}</h5>
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col2.facebook')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col2.twitter')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col2.instagram')}</a> <br />
            </div>

            <div className="col-md-3">
              <h5>{t('footer.upper.col3.title')}</h5>
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.amazon_seller')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.affiliate_marketing')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.fullfilment_center')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.advertise')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.amazon_pay')}</a> <br />
            </div>

            <div className="col-md-3">
              <h5>{t('footer.upper.col4.title')}</h5>
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.covid')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.your_account')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.returns')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.funding')}</a> <br />
              <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.help')}</a> <br />
            </div>

          </div>
        </div>

        <div className="dropdown-divider mt-3"></div>

        <div className="row mt-3 mx-0 px-0">
          <div className="col-md-12 text-center">
            <img src="assets/img/amazon_logo_white.png" height="30" width="100" alt="amazon logo white footer" />
          </div>
        </div>

        {/* <!-- Sub footer starts --> */}
        <div className="py-3 mt-3 shadow-lg" style={{ backgroundColor: "#131a22", fontSize: "12px"}}>
          <div className="container">

            <div className="row text-white">

              <div className="col-md-3">
                <p>{t('footer.upper.col1.title')}</p>
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.about')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.career')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.press_release')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.investment')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col1.offers')}</a> <br />
              </div>

              <div className="col-md-3">
                <p>{t('footer.upper.col2.title')}</p>
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col2.facebook')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col2.twitter')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col2.instagram')}</a> <br />
              </div>

              <div className="col-md-3">
                <p>{t('footer.upper.col3.title')}</p>
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.amazon_seller')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.affiliate_marketing')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.fullfilment_center')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.advertise')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col3.amazon_pay')}</a> <br />
              </div>

              <div className="col-md-3">
                <p>{t('footer.upper.col4.title')}</p>
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.covid')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.your_account')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.returns')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.funding')}</a> <br />
                <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col4.help')}</a> <br />
              </div>
            </div>

            <div className="row my-5">
              <div className="col-md-12 text-center text-white">
                <p>
                  <i className="far fa-copyright"></i> { "1996-" + (new Date().getFullYear()) + ", " + t('footer.ending_title')}
                </p>
              </div>
            </div>

          </div>
        </div>
        {/* <!-- Sub footer ends --> */}
      </div>
    </React.Fragment>
  )
}

export default Footer;
