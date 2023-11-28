import Typography from 'antd/lib/typography';
import { LinkProps as AntdLinkProps } from 'antd/lib/typography/Link';
import classnames from 'classnames';
import React from 'react';
import styles from './Typography.module.scss';

export const Link = ({ primary, color, className, ...rest }) => {
  return (
    <Typography.Link
      className={classnames({ [styles.colorPrimary]: primary }, className)}
      {...rest}
      style={color ? { color: color } : {}}
    />
  );
};
