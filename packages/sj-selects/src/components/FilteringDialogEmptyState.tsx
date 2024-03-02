import React from 'react';
import { N200 } from '@atlaskit/theme/colors';

const FilteringDialogEmptyState = () => (
        <div style={{
          padding: '16px', display: 'flex', flexDirection: 'row', justifyContent: 'center',
        }}>
            <span style={{ color: N200, fontSize: '14px', fontWeight: 'normal' }}>
                No matches
            </span>
        </div>
);

export default FilteringDialogEmptyState;
