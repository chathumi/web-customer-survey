import React from 'react';

function TextWrapper({ comments, handleInputChange }) {
    return (
        <div className='text-wrapper'>
            <textarea
                className='input'
                rows="5"
                value={comments}
                onChange={handleInputChange}
            ></textarea>
        </div>
    );
}

export default TextWrapper;