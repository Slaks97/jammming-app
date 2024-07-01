import React, { useEffect, useState } from 'react';
import './SpinnerLoader.css';

const SpinnerLoader = () => {
    const [text, setText] = useState('');
    const [showImg, setShowImg] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowImg(false);
            // setText(
            //     `I waited for 3 seconds to be loaded, did you see the spinner?`
            // )
        }, 3000)
    }, []);


    return (
        <>
            <div>
                {
                    showImg ? (
                        <div className="img-container">
                            <img src="spinner-gif.gif" className="spin-icon-img"/>
                        </div>
                    ) : (
                        <h3>{text}</h3>
                    )               
                }
            </div>
        </>
    )
}

export default React.memo(SpinnerLoader);