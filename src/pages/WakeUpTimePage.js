import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TimeField from 'react-simple-timefield';
import GoodnightQuotes from '../utilities/GoodnightQuotes';
import Utils from '../utilities/Utils';
import GuardsInfo from '../components/GuardsInfo';


const WakeUpTimePage = () => {
    let [date, setDate] = useState(new Date());
    let [wakeTimes, setWakeTimes] = useState([]);
    let hoursSlept = ['4.5', '6.0', '7.5', '9.0'];

    useEffect(() => {
        setDate(new Date());
    }, []);

    useEffect(() => {
        updateWakeTimes();
    }, [date]);

    let updateWakeTimes = async () => {
        const arr = [
            Utils.addHoursAndMinute(date, 4, 44),
            Utils.addHoursAndMinute(date, 6, 14),
            Utils.addHoursAndMinute(date, 7, 44),
            Utils.addHoursAndMinute(date, 9, 14)
        ];
        setWakeTimes(arr);
    }


    function onTimeChange(value) {
        const hours = value.substring(0, 2);
        const minutes = value.substring(3, 5)
        setDate(Utils.updateHoursAndMinute(date, hours, minutes));
    }

    return (
        <>
            <GuardsInfo />

            <div style={{ marginTop: '10px' }}>

                <p className='Page-title'>
                    Wake Up Time
                </p>

                <div className='Center-div'>
                    <TimeField
                        value={Utils.displayTime(date)}
                        onChange={onTimeChange}
                        style={{
                            border: '2px solid #666',
                            fontSize: 44,
                            width: 112,
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
                                    {time === undefined ? '' : Utils.displayTime(time)}
                                </p>
                                <p className='Display-same-day'>
                                    {Utils.isSameDay(time, date) ? <text>Same Day</text> : <text style={{ color: 'yellow' }}>Next Day</text>}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='Center-div'>
                    <i style={{ marginTop: '20px', width: '80%', fontSize: '15px' }}>
                        {GoodnightQuotes.getRandomQuote()}
                    </i>
                </div>
            </div>
        </>
    )
}

export default WakeUpTimePage;