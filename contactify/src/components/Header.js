import React from 'react'

const Header = ({toggleModal,nbOfContacts}) => {
  return (
    <header className = "header">
        <div className='container'>
            <h3>Contact List ({nbOfContacts})</h3>
            /* Toggle Modal is a Boolean, its going to be True or False, and its going to reference Open or Closed*/
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-quare'></i> Add New Contact
            </button>
        </div>
    </header>
  )
}

export default Header