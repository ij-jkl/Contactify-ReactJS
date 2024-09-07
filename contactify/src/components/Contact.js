import React from 'react'
import { Link } from 'react-router-dom'

const Contact = ({ contact }) => {
  return (
    <Link to={`/contacts/${contact.id}`} className="contact__item">
            <div className="contact__header">
                <div className="contact__image">
                    // If the application cannot display the photoURL its going to read the name
                    <img src={contact.photoUrl} alt={contact.name}  />
                </div>
                <div className="contact__details">
                    // We substring the name because if its to long we get identation Problems
                    <p className="contact_name">{contact.name.substring(0, 15)} </p>
                    <p className="contact_title">{contact.title}</p>
                </div>
            </div>
            <div className="contact__body">
                <p><i className="bi bi-envelope"></i> {contact.email.substring(0, 20)} </p>
                <p><i className="bi bi-geo"></i> {contact.address}</p>
                <p><i className="bi bi-telephone"></i> {contact.phone}</p>
                // If the contact is active we show a check mark, else we show and X
                <p>{contact.status === 'Active' ? <i className='bi bi-check-circle'></i> : 
                    <i className='bi bi-x-circle'></i>} {contact.status}</p>
            </div>
        </Link>
  )
}

export default Contact