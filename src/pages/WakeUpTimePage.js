import React, { useState, useEffect } from 'react';
import { Button, Card, TableBody, TableRow, TableCell } from "@mui/material";
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
        const arr = [addHoursAndMinute(date, 4, 44), addHoursAndMinute(date, 6, 14), addHoursAndMinute(date, 7, 44), addHoursAndMinute(date, 9, 14)];
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
            <p className='Page-title' style={{ marginTop: '0px'}}>
                Wake Up Time
            </p>

            <div className='Center-div' style={{paddingBottom: '5px', marginTop: '-30px'}}>
                <Card>
                    <p className='Time-text'>
                        {displayTime(date)}
                    </p>
                </Card>
            </div>

            <div className='Center-div'>
                <Button variant='contained' color='primary'>Change time</Button>
            </div>

            <div className='Center-div'>
                <p className='Info-text'>
                    Below are the best times to wake up at according to the human body's sleep cycle.
                    {
                    //<Link className='App.link' to="/sleep">the sleepytime page</Link>
                    }
                </p>
            </div>

            <div className='Center-div' style={{marginTop: '-30px'}}>
                <TableBody>
                    {wakeTimes.map((time) => (
                        <TableRow>
                            <TableCell>
                                <p className='Display-time'>
                                    {displayTime(time) + ' (' + (isSameDay(time, date) ? 'Same Day' : 'Next Day') + ')'} 
                                </p>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </div>
            
        </div>
    )
}

export default WakeUpTimePage;