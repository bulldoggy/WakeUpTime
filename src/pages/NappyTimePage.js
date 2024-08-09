import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TimeField from 'react-simple-timefield';
import Utils from '../utilities/Utils';
import GoodnightQuotes from '../utilities/GoodnightQuotes';
import GuardsInfo from '../components/GuardsInfo';

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
            Utils.addHoursAndMinute(date, 0, 34),
            Utils.addHoursAndMinute(date, 1, 14),
            Utils.addHoursAndMinute(date, 1, 44)
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

            <div>

                <p className='Page-title'>
                    Nappy Time
                </p>

                <div className='Center-div'>
                    <TimeField
                        value={Utils.displayTime(date)}
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
                                    {time === undefined ? '' : Utils.displayTime(time)}
                                </p>
                                <p className='Display-same-day'>
                                    {Utils.isSameDay(time, date) ? 'Same Day' : 'Next Day'}
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