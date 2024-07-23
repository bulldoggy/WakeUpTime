import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TimeField from 'react-simple-timefield';
import boybear from '../boybear.jpeg';
import girlbear from '../girlbear.jpeg';
import pinkbunny from '../pinkbunny.jpeg';


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
        <>
            <div style={{width:'80%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <img src={girlbear} height={100} alt="girlbear" />
                <img src={pinkbunny} height={100} alt="pinkbunny" />
                <img src={boybear} height={100} alt="boybear" />
            </div>

            <div>

                <p className='Page-title'>
                    Wake Up Time
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
                        Taking a nap? Head over to <Link className='App.link' to="/nap">the nappytime page</Link>.
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
        </>
    )
}

export default WakeUpTimePage;