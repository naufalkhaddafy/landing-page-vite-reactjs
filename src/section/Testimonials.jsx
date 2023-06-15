import { IconBrandTelegram, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import CardTestimonials from '../components/Card/CardTestimonials';
import CardService from '../components/Card/CardService';
import Button from '../components/Button';
const Testimonial = () => {
  return (
    <section className={'bg-primary mt-16 py-16 text-white'}>
      <div className={'container'}>
        <div className='grid lg:flex gap-y-6 gap-x-10'>
          <div className={' bg-rose-700 rounded-2xl py-8 px-4 text-center shadow-xl grid place-items-center'}>
            <div className={'mb-4'}>
              <p className={'block'}>Client</p> Testimonials
            </div>
            <div className={'flex justify-center gap-x-2'}>
              <IconChevronLeft
                size={36} // set custom `width` and `height`
                stroke={3} // set `stroke-width`
              />
              <IconChevronRight
                size={36} // set custom `width` and `height`
                stroke={3} // set `stroke-width`
              />
            </div>
          </div>
          <div className='flex flex-nowrap gap-x-10'>
            <div className='overflow-x-scrollbar'>
              <CardTestimonials>
                <CardTestimonials.Title>
                  <div className={'basis-1/4'}>
                    <div className={'grid place-items-center '}>
                      <img
                        className={'rounded-full shadow h-16 w-16'}
                        src={'https://source.unsplash.com/360x250?person&male'}
                      />
                    </div>
                  </div>
                  <div className={'basis-3/4'}>
                    <h1 className={'text-black  block text-sm '}>Khalid bin Walid</h1>
                    <p className={'text-gray-400  block text-sm'}>CEO & Founder Kentang Kreatif</p>
                    <p className={'text-gray-400  block text-sm'}>Branding Services</p>
                  </div>
                </CardTestimonials.Title>
                <CardTestimonials.Body>
                  <div className={'pt-4'}>
                    <p className={'text-sm '}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aut maxime excepturi est? Lorem,
                      ipsum dolor sit amet consectetur adipisicing elit. Ex aut maxime excepturi est?
                    </p>
                  </div>
                </CardTestimonials.Body>
              </CardTestimonials>
            </div>
          </div>
        </div>
        <div className={'text-center mt-14'}>
          <Button className={'border font-normal'}>
            Testimoni Lainnya
            <IconBrandTelegram />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
