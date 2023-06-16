import { IconPlus } from '@tabler/icons-react';
import marketing from '../../../src/assets/images/services/chart.png';
import branding from '../../../src/assets/images/services/shapes.png';
import files from '../../../src/assets/images/services/files.png';

const CardService = () => {
  return (
    <div className={'w-full flex items-center justify-between flex-wrap gap-y-4'}>
      <div className='grid justify-items-center'>
        <img src={branding} alt='' />
        <p className={'w-full text-lg text-center pt-2'}>Branding</p>
        <a
          href='#'
          className={
            'w-full font-thin text-sm hover:border-b hover:border-rose-300 whitespace-nowrap inline-flex justify-center gap-x-1 items-center pt-2'
          }>
          See More
          <IconPlus
            size={15} // set custom `width` and `height`
            stroke={2}
          />
        </a>
      </div>
      <div className='grid justify-items-center'>
        <img src={marketing} alt='' />
        <p className={'w-full text-lg text-center pt-2'}>Marketing</p>
        <a
          href='#'
          className={
            'w-full font-thin text-sm hover:border-b hover:border-rose-300 whitespace-nowrap inline-flex justify-center  gap-x-1 items-center pt-2'
          }>
          See More
          <IconPlus
            size={15} // set custom `width` and `height`
            stroke={2}
          />
        </a>
      </div>
      <div className='grid justify-items-center'>
        <img src={files} alt='' />
        <p className={'w-full text-lg text-center pt-2'}>Publications</p>
        <a
          href='#'
          className={
            'w-full font-thin text-sm hover:border-b hover:border-rose-300 whitespace-nowrap inline-flex justify-center  gap-x-1 items-center pt-2'
          }>
          See More
          <IconPlus
            size={15} // set custom `width` and `height`
            stroke={2}
          />
        </a>
      </div>
    </div>
  );
};
export default CardService;
