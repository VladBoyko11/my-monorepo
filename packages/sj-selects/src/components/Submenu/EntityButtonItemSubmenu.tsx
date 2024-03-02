import React, { useState } from 'react';
import Popup from '@atlaskit/popup';
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right';

import CustomDropdownItem from '../CustomDropdownItem';
import { OptionType } from '../../types/entityPicker';
import PopupContentSubmenu from './PopupContentSubmenu';

interface Props {
    label: string;
    value: string;
    onOptionChange: (value: string | object) => void;
    options: OptionType[] | undefined;
    onEntityChange: (value: string) => void;
}

const EntityButtonItemSubmenu = ({
  label, value, onOptionChange, options, onEntityChange,
}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
    onEntityChange(value);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
        <Popup
            autoFocus={false}
            isOpen={isDialogOpen}
            onClose={closeDialog}
            content={() => <PopupContentSubmenu
                onOptionChange={onOptionChange}
                options={options}
            />}
            placement="right-start"
            trigger={(triggerProps) => (
                <CustomDropdownItem
                    {...triggerProps}
                    onClick={toggleDialog}
                    isSelected={isDialogOpen}
                    iconAfter={<ChevronRightIcon label="submenu-right-icon"/>}
                >
                    {label}
                </CustomDropdownItem>
            )}
        />
  );
};

export default EntityButtonItemSubmenu;
