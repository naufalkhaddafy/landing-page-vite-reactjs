import { IconChartDonutFilled, IconChevronRight, IconPlus, IconHomePlus, IconBrandReact } from '@tabler/icons-react';
import Button from '../components/Button';
import CardService from '../components/Card/CardService';
import hero from '../../src/assets/images/hero.png';
import adobe from '../../src/assets/images/brand/Adobe.png';
import engage from '../../src/assets/images/brand/Engage.png';
import group from '../../src/assets/images/brand/Group.png';
import union from '../../src/assets/images/brand/Union.png';

import React from 'react';

const Hero = () => {
  return (
    <section className={'w-full pt-28'}>
      <div className={'container'}>
        {/* Paragraph Content Start*/}
        <div className={'w-full pb-10'}>
          <div className={'w-full max-w-md'}>
            <h1 className={'text-primary text-3xl font-medium mb-4 capitalize'}>
              <p className={'block'}>Rencanakan Bisnis,</p>Rencanakan Sukses
            </h1>
            <p className={'text-justify'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, illo impedit ut assumenda reiciendis
              beatae placeat debitis aspernatur reprehenderit ad esse sint aliquam incidunt numquam odit quas qui,
              minima magni rem fugiat! Sint ducimus expedita, dolorum commodi amet eaque animi, necessitatibus harum
              ullam enim iusto ex sunt quo porro molestiae?
            </p>
          </div>
        </div>
        {/* Paragraph Content End*/}
        {/* Service Start*/}
        <div
          className={
            'w-full flex items-center justify-between py-4 px-10  bg-primary rounded-2xl text-white font-semibold shadow-lg'
          }>
          <div className={'w-full max-w-lg flex items-center gap-x-10'}>
            <div className={'bg-rose-700 rounded-2xl py-8 px-4 text-center shadow-xl grid place-items-center'}>
              <div className={'mb-4'}>
                <p className={'block'}>Our</p> Services
              </div>
              <div className={'flex justify-center'}>
                <IconChevronRight
                  size={36} // set custom `width` and `height`
                  stroke={3} // set `stroke-width`
                />
              </div>
            </div>
            <CardService />
          </div>
          <div className='hidden  lg:block h-[468px] w-[350px]  absolute top-28 right-[195px] bg-transparent'>
            <img src={hero} className={'w-full h-full rounded-lg'} />
          </div>
        </div>
        {/* Servce End */}

        <div className={'flex flex-wrap  items-center justify-between py-10 gap-y-5'}>
          <img src={adobe} alt='' className={'w-28 h-6'} />
          <img src={engage} alt='' className={'w-28 h-6'} />
          <img src={group} alt='' className={'w-28 h-6'} />
          <img src={union} alt='' className={'w-28 h-6'} />
          <img src={adobe} alt='' className={'w-28 h-6'} />
          <img src={engage} alt='' className={'w-28 h-6'} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
