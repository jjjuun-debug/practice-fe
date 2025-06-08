import React, { useState } from 'react';

function UserProfile() {
    const [name, setName] = useState();
    const [introduction, setIntroduction] = useState();


    return(
        <>
        <div>
            <strong>이름 </strong>
            <input value = {name} onChange = {(evnet) => setName(evnet.target.value)}/>
        </div>

        <div>
            <strong>자기소개 </strong>
            <input value = {introduction} onChange = {(evnet) => setIntroduction(evnet.target.value)}/>
        </div>
        
        <div>
            이 사용자의 이름은 {name}이고, 자기소개는 "{introduction}"이다.
        </div>
        </>
    )
}

export default UserProfile;