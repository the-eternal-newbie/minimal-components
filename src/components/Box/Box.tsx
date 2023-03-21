import React from 'react';
import { classNames } from '~utils/ClassNames';
import './Box.scss';

type LayoutDirection = 'col' | 'row';
type LayoutWrap = 'wp' | 'no-wp' | 'wp-rev';
type LayoutAlignItems = 'al-it-st' | 'al-it-end' | 'al-it-ctr' | 'al-it-bl' | 'al-it-str';
type LayoutAlignContent = 'al-ct-st' | 'al-ct-end' | 'al-ct-ctr' | 'al-ct-sb' | 'al-ct-sa' | 'al-ct-str';
type LayoutJustifyContent = 'js-ct-st' | 'js-ct-end' | 'js-ct-sb' | 'js-ct-ctr' | 'js-ct-sa';

export interface IBox extends React.HTMLProps<HTMLDivElement> {
    reverse?: boolean;
    wrap?: LayoutWrap;
    direction?: LayoutDirection;
    alignItems?: LayoutAlignItems;
    alignContent?: LayoutAlignContent;
    justifyContent?: LayoutJustifyContent;
}

const Box = (props: IBox) => {
    const {
        children,
        className,
        reverse,
        wrap = 'wp',
        direction = 'row',
        alignItems = 'al-it-ctr',
        alignContent = 'al-ct-st',
        justifyContent = 'js-ct-sa',
        ...rest
    } = props;

    const layout = [direction, wrap, alignItems, alignContent, justifyContent, reverse ? 'rev' : ''];
    const baseClassName = classNames('box', className, ...layout);

    return (
        <div {...rest} className={baseClassName}>
            {children}
        </div>
    );
};

export default Box;
