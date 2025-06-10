import React, { useState } from 'react';
const rNum = Math.floor(Math.random() * (100 - 1) + 1)

function AnswerNum() {
    const [num, setNum] = useState();

    return(
        <div>
            <strong>숫자를 입력하세요. </strong>
            <input value = {num} onChange = {(evnet) => setNum(evnet.target.value)}/>
            {
                num === '' 
                ? <p>숫자는 1부터 100 중 랜덤으로 선택됩니다.</p>
                : Number(num) === rNum 
                    ? <p>정답입니다 !</p>
                    : Number(num) > rNum 
                        ? <p>작습니다 !</p>
                        : <p>큽니다 !</p>
            }
        </div>
    )
}

export default AnswerNum;