const Footer = () => {
  return (
    <div className=' bg-rose-700 mt-20 pt-16 text-white'>
      <div className={'container'}>
        <div className='grid grid-cols-1 gap-y-4 lg:flex justify-between mb-10'>
          <div className='lg:w-2/5'>
            <a href='#'>
              <h1
                className={'text-3xl  font-bold block pb-4 leading-tight bg-gradient-to-r from-primary to-rose-300   bg-clip-text text-transparent'}>
                {'<Kadapai/>'}
              </h1>
            </a>
            <p className={'text-justify lg:w-2/3 text-sm'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quam obcaecati dicta quas perferendis
            </p>
          </div>
          <div className='lg:w-1/5'>
            <h1 className={'text-rose-300 font-semibold  text-xl'}>Services</h1>
            <ul className='text-sm font-semibold grid items-center gap-y-4 mt-4'>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  I Branding
                </a>
              </li>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  GO UMKM
                </a>
              </li>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  GOOD COPRO
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:w-1/5'>
            <h1 className={'text-rose-300 font-semibold  text-xl'}>Ai Creative</h1>
            <ul className='text-sm font-semibold grid items-center gap-y-4 mt-4'>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  About
                </a>
              </li>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:w-1/5'>
            <h1 className={'text-rose-300 font-semibold text-xl'}>Social Media</h1>
            <ul className='text-sm font-semibold grid items-center gap-y-4 mt-4'>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  Youtube
                </a>
              </li>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  Instagram
                </a>
              </li>
              <li>
                <a href='#' className={'hover:text-rose-300'}>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={'border-t grid place-content-center py-4'}>Made with 💖 code by pai project</div>
      </div>
    </div>
  );
};
export default Footer;
