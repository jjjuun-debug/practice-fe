import React, { useState } from 'react';

function ModalWindow() {
    const [modal, setModal] = useState(false);
    return (
    <>
    {
        !modal &&
        <div>
            <button onClick={() => setModal(true)}>
                Open Modal
            </button>
        </div>
    }
        
        {
            modal &&
            <div style={{
                background: '#f1f3f5',
                padding: '20px',
                borderRadius: '8px',
                minWidth: '200px',
                }}>
                    신나는 프론트엔드띠
                <button 
                    onClick={() => setModal(false)}
                    
                >
                    Close Modal
                </button>
            </div>
        }
    </>
    )
}

export default ModalWindow;