import React, { useEffect, useState } from 'react'
import './comments.scss';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import TextWrapper from './textwrapper'; 
import BackNextButtons from './buttonwrapper'; 
const { VITE_REACT_URL_API_GET_STORE_URL, VITE_REACT_URL_API_POST_SURVEY_DATA, VITE_REACT_URL_API_GET_IP_ADDRESS } = import.meta.env;

const comments = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [storeUrl, setStoreUrl] = useState('');
  const [rating, setRating] = useState('');
  const [surveyID, setSurveyID] = useState('');
  const [comments, setComments] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [userAgent, setUserAgent] = useState('');


  const getStoreUrl = async (surveyID) => {
    const url = `${VITE_REACT_URL_API_GET_STORE_URL}/${surveyID}?code=VY5kcMt4MQE_WuGgQnMMTq6Mj1kP8IYSkjTSPoHANLJMAzFuaBsLwg==`
    fetch(url)
      .then((response) => response.json())
      .then(async (data) => {
        console.log('---Getdata--', data)
        setStoreUrl(data.storeUrl);
      });
  }

  useEffect(() => {
    const url = `${VITE_REACT_URL_API_GET_IP_ADDRESS}`
    fetch(url)
      .then((response) => response.json())
      .then(async (data) => {
        console.log('---ipGetdata--', data)
        setIpAddress(data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, []);

  useEffect(() => {
    if (location) {
      setRating(location.state.rating)
      if (location && location.state && location.state.surveyID) {
        setSurveyID(location.state.surveyID)
        getStoreUrl(location.state.surveyID)
      }
    }
  }, [location]);

  useEffect(() => {
    console.log(navigator);
    if (navigator && navigator.userAgent) {
      setUserAgent(navigator.userAgent);
    }
  }, [navigator]);

  const handleInputChange = (event) => {
    setComments(event.target.value)
  };

  const sendUrlData = async (storeData) => {
    console.log('--storeData', storeData)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(storeData)
    };
    fetch(`${VITE_REACT_URL_API_POST_SURVEY_DATA}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        const success = data;
        if (success == 200) { 
          if(rating==1 ||rating==2){
            window.open(storeUrl, '_self');
          }       
          else{
            navigate('/responsepage');
          }
        } else {
          if (rating == 1) {
            navigate('/excellentresponsepage');
          } else {
            navigate('/responsepage');
          }
        }
      });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (surveyID) {
      const data = {
        rating,
        surveyId: surveyID,
        Comments: comments,
        UserAgent: userAgent,
        IPAddress: ipAddress,
        Device: ''
      }
      sendUrlData(data)
    } else {
      if (rating == 1) {
        navigate('/excellentresponsepage');
      } else {
        navigate('/responsepage');
      }
    }
  }

  const handleBack = () => {
    navigate(`/${surveyID}`);
  }
  return (

    <div className='wrapper-comment'>
      <div className='header-text'>{'What could we have done to make your experience better?'}</div>
      <form onSubmit={handleSubmit}>
        <TextWrapper comments={comments} handleInputChange={handleInputChange} />
        <BackNextButtons handleBack={handleBack} />
      </form>
    </div>

  )
}

export default comments