import React from 'react';
import { classNames } from '~utils/ClassNames';

import './Grid.scss';

export interface IGridItem extends React.HTMLProps<HTMLDivElement> {
    area?: string;
    row?: number | 'full';
    col?: number | 'full';
}

const GridItem = (props: IGridItem) => {
    const { children, className, area, col, row, ...rest } = props;

    const baseClassName = classNames('grid-item', className, `col-${col}`, `row-${row}`);

    return (
        <div {...rest} className={baseClassName} style={{ gridArea: area }}>
            {children}
        </div>
    );
};

export default GridItem;
