import { IconBrandTelegram } from '@tabler/icons-react';
import Button from '../components/Button';

const Header = () => {
  return (
    <header className='fixed z-10 top-0 w-full h-20 bg-rose-100/10 shadow left-0 right-0 backdrop-blur-xl mx-auto'>
      <div className={'container flex justify-between items-center h-full '}>
        <div className={'font-bold lg:w-36'}>
          <a href='#'>
            <h2
              className={
                'text-2xl lg:text-3xl text-primary leading-tight from-primary to-rose-300  bg-gradient-to-r bg-clip-text text-transparent'
              }>
              {'<Kadapai/>'}
            </h2>
          </a>
        </div>
        <div className={'h-full hidden lg:grid '}>
          <ul className={'flex justify-center items-center gap-x-14'}>
            <li>
              <a className={'py-3 px-5 rounded transition hover:text-white  hover:bg-rose-500 font-semibold'} href='#'>
                About
              </a>
            </li>
            <li>
              <a className={'py-3 px-5 rounded transition hover:text-white hover:bg-rose-500 font-semibold'} href='#'>
                Contact
              </a>
            </li>
            <li>
              <a className={'py-3 px-5 rounded transition hover:text-white hover:bg-rose-500 font-semibold'} href='#'>
                Testimoni
              </a>
            </li>
            <li>
              <a className={'py-3 px-5 rounded transition hover:text-white hover:bg-rose-500 font-semibold'} href='#'>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className={'lg:w-36 flex justify-end'}>
          <Button className={'rounded-lg px-5 '}>
            Hire Us
            <IconBrandTelegram />
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
