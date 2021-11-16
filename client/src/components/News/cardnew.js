import React from 'react'
import {Card} from 'react-bootstrap';
import CardLeft from './cardleft';
// import {NewContext} from '../../contexts/NewContext'
// import {useContext,useEffect} from 'react';

export default function cardnew(props) {
    // const {getNew, newState:{news}} = useContext(NewContext)

    // useEffect(()=>{
    //     getNew()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[news]);
    return (
        <Card
            bg='Danger'
            className="mb-2"
        >
            <Card.Header style={{backgroundColor:'#dc3545',color:'white',fontWeight:'bold'}}>{props.title}</Card.Header>
            <Card.Body>
                {/* {news.map(item => (
                            <div key={item._id}>
                                <CardLeft src={item.imageNewUrl} content={item.contentNew}></CardLeft>
                            </div>
                        ))} */}
            </Card.Body>
        </Card>
    )
}
