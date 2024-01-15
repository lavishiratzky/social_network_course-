import React from "react";
import { Activity } from "../../../app/models/activity";
import { Button, Card } from "semantic-ui-react";
interface Props{

    activity:Activity;
    cancelSelectActivity:()=>void;
    openForm:(id:string)=>void;
    
}
export default function ActivityDetails({activity ,cancelSelectActivity,openForm}:Props){




    return(
        <Card fluid>
  <div className="image">
    <img src={`/assets/categoryImages/${activity.category}.jpg`}/>
  </div>
  <div className="content">
    <a className="header">{activity.title}</a>
    <div className="meta">
      <span className="date">{activity.date}</span>
    </div>
    <div className="description">
      {activity.description}
    </div>
  </div>
  <div className="extra content">
    <Button.Group widths='2'>
        <Button basic color="blue" content ="Edit"onClick={()=>openForm(activity.id)}/>
        <Button basic color="grey" content ="Cancel" onClick={cancelSelectActivity}/>



    </Button.Group>
  </div>
  </Card>



    )




}