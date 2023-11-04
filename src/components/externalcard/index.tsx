import { useModal } from '@/providers/modalprovider';
import { DeleteIcon, EditIcon, ThunderIcon } from '@/assets/icons';
import { useTransformData } from '@/hooks/useTransform';
import { Table } from '../table';
import { ExternalData } from '../data';
import { useArray } from '@/hooks/usearray';
import { IExtenrnalComponentMap } from './types';

function ExtenalCard() {
    
      const { state , update , remove } = useArray<typeof ExternalData[0]>(ExternalData)  
      const { showModal } = useModal();
      const componentMap : IExtenrnalComponentMap = {
        name: ({ data }) => (
          <span style={{ padding: "10px 15px" }}>{data?.name}</span>
        ),
        icon: () => <ThunderIcon />,
        email: ({ data }) => (
          <span style={{ padding: "10px 15px" }}>{data.email}</span>
        ),
        delete: ({ data }) => (
      <div onClick={() => onDelete(data)}  >
          <DeleteIcon />
      </div>
        
        ),
        edit: ({ data }) => (
        <div onClick={() =>     onEdit(data)}  >
        <EditIcon />
        </div>
        ),
      };
      const dataRows = useTransformData(ExternalData, componentMap);
      function onDelete(data) {
        showModal({ component: "I Am deleting" })
      }
    
      function onEdit(data) {
        console.log(data);
      }


  return <></>
}

export default ExtenalCard