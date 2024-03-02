import React, { forwardRef, Ref } from 'react';
import Button, { ButtonProps } from '@atlaskit/button';

interface CustomDropdownItemProps extends ButtonProps {
    children: React.ReactNode;
}

const CustomDropdownItem = forwardRef(
  ({ children, ...rest }: CustomDropdownItemProps, ref: Ref<HTMLButtonElement>) => (
        <Button
            ref={ref}
            appearance="subtle"
            {...rest}
            style={{
              textAlign: 'left',
              fontWeight: 'normal',
              borderRadius: 0,
              paddingLeft: '14px',
              maxHeight: '32px',
              lineHeight: '32px',
              width: '100%',
              ...rest.style,
            }}
        >
            {children}
        </Button>
  ),
);

export default CustomDropdownItem;
