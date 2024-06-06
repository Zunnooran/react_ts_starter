import LoginPageIcon from 'assets/icons/Login-page-icon.svg?react';

function LoginPageLeftSide() {
  return (
    <div className='md:w-120 mb-3 md:mb-24'>
      <div className='h-full w-2/4'>
        <LoginPageIcon className='h-full w-full' />
      </div>
      <h1 className='text-center md:text-left text-1xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold pt-5 lg:pt-10 leading-7 md:leading-10 xl:leading-15'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, voluptates.
        <span className='text-primary'>good.</span>
      </h1>
      <p className='text-center md:text-left text-darkgray md:text-lg pt-5'>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default LoginPageLeftSide;
