import React from 'react'
import confuse from './images/confused.jpg'
import point from './images/pointing.jpg'

function Main() {
  return (
      <div>
          <>
          <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <h1 className="font-weight-bold">ARE YOU BORED AND HAVE NOTHING TO DO WITH YOUR <span className="text-primary">LIFE</span></h1>
            </div>

            <div className="col-md-6">
              <img src={confuse} className="img-fluid" alt="Picture 1" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 banner">
              <img src={point} className="img-fluid pic" alt="Testimonial" />
            </div>

            <div className="col-md-6">
              <h1 className="font-weight-bold">LOOK NO FURTHER, WE GOT YOU!</h1>
              <p>The Button below will sort out some activities for you for the day. Might not be much but it's better than watching paint on the wall dry</p>
            </div>
          </div>
        </div>    
          </>
    </div>
  )
}

export default Main