import React, { useState } from 'react';
//import {Col, Form, FormGroup, Label, Input } from 'reactstrap'

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

    function formatPrice(price) {
        return `$${price}`
    }

    export default function Body(props) {
    //const [fishingRod, setRodType] = usestate("");
    let items = [];
    if (props.menuState = 0) {
        items = fishingRods;
    }

    return (

        <div>

            {
                items.map(items => <tr>
                    <td>{items.name}</td>

                    <td>{formatPrice(items.price)} </td>


                </tr>)
            }

        </div>

    )
}