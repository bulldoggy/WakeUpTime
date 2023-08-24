import React, { useState, useEffect } from 'react';
import { Card } from "@mui/material";
import '../App.css';

const WakeUpTimePage = () => {
    let [date, setDate] = useState(new Date());
    let [wakeTimes, setWakeTimes] = new useState([]);
    let hoursSlept = ['3.0', '4.5', '6.0', '7.5', '9.0'];
    
    useEffect(() => {
        setDate(new Date());
    }, []);

    useEffect(() => {
        updateWakeTimes();
    }, [date]);
    
    let updateWakeTimes = async () => {
        const arr = [
            addHoursAndMinute(date, 3, 14), 
            addHoursAndMinute(date, 4, 44), 
            addHoursAndMinute(date, 6, 14), 
            addHoursAndMinute(date, 7, 44), 
            addHoursAndMinute(date, 9, 14)
        ];
        setWakeTimes(arr);
    }

    function addHoursAndMinute(dateCopy, hours, minutes) {
        const dateResult = new Date(dateCopy.getTime());

        dateResult.setMinutes(dateResult.getMinutes() + minutes);
        dateResult.setHours(dateResult.getHours() + hours);

        return dateResult;
    }

    function isSameDay(sleepDate, wakeDate) {
        if(sleepDate.getDay() === wakeDate.getDay()) {
            return true;
        }

        return false;
    }

    function pad(n) {
        return n < 10 ? '0' + n : n;
    }
    
    function displayTime(date) {
        return pad(date.getHours()) + ' : ' + pad(date.getMinutes());
    }

    return (
        <div>
            <p className='Page-title'>
                Wake Up Time
            </p>

            <div className='Center-div'>
                <Card>
                    <p className='Time-text'>
                        {displayTime(date)}
                    </p>
                </Card>
            </div>

            <div className='Center-div'>
                <p className='Info-text'>
                    Below are the best times to wake up at according to the human body's sleep cycle.
                    {
                    //<Link className='App.link' to="/sleep">the sleepytime page</Link>
                    }
                </p>
            </div>

            <div className='Center-div'>
                <div className='Times-container-div'>
                {wakeTimes.map((time, i) => (
                    <div className='Bordered-div'>
                        <p className='Display-hours-slept'>
                            {hoursSlept[i]}hr 
                        </p>
                        <p className='Display-time'>
                            {time === undefined ? '' : displayTime(time)} 
                        </p>
                        <p className='Display-same-day'>
                            {isSameDay(time, date) ? 'Same Day' : 'Next Day'} 
                        </p>
                    </div>
                ))}
                </div>
            </div>
            
        </div>
    )
}

export default WakeUpTimePage;