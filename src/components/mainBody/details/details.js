import './details.css';
import manor from './Manor.jpg';
import car from './wedding_car.png';
import diamond from './diamond.png';
import disco from './disco.png';
import restaurant from './restaurant.png';
import canape from './canape.png';
import cake from './cake.png';
import React from 'react';

function Home() {

    return (
        <div id="Details" className="Details">
            <div className='detailsMessage'>
                <span className='Title'> Ceremony & Reception</span>

                <div className='DetailsContainer'>
                    <div className='ManorContainer'>
                        <img className="Manor" src={manor} alt='Picutre of The Manor' />
                        <div className='ManorDesc'>
                            <p><strong>Ceremony and Reception will be held at <a rel="noreferrer" target="_blank" className ="ManorLink" href='https://manor.bypeterandpauls.com/'>The Manor</a></strong></p>
                            <p>September 30<sup>th</sup>, 2024 | 5:00PM </p>
                            <p>located at 16750 Weston Rd, King, ON L7B 0C7 </p>       
                            <p style={{color:"white"}}>*Developers Note - Yes it is in the middle of no where </p>
                        </div>

                        <iframe title ="Map for The Manor" className="ManorMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5739.441379623703!2d-79.60118621929212!3d44.00649717879944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ada2de142b471%3A0x788cbd162b19548f!2sThe%20Manor!5e0!3m2!1sen!2sca!4v1712259784857!5m2!1sen!2sca" width="600" height="450" loading="lazy" referrerolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    <ul>
                        <li>
                            <div className="date">5:00 PM - Arrive</div>
                            <div className="descr">
                                <img className='icons' src={car} alt="Arriving" />
                            </div>
                        </li>
                        <li>
                            <div className="date">5:30 PM - Ceremony</div>
                            <div className="descr">
                                <img className='icons' src={diamond} alt="Ceremony" />
                            </div>
                        </li>
                        <li>
                            <div className="date">6:00 PM - H'orderves & Pictures</div>
                            <div className="descr">
                                <img className='icons' src={canape} alt="H'orderves & Pictures" />
                            </div>
                        </li>
                        <li>
                            <div className="date">7:00 PM - Dinner</div>
                            <div className="descr">
                                <img className='icons' src={restaurant} alt="Dinner" />
                            </div>
                        </li>
                        <li>
                            <div className="date">8:00 PM - Cake & Late night</div>
                            <div className="descr">
                                <img className='icons' src={cake} alt="Cake & Late night" />
                            </div>
                        </li>
                        <li>
                            <div className="date">8:30PM - Dance the night away</div>
                            <div className="descr">
                                <img className='icons' src={disco} alt="Dance the night away" />
                            </div>
                        </li>
                    </ul>


                </div>


            </div>
        </div>
    );
}

export default Home;
