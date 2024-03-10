import React from 'react';

export const Reports = () => {
    return (
        <div className='buttons-container flex'>
            <div className="btn relative from-top px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold uppercase cursor-pointer transition-all duration-500 ease-in-out ml-4 text-xs">Tasks to review</div>
            <div className="btn relative from-top px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold uppercase cursor-pointer transition-all duration-500 ease-in-out ml-4 text-xs">Status of your team</div>
            <div className="btn relative from-top px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold uppercase cursor-pointer transition-all duration-500 ease-in-out ml-4 text-xs">Quarter report</div>
        </div>
    );
}
