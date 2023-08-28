import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@mui/material";
import '../App.css';

const WakeUpTimePage = () => {
    let [date, setDate] = useState(new Date());
    let [wakeTimes, setWakeTimes] = new useState([]);
    let hoursSlept = ['20', '60', '90'];
    
    useEffect(() => {
        setDate(new Date());
    }, []);

    useEffect(() => {
        updateWakeTimes();
    }, [date]);
    
    let updateWakeTimes = async () => {
        const arr = [
            addHoursAndMinute(date, 0, 34), 
            addHoursAndMinute(date, 1, 14), 
            addHoursAndMinute(date, 1, 44)
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
                Nappy Time
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
                    {
                    //Below are the best times to wake up at according to the human body's sleep cycle.
                    }
                    Return to <Link className='App.link' to="/">the wakeuptime page</Link>.
                </p>
            </div>

            <div className='Center-div'>
                <div className='Times-container-div'>
                {wakeTimes.map((time, i) => (
                    <div className='Bordered-div'>
                        <p className='Display-hours-slept'>
                            {hoursSlept[i]}min 
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