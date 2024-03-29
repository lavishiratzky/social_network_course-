
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List, ListItem } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import ActivityDashboard from '../../features/activities/dashbord/ActivityDashboard';
import NavBar from './NavBar';
function App() {
  const [activities , setActivities ]=useState<Activity[]>([]);
  const [selectedActivity ,setSelectedActivity]=useState<Activity|undefined>(undefined)
  const [editMode,setEditMode]=useState(false)
useEffect(()=>{
  axios.get<Activity[]>('http://localhost:5000/activities')
            .then(response=>
              {console.log(response);
              setActivities(response.data)
            })
},[])
function handleSelectActivity(id:string){
 setSelectedActivity(activities.find(x=>x.id===id))
}
function handleCancelSelectActivity(){
  setSelectedActivity(undefined)
 }
function handleFormOpen(id?:string){
  id? handleSelectActivity(id):handleCancelSelectActivity();
  setEditMode(true);
}
function handleFormClose (){
  setEditMode(false)
}


  return (
    <div>
        <NavBar openForm={handleFormOpen}/>
       <Container style={{marginTop:'7em'}}>
          <ActivityDashboard activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          
          />

         </Container>
         
    </div>
   
  )
}

export default App
