import React from 'react';
import CustomDropdownItem from './CustomDropdownItem';

interface Props {
    label: string;
    value: string;
    onEntityChange: (value: string | object) => void;
}

const EntityButtonItem = ({ label, value, onEntityChange }: Props) => (
        <CustomDropdownItem onClick={() => {
          onEntityChange(value);
        }}>
            {label}
        </CustomDropdownItem>
);

export default EntityButtonItem;
