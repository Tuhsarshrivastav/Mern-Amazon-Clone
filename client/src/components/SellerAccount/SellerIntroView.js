import React from 'react'

function SellerIntroView(props) {

  const { t, i18n } = props;
  const rtl = ( i18n.languages[0] == 'pk' ? 'text-right' : '');

  return (
  <div className="container-fluid mb-5" >
    {/* <!-- Seller Account Intro Starts --> */}
    <div className="row">
      <div className={`col-md-12 p-5 text-white text-center ${rtl}`} style={{backgroundColor: '#008577'}}>
        <h1>{t('seller_intro.heading')}</h1>
        <p>{t('seller_intro.author.name')}<em>{t('seller_intro.author.role')}</em> {t('seller_intro.author.job')}</p>
        <a href="your_seller_account.html" className="btn btn-warning rounded-pill">{t('seller_intro.btn_txt')}</a>
        <p>{t('seller_intro.sub_title')}</p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 pl-5 pr-5 pt-3 pb-2">
        <h2 className={`${rtl}`}>{t('seller_intro.question_txt')}</h2>
      </div>
    </div>
    
    <div className="row">
      <div className="col-md-4 p-5">
        <img src="assets/img/seller_account/img_01.svg" className="mb-2" height="100" alt="" />
        <h3 className={`${rtl}`}>{t('seller_intro.row.col1.title')}</h3>
        <div className={`${rtl}`}>{t('seller_intro.row.col1.content')}</div>
      </div>
      <div className="col-md-4 p-5">
        <img src="assets/img/seller_account/img_02.svg" className="mb-2" height="100" alt="" />
        <h3 className={`${rtl}`}>{t('seller_intro.row.col2.title')}</h3>
        <div className={`${rtl}`}>{t('seller_intro.row.col2.content')}</div>
      </div>
      <div className="col-md-4 p-5">
        <img src="assets/img/seller_account/img_03.svg" className="mb-2" height="100" alt="" />
        <h3 className={`${rtl}`}>{t('seller_intro.row.col3.title')}</h3>
        <div className={`${rtl}`}>{t('seller_intro.row.col3.content')}</div>
      </div>
    </div>
  </div>
  )
}

export default SellerIntroView
