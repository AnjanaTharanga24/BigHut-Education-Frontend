import React from "react";
import Sidebar from "./Sidebar";

export default function ALMaths() {
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container" style={{ backgroundColor: "white" }}>
          <Sidebar />
          <section className="home">
            <div className="content" content>
              <div style={{ paddingRight: "300px" }}>
                <div className="mt-4 mb-4"></div>
                <div className="content-body" style={{ marginLeft: "-50px" }}>
                  <div
                    className="card shadow-lg mb-5 rounded"
                    style={{
                      borderRadius: "20px 20px 0 0",
                      width: "700px",
                      height: "600px",
                      marginLeft: "200px",
                    }}
                  >
                    <div className="card-body " style={{}}>
                      <div>
                        <span className="fs-2">
                        ඔබට අවශ්‍ය විශය තෝරන්න
                        </span>
                      </div>

                      <div>
                        <div className="">
                          <div
                            className="card shadow-sm p-3 mb-5 bg-white rounded"
                            style={{
                              borderRadius: "20px 20px 0 0",
                              height: "60px",
                              width: "400px",
                              marginLeft: "110px",
                            }}
                          >
                            <span className="fs-3">PHYSICS</span>
                          </div>

                          <div
                            className="card shadow-sm p-3 mb-5 bg-white rounded"
                            style={{
                              borderRadius: "20px 20px 0 0",
                              height: "60px",
                              width: "400px",
                              marginLeft: "110px",
                            }}
                          >
                            <span className="fs-3">BIOLOGY</span>
                          </div>

                          <div
                            className="card shadow-sm p-3 mb-5 bg-white rounded"
                            style={{
                              borderRadius: "20px 20px 0 0",
                              height: "60px",
                              width: "400px",
                              marginLeft: "110px",
                            }}
                          >
                            <span className="fs-3">CHEMISTRY</span>
                          </div>

                          <div
                            className="card shadow-sm p-3 mb-5 bg-white rounded"
                            style={{
                              borderRadius: "20px 20px 0 0",
                              height: "60px",
                              width: "400px",
                              marginLeft: "110px",
                            }}
                          >
                            <span className="fs-3">AGRICULTURE SCIENCE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
