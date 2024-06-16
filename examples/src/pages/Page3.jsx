import React from 'react';
import './Page3.css';

const Page3 = () => {
    return (
        <div className="page-container3">
            <h1>Page 3</h1>
            <p>Welcome to Page 3!</p>
            <p>This is an example of several grid elemnts</p>
            <hr />
            <div className="grid-instructions">
                <p>Grid 3x3 using</p>
                <p>grid-template-columns: repeat(3, 100px);</p>
                <p>grid-template-rows: repeat(3, 100px);</p>
                <p>the same as using grid-template-columns: 100px 100px 100px;</p>
            </div>
            <div className="grid-container">


                <div className="grid-item">1</div>
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>
                <div className="grid-item">4</div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
                <div className="grid-item">9</div>
            </div>
            <div className="grid-instructions">
                <p>Grid 5x5 using house map</p>

            </div>
            <div className="container-house">
                <div className="room" id="living-room">Living Room</div>
                <div className="room" id="kitchen">Kitchen</div>
                <div className="room" id="bedroom">Bedroom</div>
                <div className="room" id="bathroom">Bathroom</div>
                <div className="room" id="closet">Closet</div>
            </div>
            <hr className='divider'/>
        </div>
    );
};

export default Page3;