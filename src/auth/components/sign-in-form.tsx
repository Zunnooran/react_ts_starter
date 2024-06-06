import { Link, useNavigate } from 'react-router-dom';

import { Alert, Button, Form, Input } from 'antd';
import { ISignInForm } from 'auth/core/_models';
import useSignIn from 'auth/core/hooks/use-sign-in';
import { AxiosError } from 'axios';

import LockIcon from 'assets/icons/lock.svg?react';
import MailIcon from 'assets/icons/mail.svg?react';

function SignInForm() {
  const { error, isError, isPending, isLoadingVerifyToken, mutate } = useSignIn();
  const errorMessage = error instanceof AxiosError ? error?.response?.data?.message : '';
  const navigate = useNavigate();

  const onFinish = (values: ISignInForm) => {
    mutate(values);
  };

  const redirectToConfirmEmail = () => {
    navigate('/auth/confirm-email');
  };

  return (
    <div>
      <div className='w-80 md:w-96'>
        <h1 className='text-center text-2xl md:text-3xl pb-5 md:pb-12 font-semibold'>Sign In</h1>
        {isError && errorMessage && <Alert type='error' showIcon message={errorMessage} closable />}
        {isError && errorMessage && errorMessage === 'Please Verify Your Email!' && redirectToConfirmEmail()}
        <br />
        <Form name='basic' onFinish={onFinish} initialValues={{ email: '', password: '' }} autoComplete='off'>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
            name='email'
          >
            <Input prefix={<MailIcon />} className='gap-2' type='email' placeholder='Email Address' />
          </Form.Item>
          <Form.Item
            name='password'
            className='m-0 mb-1'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password prefix={<LockIcon />} className='gap-2' type='password' placeholder='Password' />
          </Form.Item>
          <Form.Item className='flex items-end justify-end m-0 mb-2'>
            <Link to='/auth/forgot-password'>
              <Button type='text' htmlType='button'>
                Forgot Password?
              </Button>
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              loading={isPending || isLoadingVerifyToken}
              type='primary'
              className='h-16 tracking-wider hover:bg-secondary'
              htmlType='submit'
              block
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to='/auth/sign-up'>
              <Button type='text' className='h-16 bg-primary' block>
                Register
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignInForm;
