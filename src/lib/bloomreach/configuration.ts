import axios from 'axios';
import { Configuration } from '@bloomreach/spa-sdk';
import { Platform } from 'react-native';

const PREVIEW_TOKEN_KEY: string = 'token';
const PREVIEW_SERVER_ID_KEY: string = 'server-id';

const getBrxConfiguration = (path: string) => {
  const configuration: Configuration = {
    endpoint: process.env.EXPO_PUBLIC_BRXM_ENDPOINT ?? '',
    httpClient: axios,
    path,
    debug: true,
  };

  // For preview mode in Experience Manager
  if (Platform.OS === 'web') {
    // @ts-ignore
    const urlParams = new URLSearchParams(window.location.search);

    const authorizationToken = urlParams.get(PREVIEW_TOKEN_KEY);
    if (authorizationToken) {
      configuration.authorizationToken = authorizationToken;
    }

    const serverId = urlParams.get(PREVIEW_SERVER_ID_KEY);
    if (serverId) {
      configuration.serverId = serverId;
    }
  }

  return configuration;
};

export default getBrxConfiguration;
