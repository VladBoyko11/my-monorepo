import React from 'react';
import Popup from '@atlaskit/popup';
import Button from '@atlaskit/button';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import { OptionType, ValidPlacement } from '../../types/entityPicker';
import PopupContent from './PopupContent';

interface PickerPopupProps {
    entityData: { name: string; key: string; hasSubmenu: boolean }[];
    isOpen: boolean;
    onEntityChange: (value: string | object) => void;
    onOptionChange?: (value: string | object) => void | undefined;
    onClose?: () => void;
    placement?: ValidPlacement;
    onClick?: () => void;
    options?: OptionType[];
    buttonLabel?: string;
    customSubmenu?: React.ReactNode;
}

const EntityPickerPopup = ({
  entityData,
  isOpen,
  onClose,
  placement,
  onClick,
  onOptionChange,
  options,
  onEntityChange,
  buttonLabel,
  customSubmenu,
}: PickerPopupProps) => {
  const defaultButtonLabel = `${isOpen ? 'Close' : 'Open'} popup`;

  return (
        <div>
          <Popup
            isOpen={isOpen}
            onClose={onClose}
            placement={placement}
            content={() => (<PopupContent
              entityData={entityData}
              onOptionChange={onOptionChange}
              options={options}
              onEntityChange={onEntityChange}
              customSubmenu={customSubmenu}
            />)}
            trigger={(triggerProps) => (
              <Button
                {...triggerProps}
                isSelected={isOpen}
                onClick={onClick}
                style={{ textAlign: 'left', height: '32px', lineHeight: '32px' }}
                iconAfter={<ChevronDownIcon label="down-icon"/>}
              >
                {buttonLabel || defaultButtonLabel}
              </Button>
            )}
          />
          hello world!
          hello world!
        </div>
  );
};

export default EntityPickerPopup;
