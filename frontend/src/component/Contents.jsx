import React, { useState } from "react";
import "../css/contents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faHeart,
  faHandPointLeft,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import Sidebar from "./Sidebar";

export default function Contents() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState(false); // State to track correct answer selected

  const questions = [
    {
      question:
        "මව් පුවරුව මත ඇති .................... පරිගණකයක ක්‍රියාකාරීත්වය විදැහීම (expand) සදහා භාවිත කරයි. ඉහත වගන්තියේ හිස්තැන පිරවීම සදහා වඩාත් සුදුසු වන්නේ පහත සදහන් කවරක්ද?",
      options: ["බසය (Bus)", "ඔරලෝසුව (Clock)", "RAM", "විවරය", "ROM"],
      correctAnswer: 4,
    },
    {
      question: "පහත දැක්වෙන කුමන වගන්තිය සත්‍ය වේ ද?",
      options: [
        "පලමු පරම්පරාවේ පරිගණක සාදන ලද්දේ ට්‍රාන්සිස්ටර භාවිතා කරමිනි.",
        "Electronic Numerical Integrator And Computer (ENIAC) යනු දෙවෙන පරම්පරාවේ පරිගණකයකි",
        "Analytical Engine නම් වූ යන්ත්‍රයේ නිමැවුම්කරු වන්නේ ඇඩා ලව්ලේස් (Ada Lovelace) ය.",
        "ප්‍රථම පරිගණක ක්‍රමලේඛකයා (Programmer) ලෙස සලකනුයේ ඇලන් ටියුරින් ( Alan Turing) ය.",
        "ඇබකසය (Abacus) පලමු ගණක යන්ත්‍රය ලෙස විශ්වාස කරනු ලැබේ.",
      ],
      correctAnswer: 5,
    },
    {
      question: "පලමුවන පරම්පරාවේ පරිගණක සදහා පාදක වූයේ,",
      options: [
        "ඉතා විශාල පරිමාණයේ අනුකලිත (VLSI) තාක්ෂනය වේ.",
        "විශාල පරිමාණයේ අනුකලිත (LSI) තාක්ශනය වේ.",
        "අනුකලිත පරිපථ (ICs) වේ.",
        "ට්‍රාන්සිස්ටර වේ.",
        "රික්ත නළ වේ.",
      ],
      correctAnswer: 5,
    },

    {
      question:
        "ක්‍රමලේකඛන භාෂාවන්හි භාවිත වන සම්පාදක හා අර්ථ වින්‍යාසක (compilers and interpreters) සම්බන්දයෙන් පහත දැක්වෙන වගන්ති සලකන්න. A - Assembly භාෂාවෙන් ලියා ඇති ක්‍රමලේඛයක් ක්‍රියාත්මක කිරීම සදහා සම්පාදක හෝ අර්ථ වින්‍යාසක අවශ්‍ය නොවේ. B -  යන්ත්‍ර කේතවලින් (machine code) ඇති ක්‍රමලේඛයක් ක්‍රියාත්මක කිරීම සදහා සම්පාදක අත්‍යාවශ්‍ය නොවේ. C -  ක්‍රියාත්මක කල හැකි (executable) ක්‍රමලේඛයක් සම්පාදකයක් මගින් මගින් මූල ක්‍රමලේඛයක් (source program) බවට පරිවර්තනය කරනු ලබයි.  ඉහත වගන්ති අතුරෙන් නිවැරදි වන්නේ,          ",
      options: [
        "A පමණි.",
        "B පමණි.",
        "C පමණි. ",
        "A හා B පමණි.",
        "B හා C පමණි.",
      ],
      correctAnswer: 2,
    },

    {
      question: "පහත දැක්වෙන රූපයක් තෝරන්න.. ",
      image: (
        <img
          src={img5}
          alt="Option 1"
          style={{ height: "200px", width: "600px" }}
        />
      ),

      options: [
        <img
          src={img1}
          alt="Option 1"
          style={{ height: "200px", width: "300px" }}
        />,
        <img
          src={img2}
          alt="Option 2"
          style={{ height: "200px", width: "300px" }}
        />,
        <img
          src={img3}
          alt="Option 3"
          style={{ height: "200px", width: "300px" }}
        />,
        <img
          src={img4}
          alt="Option 4"
          style={{ height: "200px", width: "300px" }}
        />,
      ],
      correctAnswer: 2,
    },

    {
      question: (
        <div className="mb-3">
          <div className="fs-4 ">
            පහත දැක්වෙන රූප භාවිතා කර නිවැරදි පිළිතුර තෝරන්න
          </div>
          <div className="d-flex justify-content-start">
            <div className="d-flex flex-column">
              <img
                src={img5}
                alt="Question Image"
                style={{ height: "200px", width: "250px" }}
              />
              <span className="fs-4" style={{ marginLeft: "120px" }}>
                A
              </span>
            </div>

            <div className="d-flex flex-column">
              <img
                src={img1}
                alt="Option 1"
                style={{ height: "200px", width: "250px" }}
              />
              <span className="fs-4" style={{ marginLeft: "120px" }}>
                B
              </span>
            </div>

            <div className="d-flex flex-column">
              <img
                src={img2}
                alt="Option 2"
                style={{ height: "200px", width: "250px" }}
              />
              <span className="fs-4" style={{ marginLeft: "120px" }}>
                C
              </span>
            </div>

            <div className="d-flex flex-column">
              <img
                src={img3}
                alt="Option 3"
                style={{ height: "200px", width: "250px" }}
              />

              <span className="fs-4" style={{ marginLeft: "120px" }}>
                D
              </span>
            </div>
          </div>
        </div>
      ),

      options: [
        "A පමණි.",
        "B පමණි.",
        "D පමණි. ",
        "A හා B පමණි.",
        "B හා C පමණි.",
      ],
      correctAnswer: 2,
    },

    {
      question: (
        <div className="mb-3">
          <div className="fs-4 ">
            පහත දැක්වෙන රූප භාවිතා කර නිවැරදි පිළිතුර තෝරන්න
          </div>
          <div className="d-flex justify-content-start">
            <div className="d-flex flex-column">
              <img
                src={img5}
                alt="Question Image"
                style={{ height: "200px", width: "600px" }}
              />
            </div>
          </div>
        </div>
      ),
      options: [
        <div className=" d-flex flex-column">
          <span className="fs-4">පහත නිවැරදි පින්තූරය තෝරන්න.</span>
          <img
            src={img1}
            alt="Option 1"
            style={{ height: "200px", width: "300px" }}
          />
        </div>,
        <div className=" d-flex flex-column">
          <span className="fs-4">පහත නිවැරදි පින්තූරය තෝරන්න.</span>
          <img
            src={img2}
            alt="Option 2"
            style={{ height: "200px", width: "300px" }}
          />
        </div>,
        <div className=" d-flex flex-column">
          <span className="fs-4">පහත නිවැරදි පින්තූරය තෝරන්න.</span>
          <img
            src={img3}
            alt="Option 3"
            style={{ height: "200px", width: "300px" }}
          />
        </div>,
        <div className=" d-flex flex-column">
          <span className="fs-4">පහත නිවැරදි පින්තූරය තෝරන්න.</span>
          <img
            src={img4}
            alt="Option 4"
            style={{ height: "200px", width: "300px" }}
          />
        </div>,
      ],
      correctAnswer: 2,
    },
  ];

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setCorrectAnswerSelected(false); // Reset correct answer selection status
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
  };

  const handleOptionSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleBookmarkToggle = () => {
    setBookmarked(!bookmarked);
  };

  const handleWrongAnswerFeedback = () => {
    if (
      correctAnswerSelected &&
      selectedAnswer === questions[currentQuestion - 1].correctAnswer - 1
    ) {
      return (
        <div
          className="alert alert-success"
          role="alert"
          style={{ marginTop: "-10px" }}
        >
          <span className="fs-4 p-3">
            <FontAwesomeIcon icon={faCircleCheck} /> ඔබගේ පිළිතුර නිවැරදියි
          </span>
        </div>
      );
    } else {
    }
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container" style={{ backgroundColor: "white" }}>
        <Sidebar />
        <section className="home">
          <div className="content" content>
            <div style={{ paddingRight: "300px" }}>
              <div className="mt-4 mb-4"></div>
              <div className="content-body" style={{ marginLeft: "-50px" }}>
                <div>
                  <div className="d-flex justify-content-center ">
                    <div
                      className=""
                      style={{ width: "400px", marginRight: "1000px" }}
                    >
                      <div className="" style={{ width: "700px" }}>
                        <span className="fs-3 ">
                          INFORMATION AND COMMUNICATION TECHNOLOGY
                        </span>
                      </div>
                      <div className="" style={{ marginRight: "100px" }}>
                        <span className="fs-3">02 පරිගණකයේ පරිණාමය</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card shadow-lg mb-5 rounded"
                    style={{ borderRadius: "20px 20px 0 0" }}
                  >
                    <div className="card-body ">
                      <div>
                        <div className=" ">
                          <div className="head p-2">
                            <span
                              className="mcq10f10"
                              style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                              MCQ {currentQuestion} of {questions.length}
                            </span>
                          </div>

                          <div>
                            <div
                              className=" d-flex justify-content-between"
                              style={{ marginTop: "20px" }}
                            >
                              <div>
                                {currentQuestion > 1 && ( // Check if it's not the first question
                                  <button
                                    className="btn btn-outline-danger rounded-pill "
                                    onClick={handlePreviousQuestion}
                                  >
                                    <FontAwesomeIcon icon={faArrowLeft} />{" "}
                                    <span
                                      className="mx-2"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                      }}
                                    >
                                      PREVIOUS MCQ
                                    </span>
                                  </button>
                                )}
                              </div>

                              <div
                                className="fs-5"
                                style={{ marginBottom: "-80px" }}
                              >
                                {handleWrongAnswerFeedback()}
                              </div>

                              <div>
                                <button
                                  className="btn btn-outline-success rounded-pill"
                                  onClick={handleNextQuestion}
                                  disabled={
                                    currentQuestion === questions.length
                                  }
                                >
                                  <span
                                    className="mx-2"
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {" "}
                                    NEXT MCQ{" "}
                                  </span>{" "}
                                  <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className=" shadow-sm p-2 mt-4 bg-white rounded" style={{color:"black"}}>
                            <div
                              className="p-2 fs-4"
                              style={{ textAlign: "justify" }}
                            >
                              {questions[currentQuestion - 1].question}
                            </div>
                            {questions[currentQuestion - 1].image && (
                              <div className="mb-4 p-3 d-flex justify-content-start">
                                {questions[currentQuestion - 1].image}
                              </div>
                            )}
                            <div
                              className="mb-4 p-2 d-flex flex-column  "
                              style={{ textAlign: "justify" }}
                            >
                              {questions[currentQuestion - 1].options.map(
                                (option, index) => (
                                  <label
                                    className="mt-2 d-flex flex-nowrap "
                                    key={index}
                                  >
                                    <input
                                      className="radio-button me-2"
                                      type="radio"
                                      name="option"
                                      value={option}
                                      checked={selectedAnswer === index}
                                      onChange={() => handleOptionSelect(index)}
                                    />
                                    <span
                                      className="fs-4"
                                      style={{ marginTop: "-5px" }}
                                    >
                                      {option}
                                    </span>
                                  </label>
                                )
                              )}
                            </div>
                          </div>

                          {/* Display correct answer feedback */}
                        </div>

                        <div
                          className=" d-flex justify-content-between "
                          style={{ marginTop: "30px" }}
                        >
                          <button
                            className={`btn ${
                              bookmarked
                                ? "btn-outline-danger"
                                : "btn-outline-warning"
                            } rounded-pill`}
                            onClick={handleBookmarkToggle}
                          >
                            <FontAwesomeIcon icon={faHeart} />{" "}
                            <span
                              className="mx-2"
                              style={{ fontWeight: "bold", fontSize: "15px" }}
                            >
                              {bookmarked ? "REMOVE" : "BOOKMARK"}
                            </span>
                          </button>
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-outline-info rounded-pill"
                              onClick={() => setCorrectAnswerSelected(true)} // Set correct answer selected status
                            >
                              <FontAwesomeIcon icon={faHandPointLeft} />{" "}
                              <span
                                className="mx-2"
                                style={{ fontWeight: "bold", fontSize: "15px" }}
                              >
                                හරි වැරදි බලන්න
                              </span>
                            </button>
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
  );
}
