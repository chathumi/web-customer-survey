import React from 'react';

function NextButton({ handleNext }) {
    return (
        <div className='next-wrapper'>
            <button id='poor' className='button-next' onClick={handleNext}>
                <i className='fa fa-arrow-right fa-x'></i>
            </button>
        </div>
    );
}

export default NextButton;