import AntdButton from 'antd/lib/button';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import classnames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

const Button = ({ showBorder, color, style, ...rest }) => {
  return (
    <AntdButton
      {...rest}
      className={classnames(
        rest.className,
        {
          [styles.showBorder]: showBorder,
        },
        styles[color]
      )}
      style={{
        color: color,
        boxShadow: 'none',
        ...style,
      }}
    />
  );
};

export default Button;
