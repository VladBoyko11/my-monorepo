export type OptionType = {
    label: string;
    value: string;
    iconBefore: string;
    iconAfter: string;
};

export type ContentDataType = {
    name: string;
    key: string;
    hasSubmenu: boolean;
}

export type MenuSize = {
    MIN_WIDTH: number;
    MAX_WIDTH: number;
    MAX_HEIGHT: number;
    MIN_HEIGHT: number;
}

export type ValidPlacement =
    'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'auto';
