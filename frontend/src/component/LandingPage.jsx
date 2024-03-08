import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div
        className=""
        style={{
          padding: "10px",
          marginLeft: "5px",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div className="mt-5 " style={{ width: "400px", paddingLeft: "30px" }}>
          <h3 className="d-flex justify-content-start">අ.පො.ස (උසස් පෙළ)</h3>

          <div
            className="d-flex "
            style={{ width: "1000px", marginTop: "-20px" }}
          >
            <Link to="/grade12">
              <div className="">
                <div
                  className="card shadow-sm p-3 mb-5 bg-white rounded"
                  style={{
                    borderRadius: "20px 20px 0 0",
                    height: "100px",
                    width: "400px",
                  }}
                >
                  <span className="fs-3">12 ශ්‍රේණිය</span>
                </div>
              </div>
            </Link>

            <Link to="/grade13">
              <div className="">
                <div className="" style={{ paddingLeft: "20px" }}>
                  <div
                    className="card shadow-sm p-3 mb-5 bg-white rounded"
                    style={{
                      borderRadius: "20px 20px 0 0",
                      height: "100px",
                      width: "400px",
                      marginLeft: "00px",
                    }}
                  >
                    <span className="fs-3">13 ශ්‍රේණිය</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className=" p-4 " style={{ width: "400px", paddingLeft: "30px" }}>
          <h3 className="d-flex justify-content-start">
            අ.පො.ස ( සාමාන්‍ය පෙළ)
          </h3>

          <div
            className="d-flex "
            style={{ width: "1000px", marginTop: "-20px" }}
          >
            <Link to="/grade10">
              <div className="">
                <div
                  className="card shadow-sm p-3 mb-5 bg-white rounded"
                  style={{
                    borderRadius: "20px 20px 0 0",
                    height: "100px",
                    width: "400px",
                  }}
                >
                  <span className="fs-3">10 ශ්‍රේණිය</span>
                </div>
              </div>
            </Link>

            <Link to="/grade11">
              <div className="">
                <div className="" style={{ paddingLeft: "20px" }}>
                  <div
                    className="card shadow-sm p-3 mb-5 bg-white rounded"
                    style={{
                      borderRadius: "20px 20px 0 0",
                      height: "100px",
                      width: "400px",
                      marginLeft: "00px",
                    }}
                  >
                    <span className="fs-3">11 ශ්‍රේණිය</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className=" p-4" style={{ width: "400px", paddingLeft: "30px" }}>
          <h3 className="d-flex justify-content-start">අනෙකුත් ශ්‍රේණි</h3>

          <div
            className="d-flex flex-column "
            style={{ width: "1000px", marginTop: "-20px" }}
          >
            <div className="d-flex justify-content-between">
              <Link to="/grade9">
                <div className="">
                  <div
                    className="card shadow-sm p-3 mb-5 bg-white rounded"
                    style={{
                      borderRadius: "20px 20px 0 0",
                      height: "100px",
                      width: "400px",
                    }}
                  >
                    <span className="fs-3">9 ශ්‍රේණිය</span>
                  </div>
                </div>
              </Link>

              <Link to="/grade8">
                <div className="">
                  <div className="" style={{ paddingLeft: "20px" }}>
                    <div
                      className="card shadow-sm p-3 mb-5 bg-white rounded"
                      style={{
                        borderRadius: "20px 20px 0 0",
                        height: "100px",
                        width: "400px",
                        marginLeft: "00px",
                      }}
                    >
                      <span className="fs-3">8 ශ්‍රේණිය</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/grade7">
                <div className="">
                  <div className="" style={{ paddingLeft: "20px" }}>
                    <div
                      className="card shadow-sm p-3 mb-5 bg-white rounded"
                      style={{
                        borderRadius: "20px 20px 0 0",
                        height: "100px",
                        width: "400px",
                        marginLeft: "00px",
                      }}
                    >
                      <span className="fs-3">7 ශ්‍රේණිය</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="d-flex justify-content-between">
              <Link to="/grade6">
                <div className="">
                  <div
                    className="card shadow-sm p-3 mb-5 bg-white rounded"
                    style={{
                      borderRadius: "20px 20px 0 0",
                      height: "100px",
                      width: "400px",
                    }}
                  >
                    <span className="fs-3">6 ශ්‍රේණිය</span>
                  </div>
                </div>
              </Link>

              <Link to="/grade5">
                <div className="">
                  <div className="" style={{ paddingLeft: "20px" }}>
                    <div
                      className="card shadow-sm p-3 mb-5 bg-white rounded"
                      style={{
                        borderRadius: "20px 20px 0 0",
                        height: "100px",
                        width: "400px",
                        marginLeft: "00px",
                      }}
                    >
                      <span className="fs-3">5 ශ්‍රේණිය</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/grade4">
                <div className="">
                  <div className="" style={{ paddingLeft: "20px" }}>
                    <div
                      className="card shadow-sm p-3 mb-5 bg-white rounded"
                      style={{
                        borderRadius: "20px 20px 0 0",
                        height: "100px",
                        width: "400px",
                        marginLeft: "00px",
                      }}
                    >
                      <span className="fs-3">4 ශ්‍රේණිය</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="d-flex justify-content-between">
              <Link to="/grade3">
                <div className="">
                  <div
                    className="card shadow-sm p-3 mb-5 bg-white rounded"
                    style={{
                      borderRadius: "20px 20px 0 0",
                      height: "100px",
                      width: "400px",
                    }}
                  >
                    <span className="fs-3">3 ශ්‍රේණිය</span>
                  </div>
                </div>
              </Link>

              <Link to="/grade2">
                <div className="">
                  <div className="" style={{ paddingLeft: "20px" }}>
                    <div
                      className="card shadow-sm p-3 mb-5 bg-white rounded"
                      style={{
                        borderRadius: "20px 20px 0 0",
                        height: "100px",
                        width: "400px",
                        marginLeft: "00px",
                      }}
                    >
                      <span className="fs-3">2 ශ්‍රේණිය</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/grade1">
                <div className="">
                  <div className="" style={{ paddingLeft: "20px" }}>
                    <div
                      className="card shadow-sm p-3 mb-5 bg-white rounded"
                      style={{
                        borderRadius: "20px 20px 0 0",
                        height: "100px",
                        width: "400px",
                        marginLeft: "00px",
                      }}
                    >
                      <span className="fs-3">1 ශ්‍රේණිය</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
