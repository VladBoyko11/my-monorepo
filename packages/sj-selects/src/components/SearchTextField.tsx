import React, { ChangeEvent } from 'react';

import Button from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';
import TextField from '@atlaskit/textfield';

import SearchIcon from '@atlaskit/icon/glyph/search';
import SelectClearIcon from '@atlaskit/icon/glyph/select-clear';
import './SearchTextField.module.css';

interface SearchTextFieldProps {
    value: string;
    setValue: (value: string) => void;
    clearTextFieldTooltipContent?: string;
    placeholder: string;
}

const SearchTextField = React.forwardRef<HTMLDivElement, SearchTextFieldProps>(
  ({
    value, setValue, clearTextFieldTooltipContent = 'Discard', placeholder, ...otherProps
  }, ref) => (
            <TextField
                ref={ref}
                autoFocus={true}
                autoComplete="off"
                placeholder={placeholder}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                testId="search-borderless-input"
                elemAfterInput={
                    value ? (
                        <Button
                            appearance="subtle"
                            spacing="compact"
                            onClick={() => setValue('')}
                            iconAfter={
                                <Tooltip content={clearTextFieldTooltipContent}>
                                    <SelectClearIcon label="Clear"/>
                                </Tooltip>
                            }
                            style={{ padding: 0, flexShrink: 0, width: '24px' }}
                        />
                    ) : (
                        <SearchIcon primaryColor="#42526E" label="Search"/>
                    )
                }
                {...otherProps}
            />
  ),
);

export default SearchTextField;
