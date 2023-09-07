import React from 'react';

function ButtonWrapper({ buttonValues, handleClick, surveyID }) {
    return (
        <div className='button-wrapper'>
            {buttonValues.map((button) => (
                <button
                    key={button.id}
                    id={button.id}
                    className='button'
                    onClick={() => handleClick(button.value, surveyID)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
}

export default ButtonWrapper;