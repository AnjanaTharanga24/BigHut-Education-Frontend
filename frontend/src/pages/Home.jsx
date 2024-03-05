import React from "react";
import "../css/sidebar.css";
import Sidebar from "../component/Sidebar";
import "../css/home.css";
import Contents from "../component/Contents";


export default function NewSidebar() {



  return (
    <div>
      <>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container" style={{backgroundColor:"white"}}>
            <Sidebar />
            <section className="home">
              <div className="content " content>
                <div style={{ paddingRight: "300px" }}>
                  

                  <div className="mt-4 mb-4">
                    
                  </div>

                  <div className="content-body">
                     <Contents/>
                  </div>

                 

                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    </div>
  );
}
