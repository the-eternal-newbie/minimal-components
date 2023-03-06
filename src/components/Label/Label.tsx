import React, { FC, ReactNode } from 'react';
import { classNames } from '~utils/ClassNames';

import './Label.scss';

type LabelTypes = 'paragraph' | 'header-1' | 'header-2' | 'header-3' | 'header-4' | 'header-5' | 'header-6';

export interface ILabel extends React.HTMLProps<HTMLHeadingElement> {
    children: ReactNode;
    type?: LabelTypes;
    textStyle?: 'primary' | 'secondary';
}

const LabelComponents = {
    paragraph: (props: ILabel) => <p {...props} />,
    'header-1': (props: ILabel) => <h1 {...props} />,
    'header-2': (props: ILabel) => <h2 {...props} />,
    'header-3': (props: ILabel) => <h3 {...props} />,
    'header-4': (props: ILabel) => <h4 {...props} />,
    'header-5': (props: ILabel) => <h5 {...props} />,
    'header-6': (props: ILabel) => <h6 {...props} />,
};

const Label: FC<ILabel> = (props: ILabel) => {
    const { className, type = 'paragraph', textStyle = 'primary' } = props;

    const Component = LabelComponents[type];
    const baseClassName = classNames('label', type, textStyle, className);

    return <Component className={baseClassName}>{props.children}</Component>;
};

export default Label;
