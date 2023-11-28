import Typography from 'antd/lib/typography';
import { TitleProps as AntdTitleProps } from 'antd/lib/typography/Title';
import classnames from 'classnames';
import styles from './Typography.module.scss';

export const Title = ({ className, color, primary, style, ...rest }) => {
  return (
    <Typography.Title
      className={classnames({ [styles.colorPrimary]: primary }, className)}
      style={color ? { ...style, color: color } : style}
      {...rest}
    />
  );
};
