import React from 'react'

function CardAddress(props) {
  return (
    <div className="card" >
      <div className="card-header bg-transparent">
        <p className="text-muted p-0 m-0">Default: <i className="fab fa-amazon"></i></p>
      </div>
      <div className="card-body m-0 pt-1">
        <p className="font-weight-bold my-0 py-0">{props.name}</p>
        <p className="my-0 py-0">{props.house_no}</p>
        <p className="my-0 py-0">{props.street}</p>
        <p className="my-0 py-0">{props.city}</p>
        <p className="my-0 py-0">{props.country}</p>
        <p className="my-0 py-0">{props.contact}</p>
      </div>
      <div className="card-footer bg-transparent">
        <a href="#" className="btn btn-outline-info btn-sm"><i className="fas fa-pencil-alt"></i></a>
        <a href="#" className="btn btn-outline-danger btn-sm"><i className="fas fa-trash-alt"></i></a>
      </div>
    </div>
  )
}

export default CardAddress
