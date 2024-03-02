import React, { useEffect, useRef, useState } from 'react';
import { MenuGroup } from '@atlaskit/menu';
import Highlighter from 'react-highlight-words';
import { MenuSize, OptionType } from '../../types/entityPicker';
import { isOptionMatchSearchFilter } from '../../utils/entityPickerPopupHelpers';
import SearchTextField from '../SearchTextField';
import { MENU_SIZE } from '../../utils/constants';
import CustomDropdownItem from '../CustomDropdownItem';
import FilteringDialogEmptyState from '../FilteringDialogEmptyState';
import DialogLoadingSpinner from '../DialogLoadingSpinner';
import styles from './PopupContentSubmenu.module.css';

interface PopupContentProps {
    onOptionChange: (value: string | object) => void;
    options: OptionType[] | undefined;
    menuSize?: MenuSize;
}

const PopupContentSubmenu = ({ onOptionChange, options, menuSize }: PopupContentProps) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [searchFilter, setSearchFilter] = useState('');

  const filteredEntities = Array.isArray(options)
    ? options.filter((item: OptionType) => isOptionMatchSearchFilter(item.label, searchFilter))
    : [];
  useEffect(() => {
    setTimeout(() => searchInputRef.current && searchInputRef.current.focus(), 0);
  }, []);

  const getIconForItem = (iconLink: string, label: string) => iconLink && (
        <img
            src={iconLink}
            alt={`${label} Icon`}
            className={styles.optionIcon}
        />
  );

  return (
        <div
            style={{ display: 'flex', flexDirection: 'column' }}
            onClick={(event) => event.stopPropagation()}
        >
            <SearchTextField
                ref={searchInputRef}
                value={searchFilter}
                setValue={setSearchFilter}
                placeholder="Search"
            />
            <MenuGroup
                maxHeight={menuSize?.MAX_HEIGHT ?? MENU_SIZE.MAX_HEIGHT}
                minWidth={menuSize?.MIN_WIDTH ?? MENU_SIZE.MIN_WIDTH}
                maxWidth={menuSize?.MAX_WIDTH ?? MENU_SIZE.MAX_WIDTH}
            >
                {
                    Array.isArray(options) ? (
                      filteredEntities.length ? (
                        filteredEntities.map((entity: OptionType, index: number) => (
                                <React.Fragment key={index}>
                                    <CustomDropdownItem
                                        iconBefore={getIconForItem(entity.iconBefore, entity.label)}
                                        iconAfter={getIconForItem(entity.iconAfter, entity.label)}
                                        onClick={() => onOptionChange(entity)}
                                    >
                                        <Highlighter
                                            highlightClassName={styles.highlightingBgColor}
                                            searchWords={[searchFilter]}
                                            autoEscape={true}
                                            textToHighlight={entity.label}
                                        />
                                    </CustomDropdownItem>
                                </React.Fragment>
                        ))
                      ) : (
                            <FilteringDialogEmptyState/>
                      )
                    ) : (
                        <DialogLoadingSpinner/>
                    )
                }
            </MenuGroup>
        </div>
  );
};

export default PopupContentSubmenu;
