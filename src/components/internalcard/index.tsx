import React, { useState } from 'react';
import { useTransformData } from '@/hooks/useTransform';
import { Table } from '../table';
import { useModal } from '@/providers/modalprovider';
import { internalData } from '../data';
import { useArray } from '@/hooks/usearray';
import { DeleteIcon, EditIcon, ThunderIcon } from '@/assets/icons';
import { IinternalData } from '../data/types';
import { IComponentMap } from './types';
import { DeleteComponent, EditComponent } from './updatecostumer';

function InternalCard() {
    const { state, update, remove } = useArray<IinternalData>(internalData);
    const { showModal, hideModal } = useModal();
    const [opim, setData] = useState({}); // Consider providing an initial state here
   console.log(opim , "opim");
   
    function onDelete(data: IinternalData) {
        showModal({
            component: <DeleteComponent data={data} />,
            title: 'Delete',
            showDeleteButton: true,
            onDelete: () => {
                hideModal();
                remove(data.id);
            },
        });
    }

    function onEdit(data: IinternalData) {
        showModal({
            component: <EditComponent data={data} updateData={setData} />,
            title: 'Edit',
            onSave: () => {
                console.log('opim', opim);
                hideModal();
            },
            showDeleteButton: false,
        });
    }

    const componentMap: IComponentMap = {
       avatar: ({ data }) => (
            <div style={{ width: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                <img
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
                    loading='eager'
                    src={data?.image}
                    alt='Avatar'
                />
            </div>
        ),
        name: ({ data }) => (
            <span style={{ padding: '10px 15px' }}>{data?.name}</span>
        ),
        icon: () => <ThunderIcon />,
        email: ({ data }) => (
            <span style={{ padding: '10px 15px' }}>{data.email}</span>
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

    const dataRows = useTransformData(state, componentMap);
   console.log(dataRows , "dataRows");
   
    return <Table rows={dataRows} />;
}

export default InternalCard;
