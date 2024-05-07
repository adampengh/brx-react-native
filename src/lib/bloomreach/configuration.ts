import axios from 'axios';
import { Configuration } from '@bloomreach/spa-sdk';
import { Platform } from 'react-native';

const PREVIEW_MULTI_TENANT_ENDPOINT_PARAM: string = 'endpoint';
const PREVIEW_TOKEN_PARAM: string = 'token';
const PREVIEW_SERVER_ID_KEY_PARAM: string = 'server-id';

const getBrxConfiguration = (path: string) => {
  const configuration: Configuration = {
    endpoint: process.env.EXPO_PUBLIC_BRXM_ENDPOINT ?? '',
    httpClient: axios,
    path,
    debug: true,
  };

  // For Preview mode in Experience Manager
  if (Platform.OS === 'web') {
    // @ts-ignore
    const urlParams = new URLSearchParams(window.location.search);

    const endpoint = urlParams.get(PREVIEW_MULTI_TENANT_ENDPOINT_PARAM);
    if (endpoint) {
      configuration.endpoint = endpoint;
    }

    const authorizationToken = urlParams.get(PREVIEW_TOKEN_PARAM);
    if (authorizationToken) {
      configuration.authorizationToken = authorizationToken;
    }

    const serverId = urlParams.get(PREVIEW_SERVER_ID_KEY_PARAM);
    if (serverId) {
      configuration.serverId = serverId;
    }
  }

  return configuration;
};

export default getBrxConfiguration;
