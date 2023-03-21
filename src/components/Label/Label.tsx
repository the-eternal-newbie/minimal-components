import React, { FC, ReactNode } from 'react';
import { classNames } from '~utils/ClassNames';

import './Label.scss';

type LabelTypes = 'paragraph' | 'header-1' | 'header-2' | 'header-3' | 'header-4' | 'header-5' | 'header-6';

export interface ILabel extends React.HTMLProps<HTMLHeadingElement> {
    children: ReactNode;
    type?: LabelTypes;
    textStyle?: 'primary' | 'secondary';
    darkMode?: boolean;
}

const LabelComponents = {
    paragraph: (props: React.HTMLProps<HTMLHeadingElement>) => <p {...props} />,
    'header-1': (props: React.HTMLProps<HTMLHeadingElement>) => <h1 {...props} />,
    'header-2': (props: React.HTMLProps<HTMLHeadingElement>) => <h2 {...props} />,
    'header-3': (props: React.HTMLProps<HTMLHeadingElement>) => <h3 {...props} />,
    'header-4': (props: React.HTMLProps<HTMLHeadingElement>) => <h4 {...props} />,
    'header-5': (props: React.HTMLProps<HTMLHeadingElement>) => <h5 {...props} />,
    'header-6': (props: React.HTMLProps<HTMLHeadingElement>) => <h6 {...props} />,
};

const Label: FC<ILabel> = (props: ILabel) => {
    const { children, className, darkMode, type = 'paragraph', textStyle = 'primary', ...rest } = props;

    const Component = LabelComponents[type];
    const colorScheme = darkMode ? 'dark' : 'light';
    const baseClassName = classNames('label', type, textStyle, colorScheme, className);

    return (
        <Component {...rest} className={baseClassName}>
            {children}
        </Component>
    );
};

export default Label;
