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

// Promise = possibilité que l'url ne revoie pas de contenu (TS)
export async function fetchHomePageArticles(): Promise<HomePageArticlesResponse> {
  const api_key = import.meta.env.VITE_KEY_API
  const url = "https://newsapi.org/v2/top-headlines?";
  const params = new URLSearchParams()

  // Url params used
  params.append('apiKey', api_key)
  params.append('country', 'us')

  try {
    const response = await fetch(url + params.toString());
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json
  } catch (error: any) {
    console.error(error.message);
    return { status: 'ko', totalResults: 0 }
  }
}
