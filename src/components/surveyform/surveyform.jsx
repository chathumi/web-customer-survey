import React, { useEffect, useRef, useState } from 'react';
import './surveyform.scss';
import { useNavigate, Route, Routes, useParams } from 'react-router-dom';
import Comment from '../comments/comments';
import ButtonWrapper from './buttonwrapper';
import NextButton from './nextbutton';

export default function SurveyForm() {
	const { surveyID } = useParams();
	const navigate = useNavigate();
	const [selected, setSelected] = useState('');
	const [surveyid, setSurveyid] = useState('');

	const buttonValues = [
		{ id: 'excellent', label: 'Excellent', value: 1 },
		{ id: 'verygood', label: 'Very Good', value: 2 },
		{ id: 'good', label: 'Good', value: 3 },
		{ id: 'fair', label: 'Fair', value: 4 },
		{ id: 'poor', label: 'Poor', value: 5 },
	];

	const handleClick = (type, surveyID) => {
		setSelected(type);
		setSurveyid(surveyID);
		navigate('/comment', { state: { rating: type, surveyID: surveyID } });
	};

	const handleNext = () => {
		navigate('/comment', { state: { rating: selected, surveyID: surveyid } });
	};

	return (
		<div className='wrapper'>
			<div className='header-text'>
				How would you rate your overall experience with your Victra Verizon store?
			</div>
			<ButtonWrapper buttonValues={buttonValues} handleClick={handleClick} surveyID={surveyID} />
			<NextButton handleNext={handleNext} />
		</div>
	);
}