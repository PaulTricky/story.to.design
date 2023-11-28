import { Typography } from '@/components/Typography';

import Carousel from 'antd/lib/carousel';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Space from 'antd/lib/space';
import Button from '@/components/Button/Button';
import IconChevronLeft from '@/components/Icon/ChevronLeft';
import IconChevronRight from '@/components/Icon/ChevronRight';
import IconLogo from '@/components/Icon/LogoOnly';
import Image from 'next/image';
import React from 'react';
import CarouselContent from './CarouselContent';
import styles from './PublicLayout.module.scss';

const PublicLayout = ({ children, slideShow = true, hideLogo = false }) => {
  const renderMainContent = () => {
    return (
      <div className={styles.zalowMedia}>
        <div className={styles.inner}>
          <Image
            quality={75}
            className={styles.gradient}
            width={500}
            height={500}
            alt='background'
            loading='eager'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkmAkAAJ8AmzsOXcYAAAAASUVORK5CYII='
            src={'/assets/onboarding-bg.png'}
          />
          <div className={styles.logoWhite}>
            <img alt='zalow' src={'/assets/zalow.png'} width='102px' />
            <Typography.Title
              color='#fff'
              style={{
                letterSpacing: '2px',
                fontSize: '102px',
              }}
            >
              BlackBird
            </Typography.Title>
          </div>
          <div className={styles.content}>
            <div className={styles.carousel}>
              <Carousel
                arrows
                className={styles.background}
                prevArrow={
                  <Button type='text'>
                    <IconChevronLeft />
                  </Button>
                }
                nextArrow={
                  <Button type='text'>
                    <IconChevronRight />
                  </Button>
                }
              >
                <CarouselContent
                  content={`Zalow made it simple and easy for me to get started freelancing..`}
                  author={'Sally Freelancer'}
                  email={'@Sally'}
                />
                <CarouselContent
                  content={`I've now got access to the best security professionals whenever I need them.`}
                  author={'Joe Client'}
                  email={'@joe'}
                />
                <CarouselContent
                  content={`Zalow allows me to leverage my existing experience while also exploring opportunities to expand my capabilities.`}
                  author={'Bob Freelancer'}
                  email={'@Bob'}
                />
                <CarouselContent
                  content={`Zalow makes it easy for me to create projects and then matches the best freelancers available that meet my needs.`}
                  author={'Kathy Client'}
                  email={'@Kathy'}
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{renderMainContent()}</>;
};

export default PublicLayout;
