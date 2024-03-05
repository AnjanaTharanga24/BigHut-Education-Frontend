import React, { useState } from 'react'
import '../css/contents.css'

export default function Contents() {
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const questions = [
        {
            question: 'මව් පුවරුව මත ඇති .................... පරිගණකයක ක්‍රියාකාරීත්වය විදැහීම (expand) සදහා භාවිත කරයි. ඉහත වගන්තියේ හිස්තැන පිරවීම සදහා වඩාත් සුදුසු වන්නේ පහත සදහන් කවරක්ද?',
            options: ['බසය (Bus)', 'ඔරලෝසුව (Clock)', 'RAM', 'විවරය', 'ROM'],
            correctAnswer: 1 // Index of the correct answer in the options array
        },
        {
            question: 'පහත දැක්වෙන කුමන වගන්තිය සත්‍ය වේ ද?',
            options: ['පලමු පරම්පරාවේ පරිගණක සාදන ලද්දේ ට්‍රාන්සිස්ටර භාවිතා කරමිනි.', 'Electronic Numerical Integrator And Computer (ENIAC) යනු දෙවෙන පරම්පරාවේ පරිගණකයකි', 'Analytical Engine නම් වූ යන්ත්‍රයේ නිමැවුම්කරු වන්නේ ඇඩා ලව්ලේස් (Ada Lovelace) ය.', 'ප්‍රථම පරිගණක ක්‍රමලේඛකයා (Programmer) ලෙස සලකනුයේ ඇලන් ටියුරින් ( Alan Turing) ය.', 'ඇබකසය (Abacus) පලමු ගණක යන්ත්‍රය ලෙස විශ්වාස කරනු ලැබේ.'],
            correctAnswer: 1 // Index of the correct answer in the options array
        },
        {
            question: 'මව් පුවරුව මත ඇති .................... පරිගණකයක ක්‍රියාකාරීත්වය විදැහීම (expand) සදහා භාවිත කරයි. ඉහත වගන්තියේ හිස්තැන පිරවීම සදහා වඩාත් සුදුසු වන්නේ පහත සදහන් කවරක්ද?',
            options: ['බසය (Bus)', 'ඔරලෝසුව (Clock)', 'RAM', 'විවරය', 'ROM'],
            correctAnswer: 1 // Index of the correct answer in the options array
        },
        {
            question: 'මව් පුවරුව මත ඇති .................... පරිගණකයක ක්‍රියාකාරීත්වය විදැහීම (expand) සදහා භාවිත කරයි. ඉහත වගන්තියේ හිස්තැන පිරවීම සදහා වඩාත් සුදුසු වන්නේ පහත සදහන් කවරක්ද?',
            options: ['බසය (Bus)', 'ඔරලෝසුව (Clock)', 'RAM', 'විවරය', 'ROM'],
            correctAnswer: 1 // Index of the correct answer in the options array
        },
        // Add more questions here as needed
    ];

    const handleNextQuestion = () => {
        // Update the current question index
        setCurrentQuestion(prevQuestion => Math.min(prevQuestion + 1, questions.length - 1));
    };


    // Function to handle clicking the "Previous" button
    const handlePreviousQuestion = () => {
        // Update the current question index
        setCurrentQuestion(prevQuestion => Math.max(prevQuestion - 1, 0));
    };


    return (
        <div>
            <div className='d-flex justify-content-center '>
            <div className='bg-dark shadow-sm mt-5 bg-white rounded w-25'>
                  <span className='fs-2'>02  පරිගණකයේ පරිණාමය</span>
            </div>
            </div>
            <div className="card shadow-lg mb-5 rounded" style={{ borderRadius: '20px 20px 0 0' }} >
                <div className="card-body">
                    <div>

                        <div className='head p-2 ' >
                            <span className='mcq10f10'> MCQ 1 of 10</span>

                        </div>

                        <div className="bg-dark shadow-sm p-2 mt-4 bg-white rounded">

                            <div className=' p-2 fs-4' style={{textAlign: 'justify'}}>
                            {questions[currentQuestion - 1].question}
                            </div>

                            <div className='mb-4 p-3  d-flex flex-column' style={{ textAlign: 'justify' }}>
                    {/* Render options dynamically */}
                    {questions[currentQuestion - 1].options.map((option, index) => (
                        <label className='mt-2' key={index} style={{ marginRight: "200px" }}>
                            <input className='me-3' type="radio" name="option" value={`option${index + 1}`} />
                            <span className='fs-4'>{option}</span>
                        </label>
                    ))}
                </div>

                        </div>

                        <div className=' d-flex justify-content-between' style={{ marginTop: "100px" }}>
                            <button className='btn btn-outline-danger rounded-pill' onClick={handlePreviousQuestion} disabled={currentQuestion === 1}>PREVIOUS MCQ</button>
                            <button className='btn btn-outline-success rounded-pill' onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>Next</button>

                        </div>

                    </div>










                </div>

            </div>
        </div>
    )
}
