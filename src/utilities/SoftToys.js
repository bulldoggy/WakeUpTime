import Utils from "../utilities/Utils";
import babybunny from '../images/babybunny.jpeg';
import boybear from '../images/boybear.jpeg';
import brownie from '../images/brownie.jpeg';
import girlbear from '../images/girlbear.jpeg';
import linabell from '../images/linabell.jpeg';
import lion from '../images/lion.jpeg';
import pinkbunny from '../images/pinkbunny.jpeg';
import pompompurin from '../images/pompompurin.jpeg';

class SoftToys {
    static softToys = [
        {
            name: 'Baby Bunny',
            gender: 'Female',
            clique: 'The Girls',
            birthday: 'Unknown',
            owner: 'Princess',
            image: babybunny,
            likecount: 0,
            guardcount : 0
        }, 
        {
            name: 'Pink Bunny',
            gender: 'Female',
            clique: 'The Girls',
            birthday: '14th February',
            owner: 'Princess',
            image: pinkbunny,
            likecount: 0,
            guardcount : 0
        }, 
        {
            name: 'Girl Bear',
            gender: 'Female',
            clique: 'The Girls',
            birthday: 'Unknown',
            owner: 'Princess',
            image: girlbear,
            likecount: 0,
            guardcount : 0
        }, 
        {
            name: 'Brownie',
            gender: 'Male',
            clique: 'The Boys',
            birthday: 'Unknown',
            owner: 'Princess',
            image: brownie,
            likecount: 0,
            guardcount : 0
        }, 
        {
            name: 'Boy Bear',
            gender: 'Male',
            clique: 'The Boys',
            birthday: 'Unknown',
            owner: 'Princess',
            image: boybear,
            likecount: 0,
            guardcount : 0
        }, 
        {
            name: 'LinaBell',
            gender: 'Female',
            clique: 'The Girls',
            birthday: '8th September',
            owner: 'Princess',
            image: linabell,
            likecount: 0,
            guardcount : 0
        }, 
        {
            name: 'Lion',
            gender: 'Male',
            clique: 'The Boys',
            birthday: 'Unknown',
            owner: 'Princess',
            image: lion,
            likecount: 0,
            guardcount : 0
        }, 
        {
            name: 'Pompompurin',
            gender: 'Male',
            clique: 'The Boys',
            birthday: '16th April',
            owner: 'Princess',
            image: pompompurin,
            likecount: 0,
            guardcount : 0
        }
    ]


    static getRandomSoftToys(list) {
        var pos = Utils.getRandomPos(this.softToys.length, 3);
        var result = [];
        pos.forEach((idx) => {
            result.push(this.softToys[idx]);
        });
        return result;
    }
}

export default SoftToys;