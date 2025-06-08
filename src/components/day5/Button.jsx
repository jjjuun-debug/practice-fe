// 주석 직접 달았읍니다...

import React, { useState } from 'react';

function Button() {
    const [active, setActive] = useState({ //useState로 버튼 별 상태 boolean으로 관리
        button1: false,
        button2: false,
        button3: false,
    });

    const handleClick = (button) => { //handleClick으로 onClick된 버튼의 상태 변경
        setActive({
            button1: button === 'button1',
            button2: button === 'button2',
            button3: button === 'button3',
        });
    };

    return (
        <>
        <div>
            <button onClick={() => handleClick('button1')}>즐거운</button>
            {active.button1 && ( //버튼 값 true일 때
                <p>리액트</p>
            )}
        </div>
        
        <div>
            <button onClick={() => handleClick('button2')}>신나는</button>
            {active.button2 && (
                <p>프론트앤드</p>
            )}
        </div>

        <div>
            <button onClick={() => handleClick('button3')}>즐거운</button>
            {active.button3 && (
                <p>프로젝트</p>
            )}
        </div>
        </>
    );
}

export default Button;