import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

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
                      height: "900px",
                      marginLeft: "200px",
                    }}
                  >
                    <div className="card-body " style={{}}>
                      <div>
                        <span className="fs-2">ඔබට අවශ්‍ය විශය තෝරන්න</span>
                      </div>

                      <div>
                        <div className="" style={{ marginLeft: "-40px" }}>
                          <Link
                            to="/physics"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <div
                              className="card bg-light p-2"
                              style={{
                                height: "160px",
                                width: "500px",
                                marginLeft: "110px",
                                borderRadius: "40px 0px 30px 0px",
                              }}
                            >
                              <div className="d-flex">
                                <div
                                  className="mt-2 rounded-circle text-info"
                                  style={{
                                    marginLeft: "10px",
                                    backgroundColor: "#cce6ff",
                                    height: "70px",
                                    width: "70px",
                                    paddingTop: "20px",
                                  }}
                                >
                                  <i class="bx bxs-rocket fs-1"></i>
                                </div>
                                <div
                                  className="d-flex flex-column mt-2"
                                  style={{ marginLeft: "25px" }}
                                >
                                  <span
                                    className="fs-4 "
                                    style={{
                                      marginRight: "8px",
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                  >
                                    භෞතික විද්‍යාව (PHYSICS)
                                  </span>
                                  <span>සිංහල මාධ්‍ය - නව විෂ‍ය නිර්දේශය</span>
                                </div>
                              </div>

                              <div
                                className="d-flex "
                                style={{
                                  marginTop: "30px",
                                  width: "490px",
                                  marginLeft: "25px",
                                }}
                              >
                                <span className="text-danger">
                                  බහුවරණ ප්‍රශ්න ගණන
                                </span>
                                <span
                                  className="text-success"
                                  style={{ paddingLeft: "20px" }}
                                >
                                  1097
                                </span>
                                <div
                                  className=""
                                  style={{ marginLeft: "210px" }}
                                >
                                  <i className="bx bxs-right-arrow-circle fs-3 text-info"></i>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <div
                            className="card bg-light p-2"
                            style={{
                              height: "160px",
                              width: "500px",
                              marginLeft: "110px",
                              borderRadius: "40px 0px 30px 0px",
                            }}
                          >
                            <div className="d-flex">
                              <div
                                className="mt-2 rounded-circle text-info"
                                style={{
                                  marginLeft: "10px",
                                  backgroundColor: "#cce6ff",
                                  height: "70px",
                                  width: "70px",
                                  paddingTop: "20px",
                                }}
                              >
                                <i class="bx bxs-rocket fs-1"></i>
                              </div>
                              <div
                                className="d-flex flex-column mt-2"
                                style={{ marginLeft: "25px" }}
                              >
                                <span
                                  className="fs-4"
                                  style={{ marginRight: "40px" , color:"black" }}
                                >
                                  ජීව විද්‍යාව (BIOLOGY)
                                </span>
                                <span>සිංහල මාධ්‍ය - නව විෂ‍ය නිර්දේශය</span>
                              </div>
                            </div>

                            <div
                              className="d-flex "
                              style={{
                                marginTop: "30px",
                                width: "490px",
                                marginLeft: "25px",
                              }}
                            >
                              <span className="text-danger">
                                බහුවරණ ප්‍රශ්න ගණන
                              </span>
                              <span
                                className="text-success"
                                style={{ paddingLeft: "20px" }}
                              >
                                697
                              </span>
                              <div className="" style={{ marginLeft: "210px" }}>
                                <i className="bx bxs-right-arrow-circle fs-3 text-info"></i>
                              </div>
                            </div>
                          </div>

                          <div
                            className="card bg-light p-2"
                            style={{
                              height: "160px",
                              width: "500px",
                              marginLeft: "110px",
                              borderRadius: "40px 0px 30px 0px",
                            }}
                          >
                            <div className="d-flex">
                              <div
                                className="mt-2 rounded-circle text-info"
                                style={{
                                  marginLeft: "10px",
                                  backgroundColor: "#cce6ff",
                                  height: "70px",
                                  width: "70px",
                                  paddingTop: "20px",
                                }}
                              >
                                <i class="bx bxs-rocket fs-1"></i>
                              </div>
                              <div
                                className="d-flex flex-column mt-2"
                                style={{ marginLeft: "25px" }}
                              >
                                <span
                                  className="fs-4"
                                  style={{ marginRight: "8px" , color:"black" }}
                                >
                                  රසායන විද්‍යාව (CHEMISTRY)
                                </span>
                                <span style={{ marginRight: "30px" }}>
                                  සිංහල මාධ්‍ය - නව විෂ‍ය නිර්දේශය
                                </span>
                              </div>
                            </div>

                            <div
                              className="d-flex "
                              style={{
                                marginTop: "30px",
                                width: "490px",
                                marginLeft: "25px",
                              }}
                            >
                              <span className="text-danger">
                                බහුවරණ ප්‍රශ්න ගණන
                              </span>
                              <span
                                className="text-success"
                                style={{ paddingLeft: "20px" }}
                              >
                                695
                              </span>
                              <div className="" style={{ marginLeft: "210px" }}>
                                <i className="bx bxs-right-arrow-circle fs-3 text-info"></i>
                              </div>
                            </div>
                          </div>

                          <div
                            className="card bg-light p-2"
                            style={{
                              height: "160px",
                              width: "500px",
                              marginLeft: "110px",
                              borderRadius: "40px 0px 30px 0px",
                            }}
                          >
                            <div className="d-flex " style={{ width: "500px" }}>
                              <div
                                className="mt-2 rounded-circle text-info "
                                style={{
                                  marginLeft: "10px",
                                  backgroundColor: "#cce6ff",
                                  height: "70px",
                                  width: "150px",
                                  paddingTop: "20px",
                                }}
                              >
                                <i class="bx bxs-rocket fs-1"></i>
                              </div>
                              <div
                                className="d-flex flex-column mt-2"
                                style={{ marginLeft: "5px", width: "800px" }}
                              >
                                <span
                                  className="fs-4"
                                  style={{ marginRight: "80px" , color:"black" }}
                                >
                                  කෘෂිකර්මය (AGRICULTURE)
                                </span>
                                <span style={{ marginRight: "95px" }}>
                                  සිංහල මාධ්‍ය - නව විෂ‍ය නිර්දේශය
                                </span>
                              </div>
                            </div>

                            <div
                              className="d-flex "
                              style={{
                                marginTop: "30px",
                                width: "490px",
                                marginLeft: "25px",
                              }}
                            >
                              <span className="text-danger">
                                බහුවරණ ප්‍රශ්න ගණන
                              </span>
                              <span
                                className="text-success"
                                style={{ paddingLeft: "20px" }}
                              >
                                313
                              </span>
                              <div className="" style={{ marginLeft: "210px" }}>
                                <i className="bx bxs-right-arrow-circle fs-3 text-info"></i>
                              </div>
                            </div>
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
