import { useCallback, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/core';
import { useLinkBuilder } from '@react-navigation/native';
import { initialize } from '@bloomreach/spa-sdk';
import getBrxmConfiguration from 'lib/configuration';

const useBrxmPage = () => {
    const [state, setState] = useState();

    const route = useRoute();
    const buildLink = useLinkBuilder();
    const path = buildLink(route.name, route.params);

    const loadPageAsync = useCallback(async () => {
        const config = getBrxmConfiguration(path);
        const page = await initialize(config);
        setState({ brxmPage: page, brxmConfiguration: config });
    }, [path]);

    const reloadPageAsync = async () => {
        await loadPageAsync();
    };

    useEffect(() => {
        loadPageAsync();
    }, [loadPageAsync]);

    return { ...state, reloadPageAsync };
};

export default useBrxmPage;
