import { createClient } from 'contentful';
import ItemCard from '../components/ItemCard'

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: 'items' });

  return {
    props: {
      items: res.items,
    },
  };
};
export default function Recipes({ items }) {
  return (
    <div className='recipe-list'>
      {items.map((item) => 
        <ItemCard key={item.sys.id} info={item}/>
      )}
      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  );
}
