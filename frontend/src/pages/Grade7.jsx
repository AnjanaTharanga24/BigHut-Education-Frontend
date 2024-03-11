import React from 'react'
import Sidebar from '../component/Sidebar'

export default function Grade12() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container" style={{ backgroundColor: "white" }}>
      <Sidebar />
        <section className="home">
          <div className="content" content>
            <div style={{ paddingRight: "300px" }}>
              <div className="mt-4 mb-4"></div>
              <div className="content-body" style={{marginLeft:"-50px"}}>
               
                 <h1>this is grade 7 page</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
