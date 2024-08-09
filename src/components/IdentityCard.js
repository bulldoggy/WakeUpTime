import { Card } from "@mui/material";

function IdentityCard({ toy }) {

    return (
        <Card style={{ height: '200px', width: '350px', background: '#c9a9a6' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ marginLeft: '20px', marginTop: '-10px', border: '2px solid cyan', borderRadius: '10px' }}>
                    <img src={toy.image} alt="" height={100} style={{borderRadius: '10px'}}/>
                </div>

                <div style={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', marginTop: '10px'}}>
                    <p style={{color: '#191970', height: '10px', margin: '10px'}}> Name: {toy.name}</p>
                    <p style={{color: '#191970', height: '10px', margin: '10px'}}> Gender: {toy.gender}</p>
                    <p style={{color: '#191970', height: '10px', margin: '10px'}}> Birthday: {toy.birthday}</p>
                    <p style={{color: '#191970', height: '10px', margin: '10px'}}> Owned By: {toy.owner}</p>
                    <p style={{color: '#191970', height: '10px', margin: '10px'}}> Clique: {toy.clique}</p>
                </div>
            </div>
        </Card>
    );
}

export default IdentityCard;
