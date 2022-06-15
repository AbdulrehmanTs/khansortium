import React from 'react'
import "./modal.css"

const Modal = ({ children, id }) => {
  return (
    <div className="modalContainer" id={id}>
      <div className="modal">
        {children}
      </div>
    </div>
  )
}

export default Modal