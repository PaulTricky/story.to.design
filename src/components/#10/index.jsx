import React from 'react';
import Col from 'antd/lib/col';
import Progress from 'antd/lib/progress';
import Row from 'antd/lib/row';
import styles from './MyProfile.module.scss';
import { Typography } from 'antd/lib';
import { Tabs } from 'antd';
import classNames from 'classnames';

const RecommendationsRating = ({
  ratingSummaryCompany = {
    total: 36,
    total_communication: 129,
    total_professionalism: 140,
    total_delivered_work_on_time: 24,
    total_delivered_work_on_budget: 19,
    total_hireable: 127,
    total_payment_on_time: 0,
    total_clarity: 0,
    total_referable: 0,
  },
  role = 'freelancer',
}) => {
  const ratingByRole = {
    client: [
      {
        key: 'total_payment_on_time',
        label: 'On Time',
        type: 'percent',
      },
      {
        key: 'total_clarity',
        label: 'Clear Requirements',
        type: 'percent',
      },
      {
        key: 'total_communication',
        label: 'Communication',
        type: 'points',
      },
      {
        key: 'total_professionalism',
        label: 'Professionalism',
        type: 'points',
      },
      {
        key: 'total_referable',
        label: 'Referable',
        type: 'points',
      },
    ],
    freelancer: [
      {
        key: 'total_delivered_work_on_time',
        label: 'On Time',
        type: 'percent',
      },
      {
        key: 'total_delivered_work_on_budget',
        label: 'On Budget',
        type: 'percent',
      },
      {
        key: 'total_communication',
        label: 'Communication',
        type: 'points',
      },
      {
        key: 'total_professionalism',
        label: 'Professionalism',
        type: 'points',
      },
      {
        key: 'total_hireable',
        label: 'Hireable',
        type: 'points',
      },
    ],
  };

  const renderRatingRow = (row) => {
    const valueByKey = ratingSummaryCompany[row.key];
    const isPercent = row.type === 'percent';
    const total = isPercent
      ? ratingSummaryCompany?.total
      : ratingSummaryCompany?.total * 5;
    const steps = isPercent ? 0 : 5;
    const value = (valueByKey / total) * 100 || 0;
    const isMobileOnly = false;
    return (
      <Row>
        <Col flex={isMobileOnly ? '100%' : '150px'}>
          <Typography className='fw-500' children={row.label} />
        </Col>
        <Col flex={isMobileOnly ? '85%' : '400px'} className='w-full relative'>
          <Progress
            strokeColor={'var(--main-primary-color)'}
            percent={value}
            size='small'
            steps={steps}
            showInfo={false}
          />
          <div className={styles.ratingPercent}>
            <Typography
              className='bold'
              children={
                isPercent
                  ? `${Math.round(value)}%`
                  : ((value * 5) / 100).toFixed(1)
              }
            />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <div className={styles.rating}>
      {ratingSummaryCompany &&
        role &&
        ratingByRole[role]?.map((row) => renderRatingRow(row))}
    </div>
  );
};

const IndexPage = () => {
  const items = [
    {
      key: '1',
      label: `Rating (10)`,
      children: <RecommendationsRating />,
    },
    {
      key: '2',
      label: `Reviews (2)`,
      children: <></>,
    },
  ];
  const isMobileOnly = false;
  return (
    <div className={styles.profile}>
      <div className='flex-column gap-12'>
        <div
          style={{
            borderRadius: '1rem',
            padding: '1rem 1.5rem',
            border: '1px solid rgb(224, 213, 213)',
          }}
          className='flex-column gap-12'
        >
          <Typography
            className={classNames(
              !isMobileOnly ? styles.resumeTitle : styles.resumeMobileTitle,
              'mb-0'
            )}
            children={'Recommendation'}
          />
          <Tabs className='recommendation-tabs' items={items} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
