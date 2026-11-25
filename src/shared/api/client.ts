const BASE_URL = 'http://localhost:3000';

export const request = async (
  path: string,
  options: {
    method?: string,
    params?,
    body?: unknown,
  } = {}
) => {
  const { method = 'GET', params, body } = options;
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      throw new Error(`request error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
