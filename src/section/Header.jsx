import { IconBrandTelegram, IconMenu2 } from '@tabler/icons-react';
import Button from '../components/Button';
import { useState } from 'react';
import { IconX } from '@tabler/icons-react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='fixed z-10 p-5  top-0 w-full h-auto bg-rose-100/10 shadow left-0 right-0 backdrop-blur-xl mx-auto'>
      <div className={'container'}>
        <div className={'flex justify-between items-center h-full'}>
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
                <a
                  className={'py-3 px-5 rounded transition hover:text-white  hover:bg-rose-500 font-semibold'}
                  href='#'>
                  About
                </a>
              </li>
              <li>
                <a className={'py-3 px-5 rounded transition hover:text-white hover:bg-rose-500 font-semibold'} href='#'>
                  Contact
                </a>
              </li>
              <li>
                <a
                  className={'py-3 px-5 rounded transition hover:text-white hover:bg-rose-500 font-semibold'}
                  href='#testimoni'>
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  className={'py-3 px-5 rounded transition hover:text-white hover:bg-rose-500 font-semibold'}
                  href='#blog'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className={'lg:w-36 flex gap-2 justify-end'}>
            <Button className={'rounded-lg px-5 '}>
              Hire Us
              <IconBrandTelegram />
            </Button>
            <Button className='lg:hidden' onClick={() => setNavOpen((e) => !e)}>
              {navOpen ? <IconX /> : <IconMenu2 />}
            </Button>
          </div>
        </div>
      </div>
      {navOpen ? (
        <div className='lg:hidden mt-4 pt-4'>
          <ul className={'grid place-items-center'}>
            <li className={'w-full text-center py-1'}>
              <a className={'block py-2 rounded transition hover:text-white  hover:bg-rose-500 font-semibold'} href='#'>
                About
              </a>
            </li>
            <li className={'w-full text-center py-1'}>
              <a className={'block py-2 rounded transition hover:text-white hover:bg-rose-500 font-semibold'} href='#'>
                Contact
              </a>
            </li>
            <li className={'w-full text-center py-1'}>
              <a
                className={'block py-2 rounded transition hover:text-white hover:bg-rose-500 font-semibold'}
                href='#testimoni'>
                Testimoni
              </a>
            </li>
            <li className={'w-full text-center py-1'}>
              <a
                className={'block py-2 rounded transition hover:text-white hover:bg-rose-500 font-semibold'}
                href='#blog'>
                Blog
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};
export default Header;
