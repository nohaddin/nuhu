import React, { useState } from 'react'
import './menu.css';
import sekil1 from './Ekran şəkli 2023-11-21 143512.png'
import sekil2 from './Ekran şəkli 2023-11-21 143526.png'
import sekil3 from './Ekran şəkli 2023-11-21 143537.png'
import sekil4 from './Ekran şəkli 2023-11-21 143545.png'
import sekil5 from './Ekran şəkli 2023-11-21 143556.png'
import sekil6 from './Ekran şəkli 2023-11-21 143604.png'

const Menu = () => {
    const [n ,setN]=useState(sekil1)
    function random() {
        let a = Math.floor(Math.random() * 10);
        switch (a) {
            case 1:
            case 2:
                setN(sekil1);
                break
            case 3:
            case 4:
                setN(sekil2);
                break;
            case 6:
                setN(sekil3);
                break;
            case 7:
            case 8:
                setN(sekil4);
                break;
            case 9:
                setN(sekil5);
                break;
            case 0:
                setN(sekil6);
                break;
                default:
                    break;
        }
    }
    return (
        <div  className='nuhu'>
<img src={n} alt="" onClick={random} />
        </div>
    )
}

export default Menu