import React from 'react'
import Card from './components/card'
import { Table } from './components/Table'


const useTransformData = (data: Record<string, any>[] , componentMap  : any): Row[] => {
  return data.map((row, rowIndex) => {
      const rowComponents = Object.entries(componentMap).map(([key, Component]) => {
          console.log(row);
            
        return {
              headerName: key,
              componentConfig: {
                  component: <Component data={row} />
              }
          };
      });
      return { id: rowIndex, columns: rowComponents };
  });
};


function App() {
    
  function onDelete(data){ 
    console.log(data);
    
  }

  function onEdit(data){
      console.log(data);
      
  }

  const apiData = [
    {
      "name" : "TARUN",
      "image" : "https://images.pexels.com/photos/18937801/pexels-photo-18937801/free-photo-of-wanna-play-football-or-drone.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "email" : "jjagannathbehera50@gmail.com"
    }
  ]


  const componentMap = {
    name: ({data}) => <h1>{data?.name}</h1>,
    avatar : ({data}) => <img src={data?.image} /> ,
    email: ({data}) => <h1>{data.email}</h1>,
    delete: ({data}) => <button onClick={() => onDelete(data)}>Delete</button>,
    edit: ({data}) => <button onClick={() => onEdit(data)}>Edit</button>
};

const dataRows = useTransformData(apiData, componentMap);
  return (
    <div>
     <Table rows={dataRows} />
    </div>
  )
}

export default App