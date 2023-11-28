import { Typography } from '@/components/Typography';
import Avatar from 'antd/lib/avatar';
import List from 'antd/lib/list';
import Space from 'antd/lib/space';
import styles from './PublicLayout.module.scss';

const CarouselContent = ({ content, author, email }) => {
  return (
    <Space size={8} direction='vertical'>
      <Typography.Title
        level={3}
        color='var(--white-color)'
        className={styles.onboardingContent}
      >
        {content}
      </Typography.Title>
      <List
        itemLayout='horizontal'
        dataSource={[1]}
        renderItem={(item, index) => (
          <List.Item className={styles.listItem}>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  {author?.charAt(0) ?? ''}
                </Avatar>
              }
              title={
                <Typography className='normal' color='var(--white-color)'>
                  {author}
                </Typography>
              }
              description={
                <Typography color='var(--white-color)'>{email}</Typography>
              }
            />
          </List.Item>
        )}
      />
    </Space>
  );
};

export default CarouselContent;
