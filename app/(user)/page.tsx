import { groq } from 'next-sanity';
import Posts from '../../components/Posts';
import { client } from '../../lib/sanity.client';

const query = groq`
*[_type=='post'] {
  ...,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60; //Revalidate the page every 60s

export default async function Page() {
  const posts = await client.fetch(query);
  return (
    <section>
      {/* <h1>Hello, Home page!</h1> */}
      <div>
        <Posts posts={posts} />
      </div>
    </section>
  );
}
