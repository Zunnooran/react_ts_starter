import Container from 'components/core-ui/container/container';

import LoginPageLeftSide from './components/login-page-left-side';
import SignInForm from './components/sign-in-form';

function SignIn() {
  return (
    <Container>
      <section className='px-7 flex flex-col md:flex-row font-poppins pt-5 md:pt-0 md:justify-center md:gap-10 lg:gap-20 xl:gap-28 items-center w-full h-screen relative z-10'>
        <div className='w-1/2'>
          <LoginPageLeftSide />
        </div>
        <div className='hidden md:block h-96 bg-gray-100 w-0.5' />
        <div className='w-'>
          <SignInForm />
        </div>
        {/* <img
          className='hidden md:block absolute -z-10 bottom-0 right-6'
          src='https://resilio-bucket.s3.amazonaws.com/assets/images/pot.svg'
          alt='background'
        /> */}
      </section>
    </Container>
  );
}

export default SignIn;
