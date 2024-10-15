// src/NumberWordSpeaker.js
'use client'
import React, { useState } from 'react';

// Function to convert numbers to words
const numberToWords = (num) => {
    const belowTwenty = [
        'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six',
        'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
        'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
        'Eighteen', 'Nineteen'
    ];
    const tens = [
        '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty',
        'Seventy', 'Eighty', 'Ninety'
    ];

    if (num < 20) return belowTwenty[num];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + belowTwenty[num % 10] : '');
    if (num < 1000) return belowTwenty[Math.floor(num / 100)] + ' Hundred' + (num % 100 ? ' ' + numberToWords(num % 100) : '');
    if (num < 1000000) return numberToWords(Math.floor(num / 1000)) + ' Thousand' + (num % 1000 ? ' ' + numberToWords(num % 1000) : '');
    return '';
};

const NumberWordSpeaker = () => {
    const [number, setNumber] = useState('');
    const [not,setNot] = useState('')
    const handleConvert = () => {
        const num = Number(number);
        if (isNaN(num) && num < 0) {
           setNot('Please Not A Valid Number')
            return;
        }
        const words = numberToWords(num);

        setNumber(words)
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen border-yellow-300 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Number to Words Converter</h1>
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="border w-auto  md:w-1/3 lg:w-1/3 border-gray-300 p-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
        <button
            onClick={handleConvert}
            className="border border-gray-300 p-3  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out btn btn-primary"        >
            Convert
        </button>
        {not && <h1 className='text-3xl text-red-800'>{not}</h1>}
       <input
            type="text"
            value={handleConvert && number }
            placeholder="In Word"
            className="border w-auto  md:w-1/3 lg:w-1/3 border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
    </div>
    );
};

export default NumberWordSpeaker;
