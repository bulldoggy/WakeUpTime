import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TimeField from 'react-simple-timefield';
import Utils from '../utilities/Utils';
import GoodnightQuotes from '../utilities/GoodnightQuotes';

const AllSoftToysPage = () => {
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
        <div>
            ALL SOFT TOYS PAGE
            
        </div>
    )
}

export default AllSoftToysPage;