import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button, Card, Box } from "@mui/material";
import '../App.css';

const WakeUpTimePage = () => {
    let [date, setDate] = useState(new Date());
    let [wakeTimes, setWakeTimes] = new useState([]);
    
    useEffect(() => {
        setDate(new Date());
    }, []);

    useEffect(() => {
        updateWakeTimes();
        console.log('waketimes: ' + wakeTimes);
    }, [date]);
    
    let updateWakeTimes = async () => {
        const arr = [addHoursAndMinute(date, 4, 30), addHoursAndMinute(date, 6, 0), addHoursAndMinute(date, 7, 30), addHoursAndMinute(date, 9, 0)];
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

            <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '5px'}}>
                <Card>
                    <p className='Time-text'>
                        {displayTime(date)}
                    </p>
                </Card>
            </div>

            <Box textAlign='center' >
                <Button variant='contained' color='primary'>Change time</Button>
            </Box>

            <Box textAlign='center'>
                <p className='Info-text'>
                    Below are the best times to wake up according to the body's sleep cycle.
                    Note that the average person takes 14 minutes to fall asleep.
                    <br/>
                    <br/>
                    (Have a time to wake up? Head over to the <Link className='App.link' to="/sleep">the sleepytime page</Link>)
                </p>
            </Box>

            <div>
                {wakeTimes.map(time => 
                    <p className='Display-time'>
                        <br/>
                        {displayTime(time) + ' (' + (isSameDay(time, date) ? 'Same Day' : 'Next Day') + ')'} 
                    </p>)
                }
            </div>
            
        </div>
    )
}

export default WakeUpTimePage;