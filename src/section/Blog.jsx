import Button from '../components/Button';
import Card from '../components/Card/Card';

const Blog = () => {
  return (
    <div className={'w-full bg-slate-200 py-16'}>
      <div className={'container'}>
        <div className={'flex justify-between mb-10'}>
          <h1 className={'text-3xl font-bold text-primary'}>Blog</h1>
          <Button className={'px-14 py-4'}>Lihat Semua</Button>
        </div>
        <div className={'grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 gap-x-12'}>
          <Card>
            <Card.Image>
              <img src={'https://source.unsplash.com/360x300?mechanical+keyboard'} className={'w-full h-60'} />
            </Card.Image>
            <Card.Title>Branding</Card.Title>
            <Card.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas iure earum maxime eius
              deserunt beatae totam consectetur neque id.
            </Card.Body>
          </Card>
          <Card>
            <img src={'https://source.unsplash.com/360x300?coffee'} className={'w-full h-60'} />

            <Card.Title>Marketing</Card.Title>
            <Card.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas iure earum maxime eius
              deserunt beatae totam consectetur neque id.
            </Card.Body>
          </Card>
          <Card>
            <img src={'https://source.unsplash.com/360x300?mechanical+keyboard'} className={'w-full h-60'} />

            <Card.Title>Publications</Card.Title>
            <Card.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas iure earum maxime eius
              deserunt beatae totam consectetur neque id.
            </Card.Body>
          </Card>
        </div>
        <div className={'mt-14 flex justify-center items-center gap-x-6'}>
          <input type='radio' id='html' name='fav_language' value='HTML' />
          <input type='radio' id='html' name='fav_language' value='HTML' />
          <input type='radio' id='html' name='fav_language' value='HTML' />
        </div>
      </div>
    </div>
  );
};
export default Blog;
