import { groq } from 'next-sanity'
import Link from 'next/link'

import { client } from '../../../sanity/lib/client'

export default async function Home({ params }: { params: any }) {
  const business = await client.fetch(
    groq`
    *[_type == "business" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      description,
      social {
        facebook,
        instagram,
      },
      flags[] -> {
        _id,
        name
      }
    }
  `,
    { slug: params.slug }
  )

  return (
    <main>
      <h1>{business.name}</h1>
      <p>{business.description}</p>
      <b>Social</b>
      <ul>
        {business.social?.facebook && (
          <li>
            <a href={business.social.facebook}>Facebook</a>
          </li>
        )}
        {business.social?.instagram && (
          <li>
            <a href={business.social?.instagram}>Instagram</a>
          </li>
        )}
      </ul>
      <b>Flags</b>
      <ul>
        {business.flags?.map((flag: any) => (
          <li key={flag._id}>{flag.name.es}</li>
        ))}
      </ul>
    </main>
  )
}
