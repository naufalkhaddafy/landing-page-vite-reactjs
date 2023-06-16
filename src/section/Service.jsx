import { IconCheck } from '@tabler/icons-react';
import Card from '../components/Card/Card';
import branding from '../../src/assets/images/services/branding.png';
import marketing from '../../src/assets/images/services/marketing.png';
import publication from '../../src/assets/images/services/publication.png';

const Service = () => {
  return (
    <section className={'w-full mt-10'}>
      <div className={'container'}>
        <h1 className={'text-center text-3xl font-bold text-primary mb-8'}>Our Services</h1>
        <div className={'grid grid-cols-1 gap-y-6 gap-x-20 md:grid-cols-2 lg:grid-cols-3'}>
          <Card>
            <Card.Image>
              <img src={branding} className={'h-60 w-full'} />
            </Card.Image>
            <Card.Title>Branding</Card.Title>
            <Card.Body>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, reiciendis!</Card.Body>
          </Card>
          <Card>
            <img src={marketing} className={'h-60 w-full'} />

            <Card.Title>Marketing</Card.Title>
            <Card.Body>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, reiciendis!</Card.Body>
          </Card>
          <Card>
            <img src={publication} className={'h-60 w-full'} />

            <Card.Title>Publications</Card.Title>
            <Card.Body>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, reiciendis!</Card.Body>
          </Card>
        </div>
        <div className={'grid gap-y-6 lg:flex items-center mt-20 gap-x-40'}>
          <div className={'w-full basis-2/3'}>
            <img className={'rounded-xl shadow-xl w-full'} src={'https://source.unsplash.com/360x250?laptop'} />
          </div>
          <div className={'w-full basis-1/2'}>
            <h1 className={'text-3xl text-primary font-semibold'}>Mengapa Harus Bersama Kami?</h1>
            <p className={'py-5'}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aut maxime excepturi est?
            </p>
            <div className='grid gap-y-4 font-semibold'>
              <p className='flex gap-x-2'>
                <i>
                  <IconCheck />
                </i>
                Konsultasi Berkelanjutan
              </p>
              <p className='flex gap-x-2'>
                <i>
                  <IconCheck />
                </i>
                Proyek berakhir bukan berarti hubungan dengan klien berakhir
              </p>
              <p className='flex gap-x-2'>
                <i>
                  <IconCheck />
                </i>
                Pendampingan secara penuh dari kami
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
