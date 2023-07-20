import { groq } from 'next-sanity';
import Posts from '../../components/Posts';
import { client } from '../../lib/sanity.client';

const query = groq`
*[_type=='post'] {
  ...,
  categories[]->
} | order(_createdAt desc)
`;

export default async function Page() {
  const posts = await client.fetch(query);
  return (
    <div>
      {/* <h1>Hello, Home page!</h1> */}
      <div>
        <Posts posts={posts} />
      </div>
    </div>
  );
}
