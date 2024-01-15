import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityFrom from "../form/ActivityForm";
interface Props{
    activities :Activity[];
    selectedActivity :Activity|undefined;
    selectActivity:(id:string)=>void;
    cancelSelectActivity:()=>void;
    editMode:boolean;
    openForm:(id:string)=>void;
    closeForm:()=>void;



}
export default function ActivityDashboard({activities,cancelSelectActivity,selectActivity,selectedActivity,editMode,closeForm,openForm}:Props)
{

    return(
            <Grid  >
                <Grid.Column width='10'>
                <ActivityList activities={activities}selectActivity={selectActivity}/>
                </Grid.Column>
                <Grid.Column width='6'>{selectedActivity&&!editMode&&
            
                <ActivityDetails activity={selectedActivity}cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}
                />}
                {editMode&&
                 <ActivityFrom
                 closeForm={closeForm} activity={selectedActivity}/>}
                </Grid.Column>
               

            </Grid>
    )
}