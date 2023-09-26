interface FetcherProps {
  url: string;
  method: string;
  body?: any;
  json?: boolean;
}
const fetcher = async ({ url, method, body, json = true }: FetcherProps) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('API Error');

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const createNewProject = (data: any) => {
  return fetcher({
    url: '/api/project',
    method: 'POST',
    body: { data },
  });
};
