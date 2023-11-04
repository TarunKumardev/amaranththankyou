import { Table } from './components/Table'
import { useTransformData } from './hooks/useTransform';
import { useModal } from './providers/modalprovider';



function YourModalContent(){
  return (
    <>
      <h1>Hello</h1>
    </>    
  )
}

function App() {
  const { showModal, hideModal } = useModal();
  async function onDelete(data){ 

  }

  async function onEdit(data){    
    showModal({ component: <YourModalContent /> });
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