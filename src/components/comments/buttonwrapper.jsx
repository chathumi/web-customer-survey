import React from 'react';

function BackNextButtons({ handleBack }) {
    return (
        <div className='back-wrapper'>
            <button id="back" className='button-next' onClick={handleBack}>
                <i className="fa fa-arrow-left fa-x"></i>
            </button>
            <button id="next" className='button-next' type="submit">
                <i className="fa fa-arrow-right fa-x"></i>
            </button>
        </div>
    );
}

export default BackNextButtons;