/**
 *
 *{
"status": "ok",
"totalResults": 36,
-"articles": [
-{
-"source": {
"id": "the-washington-post",
"name": "The Washington Post"
},
"author": "Ian Livingston",
"title": "Leonid meteor shower peaks alongside supermoon this weekend. What to know. - The Washington Post",
"description": "Leonid meteors often produce extended bright, colorful trails as they burn up in Earth’s atmosphere.",
"url": "https://www.washingtonpost.com/weather/2024/11/15/leonid-meteor-shower-supermoon/",
"urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ELXJW2Z7CJCOVCWFAUEK3XELBQ.jpg&w=1440",
"publishedAt": "2024-11-15T18:15:36Z",
"content": "Leonid meteors are visible in the night sky from early November to early December. This weekend, the ongoing meteor shower reaches its maximum intensity, with a peak Sunday night into early Monday.\r\n… [+3659 chars]"
},
 *
 */

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
  // Articles can be undefined if there's an error
  articles?: Article[]
}

// Promise = possibilité que l'url ne revoie pas de contenu TS
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
