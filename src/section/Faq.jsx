import { IconPlus } from '@tabler/icons-react';
import { useEffect } from 'react';
import { Collapse, initTE, Ripple } from 'tw-elements';
import { faq } from '../Data.jsx';

const Faq = () => {
  useEffect(() => {
    initTE({ Collapse, Ripple });
  }, []);

  return (
    <section className={' py-16'}>
      <div className={'container'}>
        <div className={'flex justify-center'}>
          <h1 className={'text-primary text-3xl font-bold'}>FAQ</h1>
        </div>
        <div className={'grid grid-cols-1 gap-y-6 lg:flex gap-x-20 mt-10'}>
          <div className={'lg:w-1/3'}>
            <img src={'/ip.png'} alt='' className={'w-80 h-[480px] rounded-lg'} />
          </div>
          <div className={'lg:w-2/3 grid items-center '}>
            <div className={'grid gap-y-6'}>
              {faq.map((faq) => {
                return (
                  <div key={faq.id}>
                    <button
                      className='w-full inline-flex gap-x-2 rounded-lg bg-primary px-6 py-4 text-md leading-normal text-left text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] '
                      type='button'
                      data-te-collapse-init=''
                      data-te-ripple-init=''
                      data-te-ripple-color='light'
                      data-te-target={'#collapse' + faq.id}
                      aria-expanded='false'
                      aria-controls='collapseExample'>
                      <i>
                        <IconPlus size={25} stroke={3} />
                      </i>
                      {faq.title}
                    </button>
                    <div className='!visible hidden' id={'collapse' + faq.id} data-te-collapse-item>
                      <div className=' text-black block rounded-lg bg-rose-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] '>
                        {faq.text}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
