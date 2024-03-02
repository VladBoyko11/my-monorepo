import React from 'react';
import Spinner from '@atlaskit/spinner';

const DialogLoadingSpinner = () => (
        <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '24px',
              paddingBottom: '24px',
            }}
        >
            <Spinner />
        </div>
);

export default DialogLoadingSpinner;
