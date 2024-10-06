/* eslint-disable no-unused-vars */
import { useState } from 'react'
import port1 from '../../Assets/port1.png';
import port2 from '../../Assets/port2.png';
import port3 from '../../Assets/port3.png';

export default function Portfolio() {

  const [data, setdata] = useState([
    { img: port3, id: 'img1' },
    { img: port1, id: 'img2' },
    { img: port2, id: 'img3' },
    { img: port3, id: 'img4' },
    { img: port1, id: 'img5' },
    { img: port2, id: 'img6' },
  ]);
  return (
    <>
      <section className='portfolio min-vh-100 text-center pb-5'>
          <h1 className='fw-bold pt-4'>PORTFOLIO COMPONENT</h1>
          <div className="portfolio-star">
              <i className='fa-solid fa-star fs-4'></i>
          </div>

          <div className="container">
            
            <div className="row g-4 py-5">
                {data.map((item) =>
                  <div className="col-md-4" key={item.id}>
                      <div className="portfolio-item" data-bs-toggle="modal" data-bs-target={"#"+ item.id}>
                        <img src={item.img} alt="portfolio-image" className='w-100 rounded-3'/>
                        <div className="portfolio-layer rounded-3">
                          <i className='fa-sold fa-plus fw-bold text-white fa-6x'></i>
                        </div>
                      </div>
                  </div>
                )}

                {data.map((item , index) => <>
                  <div className="modal fade" id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key={index}>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body p-0">
                          <img src={item.img} alt="portfolio-image" className='w-100 rounded-2'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </>)}
            </div>
          </div>

      </section>
    </>
  )
}
