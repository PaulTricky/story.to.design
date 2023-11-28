import Typography from 'antd/lib/typography';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';

import { useCallback, useState } from 'react';

const ExpandText = ({
  children,
  color = 'var(--gray-600-color)',
  rows = 3,
  expandable = true,
  toggle,
}) => {
  const [expand, setExpand] = useState(false);
  const [render, setRender] = useState(0);

  // console.log(expand, render, 'expand');

  const onExpand = (e) => {
    toggle && toggle(true);
    setExpand(true);
    setRender(!expand ? render + 0 : render + 1);
  };

  const onCollapse = (e) => {
    toggle && toggle(false);
    setExpand(false);
    setRender(!expand ? render + 0 : render + 1);
  };

  const renderParagraph = () => {
    return (
      <div key={render}>
        <Typography.Paragraph
          ellipsis={{
            rows: rows,
            expandable: expandable,
            onExpand: onExpand,
            symbol: 'Read More',
          }}
          className='mb-0'
          color={color}
          style={{
            color: color,
          }}
        >
          {children}
        </Typography.Paragraph>
      </div>
    );
  };

  return (
    <div>
      {renderParagraph()}
      {expand && (
        <Typography
          onClick={onCollapse}
          className='clickable'
          style={{
            color: 'var(--main-primary-color)',
            marginTop: '10px',
          }}
        >
          {'Show Less'}
        </Typography>
      )}
    </div>
  );
};

export default ExpandText;
