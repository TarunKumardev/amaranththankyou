import { DeleteIcon, EditIcon, ThunderIcon } from '@/assets/icons';
import { useTransformData, DataTransformerMap } from '@/hooks/useTransform';
import { Table } from '../table';
import { useModal } from '@/providers/modalprovider';
import { internalData } from '../data';
import { useArray } from '@/hooks/usearray';
import { IinternalData } from '../data/types';
import { IComponentMap } from './types';





function InternalCard() {
   const { state , update , remove } = useArray<IinternalData>(internalData)  
  const { showModal } = useModal();

  function onDelete(data: IinternalData) {
    showModal({ component: "I Am deleting" });
  }

  function onEdit(data: IinternalData) {
    showModal({ component: "I Am editing" });
  }

  const componentMap: IComponentMap = {
    avatar: ({ data }) => (
      <div style={{ width: "50px", borderRadius: "50%", overflow: "hidden" }}>
        <img style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} src={data?.image} alt="Avatar" />
      </div>
    ),
    name: ({ data }) => (
      <span style={{ padding: "10px 15px" }}>{data?.name}</span>
    ),
    icon: () => <ThunderIcon />,
    email: ({ data }) => (
      <span style={{ padding: "10px 15px" }}>{data.email}</span>
    ),
    delete: ({ data }) => (
      <div onClick={() => onDelete(data)}>
        <DeleteIcon />
      </div>
    ),
    edit: ({ data }) => (
      <div onClick={() => onEdit(data)}>
        <EditIcon />
      </div>
    ),
  };

  const dataRows = useTransformData(internalData, componentMap);

  return (<Table rows={dataRows} />);
}

export default InternalCard;
