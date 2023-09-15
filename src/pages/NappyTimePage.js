import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TimeField from 'react-simple-timefield';

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

    function updateHoursAndMinute(dateCopy, hours, minutes) {
        const dateResult = new Date(dateCopy.getTime());

        dateResult.setMinutes(minutes);
        dateResult.setHours(hours);

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
        return pad(date.getHours()) + ':' + pad(date.getMinutes());
    }

    function onTimeChange(value) {
        const hours = value.substring(0, 2);
        const minutes = value.substring(3, 5)
        setDate(updateHoursAndMinute(date, hours, minutes));
    }

    return (
        <div>
            <p className='Page-title'>
                Nappy Time
            </p>

            <div className='Center-div'>
                <TimeField
                    value={displayTime(date)}
                    onChange={onTimeChange}
                    style={{
                        border: '2px solid #666',
                        fontSize: 50,
                        width: 130,
                        color: '#333',
                        borderRadius: 3
                    }}
                />
            </div>

            <div className='Center-div'>
                <p className='Info-text'>
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