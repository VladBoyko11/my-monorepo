# Custom Dropdown with submenu

## Install

```bash
npm install @saasjetlib/sj-selects
```

## Overview

#### @saasjetlib/sj-selects exports

```ts
export default EntityPickerPopup; // entity picker popup
```

## Simple Usage
### EntityPickerPopup
```tsx
import EntityPickerPopup from '@saasjetlib/sj-selects';
import React from "react";

function MyComponent() {
    const onEntityChange = (value: string | object) => {
        console.log(value) // get main dropdown entity value
    }
    
    const options = useState<Array<OptionType>>([
        {
            label: 'label',
            value: 'value',
            iconBefore: 'icon',
            iconAfter: 'icon'
        }
    ]) // subMenu option
    const entityData = useState<Array<ContentDataType>>([
            {
                name: 'entity name',
                key: 'key',
                hasSubmenu: 'true'
            }
        ]) // main dropdown entity data
    <EntityPickerPopup
        entityData={entityData}
        isOpen={true}
        onEntityChange={onEntityChange}
        options={options}
    />;
}
```

### Props you can use

`entityData` - main dropdown entities.

`isOpen` - used to either show or hide the popup.

`onEntityChange` - function that used on main dropdown entity change.

`onOptionChange` - function that used then options in submenu change.

`onClose` - handler that is called when the popup wants to close itself. 
Generally this will be either when clicking away from the popup or pressing the escape key. 
You'll want to use this to set open state accordingly and then pump it back into the `isOpen` prop.

`placement` - placement of where the popup should be displayed relative to the trigger element.

`onClick` - on main popup button click.

`options` - data that used in submenu.

`buttonLabel` - main popup button label.

`customSubmenu` - your submenu
