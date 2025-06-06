import React from 'react';

function BusinessCard(props) {
    return(
        <div className="business-card">
            <p><strong>이름 </strong> {props.name}</p>
            <p><strong>직업 </strong> {props.job}</p>
            <p><strong>연락처 </strong> {props.contact}</p>
        </div>
    );
}

export default BusinessCard;

/*

    <div className='app-container'>
      <BusinessCard name = "김민우" job = "선생님" contact = "112" />
      <BusinessCard name = "고경민" job = "(진)군인" contact = "119" />
    </div>

*/