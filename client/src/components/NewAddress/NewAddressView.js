import React from 'react'
import { Link } from 'react-router-dom'
import TextFieldInput from './../common/TextFieldInput'

function NewAddressView(props) {
  const { t, i18n } = props;
  const rtl = (i18n.languages[0] == 'pk' ? 'text-right' : '');
  const error = {}

  return (

    <div className="container mt-5 mb-5">
      {/* <!-- New Address Form Starts -->
    <!-- URL Breadcrumb Starts --> */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent ml-n3">
          <li className="breadcrumb-item"><Link to="/your_account">Your Account</Link></li>
          <li className="breadcrumb-item"><Link to="/your_addresses">Your Addresses</Link></li>
          <li className="breadcrumb-item active text-danger" aria-current="page">New Address</li>
        </ol>
      </nav>
      {/* <!-- URL Breadcrumb Ends --> */}

      <h3 className="font-weight-bold">Add a new address</h3>
      <p className="font-weight-bold">Or pick up your packages at your convenience from our self-service locations.</p>

      {/* <!-- New Address Form Starts --> */}
      <form onSubmit={props.handleSubmit} className="mx-auto font-weight-bold" autoComplete="off" noValidate>
        <div className="form-group">
          <label htmlFor="country">Country/Region</label>
          <select className="form-control" id="country" name="country" required>
            <option value="0">India</option>
            <option value="1">Pakistan</option>
            <option value="2">Bangladesh</option>
            <option value="3">Nepal</option>
            <option value="4">Sri Lanka</option>
          </select>
          <div className="valid-feedback">
            <i className="far text-success fa-thumbs-up"></i> OK
        </div>
          <div className="invalid-feedback">
            <i className="fas text-danger fa-exclamation-triangle"></i> Some error in Country/Region.
        </div>
        </div>

        <TextFieldInput
          type="text"
          name="full_name"
          className={`form-control ${rtl}`}
          placeholder="Enter user name"
          id="full_name"
          value={props.full_name}
          onChange={props.handleChange}
          lblText={"Full name"}
          i18n={i18n}
          t={t}
          error={error.full_name}
        />

        <TextFieldInput
          type="text"
          name="mobile_number"
          className={`form-control ${rtl}`}
          placeholder="10-digit mobile number without prefixes"
          id="mobile_number"
          value={props.mobile_number}
          onChange={props.handleChange}
          lblText={"Mobile number"}
          i18n={i18n}
          t={t}
          error={error.mobile_number}
          infoText={"May be used to assist delivery"}
        />


        <TextFieldInput
          type="text"
          name="pin_code"
          className={`form-control ${rtl}`}
          placeholder="6 digit [0-9] PIN Code"
          id="pin_code"
          value={props.pin_code}
          onChange={props.handleChange}
          lblText={"PIN code"}
          i18n={i18n}
          t={t}
          error={error.pin_code}
        />

        <TextFieldInput
          type="text"
          name="house_no"
          className={`form-control ${rtl}`}
          placeholder=""
          id="house_no"
          value={props.house_no}
          onChange={props.handleChange}
          lblText={"Flat, House no., Building, Company, Apartment"}
          i18n={i18n}
          t={t}
          error={error.house_no}
        />

        <TextFieldInput
          type="text"
          name="street"
          className={`form-control ${rtl}`}
          placeholder=""
          id="street"
          value={props.street}
          onChange={props.handleChange}
          lblText={"Area, Colony, Street, Sector, Village"}
          i18n={i18n}
          t={t}
          error={error.street}
        />

        <TextFieldInput
          type="text"
          name="landmark"
          className={`form-control ${rtl}`}
          placeholder="E.g. Near AIIMS Flyover, Behind Regal Cinema, etc."
          id="landmark"
          value={props.landmark}
          onChange={props.handleChange}
          lblText={"Landmark"}
          i18n={i18n}
          t={t}
          error={error.landmark}
        />

        <TextFieldInput
          type="text"
          name="city"
          className={`form-control ${rtl}`}
          placeholder=""
          id="city"
          value={props.city}
          onChange={props.handleChange}
          lblText={"Town/City"}
          i18n={i18n}
          t={t}
          error={error.city}
        />

        <div className="form-group">
          <label htmlFor="state">State / Province / Region</label>
          <select className="form-control" id="state" name="state" required>
            <option value="0">India</option>
            <option value="1">Pakistan</option>
            <option value="2">Bangladesh</option>
            <option value="3">Nepal</option>
            <option value="4">Sri Lanka</option>
          </select>
          <div className="valid-feedback">
            <i className="far text-success fa-thumbs-up"></i> OK
        </div>
          <div className="invalid-feedback">
            <i className="fas text-danger fa-exclamation-triangle"></i> Some error in state.
        </div>
        </div>

        <h5>Add delivery instructions</h5>
        <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than
        planned.</p>

        <div className="form-group">
          <label htmlFor="addressType">Address Type</label>
          <select className="form-control" id="addressType" name="addressType" required>
            <option value="0">Select an Address Type</option>
            <option value="1">Home (7 am – 9 pm delivery)</option>
            <option value="2">Office/Commercial (10 AM - 6 PM delivery)</option>
          </select>
          <div className="valid-feedback">
            <i className="far text-success fa-thumbs-up"></i> OK
        </div>
          <div className="invalid-feedback">
            <i className="fas text-danger fa-exclamation-triangle"></i> Some error in address type.
        </div>
        </div>

        <button type="submit" className="btn btn-warning shadow rounded">Add address</button>
      </form>
      {/* <!-- New Address Form Starts --> */}
    </div>
  )
}

export default NewAddressView
