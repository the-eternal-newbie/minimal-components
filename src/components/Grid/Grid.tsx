import React, { ReactElement } from 'react';
import { classNames } from '~utils/ClassNames';
import { generateTemplateAreas } from '~utils/TemplateAreas';

import './Grid.scss';
import { IGridItem } from './GridItem';

export interface IGrid {
    rows: number;
    columns: number;
    children: ReactElement<IGridItem>[];
}

const Grid = (props: IGrid & React.HTMLProps<HTMLDivElement>) => {
    const { children, className, rows, columns, style, ...rest } = props;

    const baseClassName = classNames('grid', className);
    const gridTemplateAreas = generateTemplateAreas({ rows, columns, children });
    const filteredChildren = children.filter(({ props: { area } }) => area);

    return (
        <div {...rest} className={baseClassName} style={{ ...style, gridTemplateAreas }}>
            {filteredChildren}
        </div>
    );
};

export default Grid;
