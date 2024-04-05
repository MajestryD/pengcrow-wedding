import './home.css';
import React, { useEffect, useState } from 'react';

function Home() {


    const [day, setDay] = useState();
    const DaysUntilWedding = () => {
        let weddingDay = new Date("09/30/2024");
        let currentDay = Date.now();
        console.log(((weddingDay - currentDay) / (1000 * 3600 * 24)))

        return Math.round((weddingDay.getTime() - currentDay) / (1000 * 3600 * 24));
    }

    useEffect(() => {
        const daysLeft = DaysUntilWedding();
        setDay(daysLeft);
    }, []);

    return (
        <div id="Home" className="Home">

            <div className='homeMessage'>
                <span className='gettingMarried'> We're getting Married!</span>
                <p>September 30, 2024 | 5:00PM | The Manor</p>
                <p> {day} days to the event</p>

            </div>

        </div>
    );
}

export default Home;
