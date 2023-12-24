export const getAnimeResponse = async (resource, query) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URI}/${resource}?${query}`
  );
  const data = await res.json();
  return data;
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
