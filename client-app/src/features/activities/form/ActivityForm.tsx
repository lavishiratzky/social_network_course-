import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
interface Props{
    activity:Activity
    closeForm:()=>void;
}




export default function ActivityFrom({closeForm,activity:selectedActivity}:Props){


const initialState= selectedActivity ??{
id:"",
title:'',
category:"",
description:"",
date:"",
city:"",
venue:""

}
const [activity,setActivity]=useState(initialState);
function handleSubmit(){
    console.log(activity)
}
function handleInputOnChange(event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
   const {name,value}=event.target;
   setActivity({...activity,[name]:value})


}

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Input placeholder='Title'value={activity.title} name="title"onChange={handleInputOnChange}/>
            <Form.TextArea placeholder='Description'value={activity.description} name="description"onChange={handleInputOnChange}/>
            <Form.Input placeholder='Category'value={activity.category} name="category"onChange={handleInputOnChange}/>
            <Form.Input placeholder='Date'value={activity.date} name="date"onChange={handleInputOnChange}/>
            <Form.Input placeholder='City'value={activity.city} name="city"onChange={handleInputOnChange}/>
            <Form.Input placeholder='Venue 'value={activity.venue} name="venue"onChange={handleInputOnChange}/>   
            <Button floated="right"positive type="submit" content="Submit"/>
            <Button floated="right" type="submit" content="Cancel"onClick={closeForm}/>
            </Form>






        </Segment>




    )





}