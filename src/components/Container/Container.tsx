import React, { FC } from 'react';
import { classNames } from '~utils/ClassNames';
import './Container.scss';

export interface IContainer extends React.HTMLProps<HTMLDivElement> {
    direction?: 'column' | 'row';
    style?: React.CSSProperties;
    containerType?: 'flex' | 'grid';
}

const Container: FC<IContainer> = (props: IContainer) => {
    const { children, className, direction = 'column', style, containerType = 'grid' } = props;

    const overrideStyles = { ...style } as React.CSSProperties;
    const baseClassName = classNames('container', containerType.toString(), direction.toString(), className);

    return (
        <div {...props} className={baseClassName} style={overrideStyles}>
            {children}
        </div>
    );
};

export default Container;
