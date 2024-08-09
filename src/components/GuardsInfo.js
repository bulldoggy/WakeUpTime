import React, { useState, useEffect } from 'react';
import '../App.css';
import SoftToys from '../utilities/SoftToys';
import { Dialog } from '@mui/material';
import IdentityCard from './IdentityCard';

const GuardsInfo = () => {
    let [softToys, setSoftToys] = useState([]);
    let [toyToShow, setToyToShow] = useState(null);
    const [open, setOpen] = React.useState(false);
    
    useEffect(() => {
        setSoftToys(SoftToys.getRandomSoftToys());
    }, []);

    const handleClose = () => setOpen(false);
    const handleOpen = (pos) => {
        setToyToShow(softToys[pos])
        setOpen(true)
    }

    return (
        <>        
            {softToys.length !== 0 && 
                <>
                    <div style={{width:'70%', display:'flex', flexDirection:'row'}}>
                        <div style={{width:'45%'}}>
                            <p style={{fontSize:'11px', textAlign:'center', fontWeight:'bold'}}>Leader of the Guards</p>
                        </div>

                        <div style={{background:'rgb(223, 218, 218)', width:'2px'}}/>

                        <div style={{width:'55%'}}>
                            <p style={{fontSize:'11px', textAlign:'center'}}>Brave Assistant Guards</p>
                        </div>
                    </div>

                    <div style={{width:'70%', display:'flex', flexDirection:'row'}}>
                        <div style={{width:'45%', display:'flex', justifyContent:'center'}}>
                            <img src={softToys[0].image} height={75} alt="" onClick={() => handleOpen(0)}/>
                        </div>

                        <div style={{background:'rgb(223, 218, 218)', width:'2px'}}/>

                        <div style={{width:'55%', display:'flex', justifyContent:'space-evenly'}}>
                            <img src={softToys[1].image} height={75} alt="" onClick={() => handleOpen(1)}/>
                            <img src={softToys[2].image} height={75} alt="" onClick={() => handleOpen(2)}/>
                        </div>
                    </div>

                    {/* <p style={{width:'70%', textAlign:'center', fontSize:'11.5px', marginTop:'2px'}}>
                        Your Guards have guarded a total of {softToys[0].guardcount+softToys[1].guardcount+softToys[2].guardcount} nights 😊
                    </p>
                    <button 
                        style={{width:'40%', height:'20px', textAlign:'center', fontSize:'11.5px', marginTop:'-10px', marginBottom:'10px'}}
                        onClick={event => window.location.href='/all'}
                    >
                        View All Princess' Guards
                    </button>  */}
                </>
            }

            <Dialog open={open} onClose={() => handleClose()}>
                <IdentityCard toy={ toyToShow }/>
            </Dialog>
        </>
    )
}

export default GuardsInfo;