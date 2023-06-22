import { IconBrandTelegram, IconMenu2 } from '@tabler/icons-react';
import Button from '../components/Button';
import { useState } from 'react';
import { IconX } from '@tabler/icons-react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    { id: 1, name: 'About', href: '#' },
    { id: 2, name: 'Contact', href: '#' },
    { id: 3, name: 'Testimoni', href: '#testimoni' },
    { id: 4, name: 'Blog', href: '#blog' },
  ];
  return (
    <header className='fixed z-10 py-5 top-0 w-full h-auto bg-rose-100/10 shadow left-0 right-0 backdrop-blur-xl mx-auto'>
      <div className={'container flex justify-between items-center h-full relative'}>
        <div className={'font-bold lg:w-36'}>
          <a href='#'>
            <h2
              className={
                'text-2xl md:text-3xl lg:text-3xl text-primary leading-tight from-primary to-rose-300  bg-gradient-to-r bg-clip-text text-transparent'
              }>
              {'<Kadapai/>'}
            </h2>
          </a>
        </div>
        <ul
          className={`${
            navOpen ? 'top-14 slide-in-from-top' : '-top-96 slide-in-from-top'
          } absolute animate-in p-4 md:p-0 duration-700 md:duration-0 w-full rounded-xl bg-white shadow-xl md:shadow-none md:z-auto h-auto  md:bg-transparent lg:bg-transparent  md:static md:flex md:justify-center md:items-center md:gap-x-8 lg:gap-x-14 first-letter`}>
          {links.map((link) => (
            <li key={link.id} className={'text-center my-3 px-4 md:px-0 md:my-0'}>
              <a
                className={'p-2 md:py-3 md:px-5 rounded transition hover:text-white hover:bg-rose-500 font-semibold'}
                href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
          <Button className={'md:hidden w-full'}>
            Hire Us
            <IconBrandTelegram />
          </Button>
        </ul>
        <button
          className='absolute right-0 md:hidden cursor-pointer bg-primary p-2 rounded-lg text-white'
          onClick={() => setNavOpen((e) => !e)}>
          {navOpen ? <IconX /> : <IconMenu2 />}
        </button>

        <div className={'lg:w-36 flex gap-2 justify-end'}>
          <Button className={'hidden md:inline-flex rounded-lg px-5'}>
            Hire Us
            <IconBrandTelegram />
          </Button>
        </div>
      </div>
      {/* {navOpen ? (
        <div className={'absolute -z-50 top-15 w-full lg:hidden mt-4 pt-4 animate-in slide-in-from-top duration-1000'}>
          <ul className={'grid place-items-center'}>
            {links.map((link) => (
              <li key={link.id} className={'w-full text-center py-1'}>
                <a className={'block py-2 rounded transition hover:text-white  hover:bg-rose-500 font-semibold'} href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
            <Button className={'lg:hidden rounded-lg px-5 '}>
              Hire Us
              <IconBrandTelegram />
            </Button>
          </ul>
        </div>
      ) : null} */}
    </header>
  );
};
export default Header;
