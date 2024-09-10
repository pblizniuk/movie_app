export default async function getData(path: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  }

  path = path.replace('?', '?include_adult=false&region=US&language=en-US&')

  const url = `${process.env.NEXT_PUBLIC_TMDB_API_URL}${path}`

  const res = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error(err))

  return res
}
