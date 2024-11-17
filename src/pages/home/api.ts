export interface Article {
  source: {
    id: string,
    name: string,
  },
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface HomePageArticlesResponse {
  status: string
  totalResults: number
  // Articles peut etre undifined si il y a une erreur
  articles?: Article[]
}

// select react
// how to make a controlled select react
export type HomePageFilter = 'none' | 'business' | 'entertainment' | 'health' | 'science' | 'sports' | 'technology'

// Promise = possibilité que l'url ne revoie pas de contenu (TS)
// filter = 'toto', 'tata' '3', 'jdofrnjcodl' null, 43, {}
export async function fetchHomePageArticles(filter: HomePageFilter): Promise<HomePageArticlesResponse> {
  const api_key = import.meta.env.VITE_KEY_API
  const url = "https://newsapi.org/v2/top-headlines?";
  const params = new URLSearchParams()

  // Url params used
  params.append('apiKey', api_key)
  params.append('country', 'us')
  if (filter !== 'none')
    params.append('category', filter)

  try {
    const response = await fetch(url + params.toString());
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: HomePageArticlesResponse = await response.json();
    const articles = json.articles?.filter((article) => {
      if (article.title === '[Removed]')
        return false
      return true
    }).map((article) => {
      if (article.urlToImage === null) {
        article.urlToImage = "https://placehold.co/300x400?text=No+Image"
      }
      return article
    })

    // Spread operator VVV (...)
    return { ...json, articles }
  } catch (error: any) {
    console.error(error.message);
    return { status: 'ko', totalResults: 0 }
  }
}
