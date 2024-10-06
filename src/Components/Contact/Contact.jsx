import React from 'react'

export default function Contact() {
  return (
    <>
        <section className='contacts vh-100 text-center'>
          <h1 className='fw-bold pt-4'>CONTACTS COMPONENT</h1>
          <div className="contacts-star">
              <i className='fa-solid fa-star fs-4'></i>
          </div>

          <div className="contacts-inputs w-50 mx-auto">
            <form>
              <input type="text" className='w-100 form-control form-control-lg my-5 border-bottom' placeholder='User Name'/>
              <input type="text" className='w-100 form-control form-control-lg my-5 border-bottom' placeholder='User Age'/>
              <input type="text" className='w-100 form-control form-control-lg my-5 border-bottom' placeholder='User Email'/>
              <input type="text" className='w-100 form-control form-control-lg my-5 border-bottom' placeholder='User Password'/>
              <button className='d-block form-button'>Send Message</button>
            </form>
          </div>
        </section>
    </>
  )
}
