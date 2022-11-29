import React, { FC } from 'react';
import { classNames } from '~utils/ClassNames';

import './Label.scss';

type labelTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
const labelClasses = {
    h1: 'header1',
    h2: 'header2',
    h3: 'header3',
    h4: 'header4',
    h5: 'header5',
    h6: 'header6',
    p: 'paragraph',
};

export interface ILabel extends React.HTMLProps<HTMLLabelElement> {
    children: string;
    type?: labelTypes;
    textStyle?: 'primary' | 'secondary';
}

const Label: FC<ILabel> = (props: ILabel) => {
    const { type = 'p', textStyle = 'primary', children, className: _className } = props;
    const className = classNames('label', textStyle, labelClasses[type], _className);

    return React.createElement(type, { className }, children);
};

export default Label;
