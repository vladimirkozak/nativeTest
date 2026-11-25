import * as Keychain from 'react-native-keychain';

export type Tokens = { accessToken: string, refreshToken: string };

export async function saveTokens(tokens: Tokens) {
  await Keychain.setGenericPassword('tokens', JSON.stringify(tokens));
}

export async function loadTokens() {
  const creds = await Keychain.getGenericPassword();
  return creds ? JSON.parse(creds.password) : null;
}

export async function clearTokens() {
  await Keychain.resetGenericPassword();
}
