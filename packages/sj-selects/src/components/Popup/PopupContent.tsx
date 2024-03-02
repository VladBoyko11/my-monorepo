import { MenuGroup } from '@atlaskit/menu';
import React from 'react';
import { MENU_SIZE } from '../../utils/constants';
import { ContentDataType, MenuSize, OptionType } from '../../types/entityPicker';
import EntityButtonItemSubmenu from '../Submenu/EntityButtonItemSubmenu';
import EntityButtonItem from '../EntityButtonItem';

interface PopupContentProps {
    entityData: { name: string; key: string; hasSubmenu: boolean }[];
    onOptionChange?: (value: string | object) => void | undefined;
    options?: OptionType[];
    onEntityChange: (value: string | object) => void;
    customSubmenu?: React.ReactNode;
    menuSize?: MenuSize
}
const PopupContent = ({
  entityData, onOptionChange, options, onEntityChange, customSubmenu, menuSize,
}: PopupContentProps) => (
    <MenuGroup
        minWidth={menuSize?.MIN_WIDTH ?? MENU_SIZE.MIN_WIDTH}
        maxWidth={menuSize?.MAX_WIDTH ?? MENU_SIZE.MAX_WIDTH}
    >
        {entityData.map(({ name, key, hasSubmenu }: ContentDataType) => (
            <React.Fragment key={key}>
                {hasSubmenu ? (
                  customSubmenu
                    || <EntityButtonItemSubmenu
                        label={name}
                        value={key}
                        onOptionChange={onOptionChange!}
                        options={options}
                        onEntityChange={onEntityChange}
                    />
                ) : (
                    <EntityButtonItem
                        label={name}
                        value={key}
                        onEntityChange={onEntityChange!}
                    />
                )}
            </React.Fragment>
        ))}
    </MenuGroup>
);

export default PopupContent;
