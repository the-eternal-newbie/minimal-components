import React, { FC } from 'react';
import { classNames } from '~utils/ClassNames';
import './Button.scss';

type ButtonTypes = 'text' | 'tonal' | 'filled' | 'outlined' | 'elevated';

export interface IButton extends React.HTMLProps<HTMLDivElement> {
    darkMode?: boolean;
    buttonType?: ButtonTypes;
    style?: React.CSSProperties;
}

const Button: FC<IButton> = (props: IButton) => {
    const { children, className, darkMode, buttonType = 'filled' } = props;
    const baseClassName = classNames('button', buttonType, className, darkMode ? 'dark' : '');

    return (
        <div {...props} className={baseClassName}>
            {children}
        </div>
    );
};

export default Button;
