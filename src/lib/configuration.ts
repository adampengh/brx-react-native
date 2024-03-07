import { Configuration } from '@bloomreach/spa-sdk';
import axios from 'axios'
import { Platform } from 'react-native';

const PREVIEW_TOKEN_KEY: string = 'token';
const PREVIEW_SERVER_ID_KEY: string = 'server-id';

const getBrxmConfiguration = () => {
    const configuration: Configuration = {
        endpoint: 'https://profserv02.bloomreach.io/delivery/site/v1/channels/react-native/pages',
        httpClient: axios,
        path: '/',
        debug: true,
    };

    // For preview mode in Experience Manager
    if (Platform.OS === 'web') {
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationToken = urlParams.get(PREVIEW_TOKEN_KEY);
        const serverId = urlParams.get(PREVIEW_SERVER_ID_KEY);

        if (authorizationToken) {
            configuration.authorizationToken = authorizationToken;
        }
        if (serverId) {
            configuration.serverId = serverId
        }
    }

    console.log('configuration', configuration)
    return configuration;
};

export default getBrxmConfiguration;
