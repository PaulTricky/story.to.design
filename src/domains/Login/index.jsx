import Avatar from 'antd/lib/avatar';
import ConfigProvider from 'antd/lib/config-provider';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Space from 'antd/lib/space';

import IconGithub from '@/components/Icon/Github';
import IconGoogle from '@/components/Icon/Google';
import IconLogoOnly from '@/components/Icon/LogoOnly';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './Login.module.scss';
import { Button, Typography } from 'antd';

const LoginPage = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            borderRadius: 100,
            lineHeight: 2.3,
          },
        },
      }}
    >
      <Form
        name='basic'
        className={styles.login}
        initialValues={{ remember: true }}
        autoComplete='off'
      >
        <Space direction='vertical' size={32} className='w-full'>
          <Space
            direction='vertical'
            align='center'
            size={12}
            className={styles.title}
          >
            <Avatar size={60} className={styles.logo}>
              <IconLogoOnly />
            </Avatar>
            <Typography.Title
              color='var(--gray-900-color)'
              level={2}
              className='m-0'
            >
              Welcome to Zalow
            </Typography.Title>
            <Typography
              color='var(--gray-600-color)'
              className={classnames(styles.text, 'medium')}
            >
              New to Zalow?{' '}
              <Link
                prefetch={false}
                href={''}
                style={{ textDecoration: 'none' }}
              >
                <Typography className='bold' color='var(--red-100-color)'>
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </Space>

          <Space
            direction='vertical'
            size={24}
            className={classnames(styles.form, 'w-full')}
          >
            <Space direction='vertical' size={6} className='w-full'>
              <Typography color='var(--grey-700-color)'>
                Email address*
              </Typography>
              <Form.Item
                name='email'
                rules={[
                  { required: true },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address.',
                  },
                ]}
              >
                <Input className={styles.input} placeholder='Enter email' />
              </Form.Item>
            </Space>
            <Space direction='vertical' size={6} className='w-full'>
              <Typography color='var(--grey-700-color)'>Password*</Typography>
              <Form.Item name='password' rules={[{ required: true }]}>
                <Input
                  type='password'
                  className={styles.inputPassword}
                  placeholder='Enter a password'
                />
              </Form.Item>
            </Space>
            <Space className={classnames('w-full', styles.btnWapper)}>
              <Button
                showBorder
                block
                type='default'
                className={classnames(styles.button, 'w-full')}
                icon={<IconGoogle />}
              ></Button>
              <Button
                showBorder
                block
                type='default'
                className={classnames(styles.button, 'w-full')}
                icon={<IconGithub />}
              ></Button>
              <Button
                block
                type='primary'
                htmlType='submit'
                className={classnames(styles.button, 'w-full')}
              >
                Login
              </Button>
            </Space>
            <Typography
              color='var(--gray-600-color)'
              className={classnames(styles.text, 'medium')}
            >
              Forgot your password?{' '}
              <Link href={''} style={{ textDecoration: 'none' }}>
                <Typography
                  className='bold clickable'
                  color='var(--red-100-color)'
                >
                  Reset It
                </Typography>
              </Link>
            </Typography>
          </Space>
        </Space>
      </Form>
    </ConfigProvider>
  );
};

export default LoginPage;
