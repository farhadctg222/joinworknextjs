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

    const scales = [
        { value: 1e9, word: 'Billion' },
        { value: 1e7, word: 'Crore' },
        { value: 1e5, word: 'Lakh' },
        { value: 1e3, word: 'Thousand' },
        { value: 1e2, word: 'Hundred' }
    ];

    if (num < 20) return belowTwenty[num];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + belowTwenty[num % 10] : '');

    for (let i = 0; i < scales.length; i++) {
        const scale = scales[i];
        if (num >= scale.value) {
            const scaledNum = Math.floor(num / scale.value);
            const remainder = num % scale.value;
            return (
                numberToWords(scaledNum) + ' ' + scale.word + (remainder ? ' ' + numberToWords(remainder) : '')
            );
        }
    }
};
const NumberWordSpeaker = () => {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');
    const [letterCase, setLetterCase] = useState('title'); 

    const handleConvert = (e) => {
        e.preventDefault();
       
        const num = Number(number);
        if (isNaN(num) && num < 0) {
           alert('Please Not A Valid Number')
            return  ;
        }
        let words = numberToWords(num);
        
        // Change case based on user selection
        if (letterCase === 'uppercase') {
            words = words.toUpperCase();
        } else if (letterCase === 'lowercase') {
            words = words.toLowerCase();
        } else if (letterCase === 'title') {
            words = words.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }

        setResult(words)
    };
    const handClear = ()=>{
        setNumber('')
      
    }

    return (
        <div className="flex flex-col items-center justify-center  h-screen  bg-gray-100">
       <div className='p-4 border-zinc-900 border-4'>
       <h1 className="text-3xl text-center font-bold mb-4 bg-red-700 text-white">Number to Words Converter</h1>
       <form onSubmit={handleConvert}>
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="border  border-gray-300 p-2 rounded-md shadow-sm w-[100%]"

        ></input>
        <br />
        <br />
        <button
           type="submit"
            className="border border-gray-300 p-3  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out btn btn-success"        >
            Convert
        </button>
 
        <button
           onClick={handClear}
            className="border border-gray-300 p-3  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out btn btn-primary"        >
           Clear
        </button>
        </form>
        <div className='mt-20 text-center'>
                <label>
                    <input
                        type="radio"
                        value="title"
                        checked={letterCase === 'title'}
                        onChange={(e) => setLetterCase(e.target.value)}
                    />
                    Title Case
                </label>
                <label className='ml-5'>
                    <input
                        type="radio"
                        value="uppercase"
                        checked={letterCase === 'uppercase'}
                        onChange={(e) => setLetterCase(e.target.value)}
                    />
                    Uppercase
                </label>
                <label className='ml-5'>
                    <input
                        type="radio"
                        value="lowercase"
                        checked={letterCase === 'lowercase'}
                        onChange={(e) => setLetterCase(e.target.value)}
                    />
                    Lowercase
                </label>
            </div>
       <input
            type="text"
            value={result }
            placeholder="In Word"
            className="border w-[100%]  border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
       </div>
    </div>
    );
};

export default NumberWordSpeaker;
