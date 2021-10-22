import taxi1 from '../../src/image/taxi1.png';
import taxi2 from '../../src/image/taxi1.jpg';
import taxi3 from '../../src/image/taxi.jpg';
import taxi4 from '../../src/image/Taxi-driver.jpg';
function Body() {
    return (
        <div>
            <div class="body-pic">
                <div class="pic-area">
                    <img src={taxi1} alt=""/>
                </div>
                <h2>Call a taxi</h2>
                <div class="body-icon"></div>
                <p>Lorem ipsum dolor sit amet, adipisicing elit. And Attitude Is Everything</p>
                <a href="">Book Now</a>
            </div>
            <div class="body-pic">
                <div class="pic-area">
                    <img src={taxi2} alt=""/>
                </div>
                <h2>Call a taxi</h2>
                <div class="body-icon"></div>
                <p>Lorem ipsum dolor sit amet, adipisicing elit. And Attitude Is Everything</p>
                <a href="">Book Now</a>
            </div>
            <div class="body-pic">
                <div class="pic-area">
                    <img src={taxi3} alt=""/>
                </div>
                <h2>Call a taxi</h2>
                <div class="body-icon"></div>
                <p>Lorem ipsum dolor sit amet, adipisicing elit. And Attitude Is Everything</p>
                <a href="">Book Now</a>
            </div>
            <div class="body-pic">
                <div class="pic-area">
                    <img src={taxi4} alt=""/>
                </div>
                <h2>Call a taxi</h2>
                <div class="body-icon"></div>
                <p>Lorem ipsum dolor sit amet, adipisicing elit. And Attitude Is Everything</p>
                <a href="">Book Now</a>
            </div>
        </div>
    );
}

export default Body;