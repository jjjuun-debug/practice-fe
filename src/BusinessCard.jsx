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