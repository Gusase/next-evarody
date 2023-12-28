export const getAnimeResponse = async (id, q, resource) => {
  let query = `
    query ($id: Int) { 
      Media (id: $id, type: ANIME) {
        id,
        idMal,
        title	 {
          romaji
          english
          native
        }
        synonyms,
        status,
        rankings {
          id,
          rank,
          type,
          context
        },
        coverImage {
          extraLarge
          large
          medium
          color
        },
        bannerImage, 
        trailer{
          id,
          site,
          thumbnail,
        }
        description,
        hashtag,
        genres,
        popularity,
        favourites,
        averageScore,
        isAdult,
        format,
        chapters,
        season,
        seasonYear
      }
    }
`;

  // Define our query variables and values that will be used in the query request
  let variables = {
    id: id,
  };

  // Define the config we'll need for our Api request
  let url = `${process.env.NEXT_PUBLIC_API_BASE_URI}`,
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  const res = await fetch(url, options);
  const { data } = await res.json();
  return data[q];
};

export const getAnimeEps = async (id, q) => {
  let query = `
  query getEps($id: Int){
    Media(id: $id){
      streamingEpisodes{
        title,
        thumbnail,
        url,
        site
      }
    }
  }
`;

  // Define our query variables and values that will be used in the query request
  let variables = {
    id: id,
  };

  // Define the config we'll need for our Api request
  let url = `${process.env.NEXT_PUBLIC_API_BASE_URI}`,
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  const res = await fetch(url, options);
  const { data } = await res.json();
  return data[q];
};

export const getCollections = async (q) => {
  let query = `
  query browseCollections{
    genres:GenreCollection,
    tags:MediaTagCollection {
      id
      name
      description
      category
      isAdult
    }
  }
`;

  // Define the config we'll need for our Api request
  let url = `${process.env.NEXT_PUBLIC_API_BASE_URI}`,
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    };

  const res = await fetch(url, options);
  const { data } = await res.json();
  return data[q];
};

export const getNestedResponse = async (resource, prop) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[prop]);
};

export const refresh = (source, gap) => {
  const start = ~~(Math.random() * (source.length - gap) + 1);
  const end = start + gap;

  const response = {
    data: source.slice(start, end),
  };

  return response;
};

export const getAnimeBasedOn = async ({
  format,
  status,
  q = "Page",
  order,
}) => {
  let query = `
  query getPopulerAnime($sort: [MediaSort],$format: MediaFormat,$status: MediaStatus){
    Page(page:1,perPage:14){
      media(sort: $sort,format: $format,status: $status,type:ANIME){
        id,
        idMal,
        title{
          english,
          romaji,
          native
        },
        episodes,
        coverImage {
          extraLarge
          large
          medium
          color
        },        
      }
    }
  }`;

  // Define our query variables and values that will be used in the query request
  let variables = {
    sort: order,
    format: format,
    status: status,
  };

  // Define the config we'll need for our Api request
  let url = `${process.env.NEXT_PUBLIC_API_BASE_URI}`,
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  const res = await fetch(url, options);
  const { data } = await res.json();
  return data[q];
};

export const getOverview = async ({
  nextSeason,
  nextYear,
  season,
  seasonYear,
}) => {
  let query = `
    query getOverview($season:MediaSeason,$seasonYear:Int $nextSeason:MediaSeason,$nextYear:Int){
      trending: Page(page:1,perPage:7){
        media(sort:TRENDING_DESC,type:ANIME,isAdult:false){
          ...media
        }
      }
      season: Page(page:1,perPage:7){
        media(season:$season,seasonYear:$seasonYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false){
          ...media
        }
      }
      nextSeason: Page(page:1,perPage:7){
        media(season:$nextSeason,seasonYear:$nextYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false){
          ...media
        }
      }
      popular: Page(page:1,perPage:7){media(sort:POPULARITY_DESC,type:ANIME,isAdult:false){
        ...media
        }
      }
      top: Page(page:1,perPage:10){
        media(sort:SCORE_DESC,type:ANIME,isAdult:false){
          ...media
        }
      }
    }
    fragment media on Media{
      id title{
        romaji,english
      }
      coverImage{extraLarge large color}
      startDate{year month day}
      endDate{year month day}
      bannerImage
      season
      seasonYear
      description
      type
      format
      status(version:2)
      episodes
      duration
      chapters
      volumes
      genres
      isAdult
      averageScore
      popularity
      mediaListEntry{id status}
      nextAiringEpisode{airingAt timeUntilAiring episode}
      studios(isMain:true){edges{isMain node{id name}}}
    }
  `;

  // Define our query variables and values that will be used in the query request
  let variables = {
    nextSeason: nextSeason,
    nextYear: nextYear,
    season: season,
    seasonYear: seasonYear,
  };

  // Define the config we'll need for our Api request
  let url = `${process.env.NEXT_PUBLIC_API_BASE_URI}`,
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  const res = await fetch(url, options);
  const { data } = await res.json();

  return data;
};
