import { loadTokens } from "../../features/auth/tokenStorage";

const BASE_URL = 'http://localhost:3000';

export const request = async (
  path: string,
  options: {
    method?: string,
    params?,
    body?: unknown,
    auth?: boolean,
  } = {}
) => {
  const { method = 'GET', params, body, auth } = options;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (auth) {
    const tokens = await loadTokens();
    const accessToken = tokens?.accessToken;

    console.log(accessToken);

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`
    }
  }

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers,
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
