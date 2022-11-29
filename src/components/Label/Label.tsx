import React, { FC, ReactNode } from 'react';
import { classNames } from '~utils/ClassNames';

import './Label.scss';

export interface ILabel extends React.HTMLProps<HTMLHeadingElement> {
    children: ReactNode;
    textStyle?: 'primary' | 'secondary';
}

const labelClass = 'label';

const Header1: FC<ILabel> = ({ textStyle = 'primary', ...props }: ILabel) => (
    <h1 {...props} className={classNames(labelClass, 'header1', textStyle, props.className)}>
        {props.children}
    </h1>
);

const Header2: FC<ILabel> = ({ textStyle = 'primary', ...props }: ILabel) => (
    <h2 {...props} className={classNames(labelClass, 'header2', textStyle, props.className)}>
        {props.children}
    </h2>
);

const Header3: FC<ILabel> = ({ textStyle = 'primary', ...props }: ILabel) => (
    <h3 {...props} className={classNames(labelClass, 'header3', textStyle, props.className)}>
        {props.children}
    </h3>
);

const Header4: FC<ILabel> = ({ textStyle = 'primary', ...props }: ILabel) => (
    <h4 {...props} className={classNames(labelClass, 'header4', textStyle, props.className)}>
        {props.children}
    </h4>
);

const Header5: FC<ILabel> = ({ textStyle = 'primary', ...props }: ILabel) => (
    <h5 {...props} className={classNames(labelClass, 'header5', textStyle, props.className)}>
        {props.children}
    </h5>
);

const Header6: FC<ILabel> = ({ textStyle = 'primary', ...props }: ILabel) => (
    <h6 {...props} className={classNames(labelClass, 'header6', textStyle, props.className)}>
        {props.children}
    </h6>
);

const Label: FC<ILabel> = ({ textStyle = 'primary', ...props }: ILabel) => (
    <p {...props} className={classNames(labelClass, 'paragraph', textStyle, props.className)}>
        {props.children}
    </p>
);

export { Header1, Header2, Header3, Header4, Header5, Header6, Label };
