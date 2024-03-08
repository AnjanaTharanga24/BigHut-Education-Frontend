import React from "react";
import { Link } from "react-router-dom";

export default function SelectStreamAL() {
  return (
    <div>
      <div
        className="card shadow-lg mb-5 rounded"
        style={{ borderRadius: "20px 20px 0 0" , width:"700px" , height:"600px" , marginLeft:"200px" }}
      >
        <div className="card-body " style={{ }}>

            <div>
                <span className="fs-2">ඔබගේ A/L විෂ‍ය ධා‍රාව තෝරන්න</span>
            </div>

            <div>
            <div className="">

                <Link to="/almaths">

                <div
                  className="card shadow-sm p-3 mb-5 bg-white rounded"
                  style={{
                    borderRadius: "20px 20px 0 0",
                    height: "60px",
                    width: "400px",
                    marginLeft:"110px"
                  }}
                >
                  <span className="fs-3">විද්‍යා / ගණිත</span>
                </div>

                </Link>

               

                <div
                  className="card shadow-sm p-3 mb-5 bg-white rounded"
                  style={{
                    borderRadius: "20px 20px 0 0",
                    height: "60px",
                    width: "400px",
                    marginLeft:"110px"
                  }}
                >
                  <span className="fs-3">තාක්ෂණ</span>
                </div>

                <div
                  className="card shadow-sm p-3 mb-5 bg-white rounded"
                  style={{
                    borderRadius: "20px 20px 0 0",
                    height: "60px",
                    width: "400px",
                    marginLeft:"110px"
                  }}
                >
                  <span className="fs-3">කලා</span>
                </div>

                <div
                  className="card shadow-sm p-3 mb-5 bg-white rounded"
                  style={{
                    borderRadius: "20px 20px 0 0",
                    height: "60px",
                    width: "400px",
                    marginLeft:"110px"
                  }}
                >
                  <span className="fs-3">වාණිජ</span>
                </div>

                

              </div>
            </div>

        </div>
      </div>
    </div>
  );
}
