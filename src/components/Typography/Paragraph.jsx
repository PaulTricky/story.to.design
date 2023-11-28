import Typography from 'antd/lib/typography';
import { ParagraphProps as AntdParagraphProps } from 'antd/lib/typography/Paragraph';
import classnames from 'classnames';
import styles from './Typography.module.scss';

export const Paragraph = ({ className, color, primary, type, ...rest }) => {
  return (
    <Typography.Paragraph
      className={classnames(
        {
          [styles.colorPrimary]: primary,
          [styles.secondary]: type === 'secondary',
        },
        className
      )}
      {...rest}
    />
  );
};
