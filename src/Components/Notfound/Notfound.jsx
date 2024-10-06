import React from 'react'

export default function Notfound() {
  return (
    <>
      <section className='min-vh-100 p-5 d-flex align-items-center justify-content-center'>
        <div className='not-found d-flex justify-content-center align-items-center flex-column'>
          <h1 className='py-3 fw-bold display-1'>404</h1>
          <p className='fs-2'>Oops... page not found.</p>
        </div>
      </section>  
    </>
  )
}
