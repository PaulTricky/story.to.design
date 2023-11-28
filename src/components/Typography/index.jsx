import AntdTypography from 'antd/lib/typography';

import { TextProps as AntdTextProps } from 'antd/lib/typography/Text';
import classnames from 'classnames';
import { Link } from './Link';
import { Paragraph } from './Paragraph';
import { Title } from './Title';
import styles from './Typography.module.scss';

export const Typography = ({ className, primary, color, ...rest }) => {
  return (
    <AntdTypography.Text
      style={{
        color: color,
      }}
      className={classnames({ [styles.colorPrimary]: primary }, className)}
      {...rest}
    />
  );
};

Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Link = Link;
