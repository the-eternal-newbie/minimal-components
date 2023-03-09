import React, { FC } from 'react';
import { classNames } from '~utils/ClassNames';
import './Button.scss';

type ButtonTypes = 'text' | 'flat' | 'filled' | 'outlined' | 'elevated';

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
    buttonType?: ButtonTypes;
    darkMode?: boolean;
    style?: React.CSSProperties;
    theme?: 'primary' | 'secondary';
}

const Button: FC<IButton> = (props: IButton) => {
    const { children, className, darkMode, buttonType = 'filled', theme = 'primary', ...rest } = props;

    const colorScheme = darkMode ? 'dark' : 'light';
    const baseClassName = classNames('button', buttonType, colorScheme, theme, className);

    return (
        <button {...rest} type="button" role="button" className={baseClassName}>
            {children}
        </button>
    );
};

export default Button;
