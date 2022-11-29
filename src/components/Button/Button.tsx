import React, { FC } from 'react';
import { classNames } from '~utils/ClassNames';
import './Button.scss';

enum ButtonTypes {
    TEXT = 'text',
    TONAL = 'tonal',
    FILLED = 'filled',
    OUTLINED = 'outlined',
    ELEVATED = 'elevated',
}

export interface IButton extends React.HTMLProps<HTMLDivElement> {
    width?: string;
    height?: string;
    loading?: boolean;
    disabled?: boolean;
    darkMode?: boolean;
    buttonType?: ButtonTypes;
    style?: React.CSSProperties;
}

const Button: FC<IButton> = (props: IButton) => {
    const {
        children,
        className,
        loading,
        disabled,
        darkMode,
        width,
        height,
        style,
        buttonType = ButtonTypes.FILLED,
    } = props;

    const disabledClassName = disabled ? 'disabled' : '';
    const darkClassName = darkMode ? 'dark' : '';

    const overrideStyles = { width, height, ...style } as React.CSSProperties;
    const baseClassName = classNames('button', buttonType.toString(), className, disabledClassName, darkClassName);

    return (
        <div {...props} className={baseClassName} style={overrideStyles}>
            {loading ? <div></div> : children}
        </div>
    );
};

export default Button;
