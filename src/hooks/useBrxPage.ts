import { useCallback, useEffect, useState } from 'react';
import { Configuration, Page, initialize } from '@bloomreach/spa-sdk';
import { useRoute } from '@react-navigation/core';
import { useLinkBuilder } from '@react-navigation/native';
import getBrxConfiguration from '../lib/bloomreach/configuration';

const useBrxPage = () => {
  const [state, setState] = useState<{
    brxPage: Page;
    brxConfiguration: Configuration;
  }>();

  const route = useRoute();
  const buildLink = useLinkBuilder();
  const path = buildLink(route.name, route.params);

  const loadPageAsync = useCallback(async () => {
    // @ts-ignore
    const config = getBrxConfiguration(path);
    const page = await initialize(config);
    setState({ brxPage: page, brxConfiguration: config });
  }, [path]);

  const reloadPageAsync = async () => {
    await loadPageAsync();
  };

  useEffect(() => {
    loadPageAsync();
  }, [loadPageAsync]);

  return { ...state, reloadPageAsync };
};

export default useBrxPage;
