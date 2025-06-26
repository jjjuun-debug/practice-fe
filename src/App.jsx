import logo from './logo.svg';
import React from 'react';
import './App.css';

function BusinessCard(a){
  return (
      <div>
        <h4>명함 </h4>
        <p className="list">이름: {a.name} </p>
        <p className="list">나이: {a.age} </p>
        <p className="list">직업: {a.job} </p>
        <p className="list">전화번호: {a.num} </p>
      </div>
  )
}

function App() {
  return (
    <div>
      <BusinessCard
        name="이성준"
        age="20살"
        job="대학생"
        num="010-xxxx-xxxx"
      />
    </div>
  );
}

export default App;
