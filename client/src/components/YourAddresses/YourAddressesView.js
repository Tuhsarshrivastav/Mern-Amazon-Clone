import React from 'react'
import CardAddress from './CardAddress'
import { Link } from 'react-router-dom'

function YourAddressesView(props) {
  return (
    <div className="container mt-5 mb-5">
      {/* <!-- URL Breadcrumb Starts --> */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent ml-n3">
          <li className="breadcrumb-item"><Link to="/your_account">Your Account</Link></li>
          <li className="breadcrumb-item active text-danger" aria-current="page">Your Addresses</li>
        </ol>
      </nav>
      {/* <!-- URL Breadcrumb Ends --> */}

      <h3>Your Addresses</h3>

      {/* <!-- Address Card --> */}
      <div className="row">
        <div className="col-md-4 my-md-0 my-2">
          <Link to="/add_new_address" className="btn bg-transparent m-0 p-0">
            <div className="card" style={{ width: "320px", height: "266px", border: "2px dashed #C7C7C7" }}>
              <div className="card-body mt-5">
                <i className="fas fa-plus fa-3x" style={{ color: "#C7C7C7" }}></i>
                <h5 className="card-title">Add address</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-md-0 my-2">
          <CardAddress
            name="Sandeep Ganguly"
            house_no="House No. 123"
            street="ABC"
            city="Kanpur, Uttar Pradesh 123456"
            country="India"
            contact="Phone Number: 1234567890"
          />
        </div>

        <div className="col-md-4 my-md-0 my-2">
          <CardAddress
            name="Sandeep Ganguly"
            house_no="House No. 123"
            street="ABC"
            city="Kanpur, Uttar Pradesh 123456"
            country="India"
            contact="Phone Number: 1234567890"
          />
        </div>

        <div className="col-md-4 my-md-0 my-2">
          <CardAddress
            name="Sandeep Ganguly"
            house_no="House No. 123"
            street="ABC"
            city="Kanpur, Uttar Pradesh 123456"
            country="India"
            contact="Phone Number: 1234567890"
          />
        </div>

        <div className="col-md-4 my-md-0 my-2">
          <CardAddress
            name="Sandeep Ganguly"
            house_no="House No. 123"
            street="ABC"
            city="Kanpur, Uttar Pradesh 123456"
            country="India"
            contact="Phone Number: 1234567890"
          />
        </div>
      </div>
    </div>
  )
}


export default YourAddressesView
