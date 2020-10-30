import React, { useState } from 'react';
//import {Col, Form, FormGroup, Label, Input } from 'reactstrap'

//accessories data structure
const fishingTackle = [
    {
        price: 20,
        name: 'Fishing Net',
    },
    {
        price: 5,
        name: 'Fillet Knife',
    },
    {
        price: 20,
        name: 'Fish Basket',

    },
]

//items data structure
const fishingRods = [
    {
        price: 500,
        name: 'Fishing rod'

    },
    {
        price: 20,
        name: 'Fishing hook'

    },
    {
        price: 1000,
        name: 'Deep sea rod'
    }
]

//function to add money $
// pass price
function formatPrice(price) {
    return `$${price}`
}

export default function Body(props) {
    //const [fishingRod, setRodType] = usestate("");
    // store items
    let items = [];
    // set initial state to display items
    if (props.menuState === 0) {
        items = fishingRods;
    }
    // state 1 displays accessories
    else if (props.menuState === 1) {
        items = fishingTackle;
    }



return (

    <div>

        {
            // map through items to display the names and prices
            items.map(items => <tr>
                <td>{items.name}</td>

                <td>{formatPrice(items.price)} </td>


            </tr>)
        }

    </div>



)
}

