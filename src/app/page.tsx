import { groq } from 'next-sanity'
import Link from 'next/link'

import { client } from '../../sanity/lib/client'

export default async function Home() {
  const data = await client.fetch(groq`
    *[_type == "business"] {
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
  `)

  return (
    <main>
      <h1>Dark Kitchen</h1>
      <p>Restaurantes que</p>
      <b>Restaurantes</b>
      <ul>
        {data.map((business: any) => (
          <li key={business._id}>
            <h2>
              <Link href={`/${business.slug?.current}`}>{business.name}</Link>
            </h2>
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
          </li>
        ))}
      </ul>
    </main>
  )
}
