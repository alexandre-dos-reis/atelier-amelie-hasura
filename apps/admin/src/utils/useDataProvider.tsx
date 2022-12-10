import buildHasuraProvider from 'ra-data-hasura';
import { useEffect, useState } from 'react';
import { DataProvider } from 'react-admin';

// https://github.com/hasura/ra-data-hasura#adding-authentication-headers

export const useHasuraDataProvider = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string>>();

  useEffect(() => {
    const buildDataProvider = async () => {
      const localDataProvider = await buildHasuraProvider({
        clientOptions: { uri: 'http://localhost:8080/v1/graphql' },
      });
      setDataProvider(localDataProvider);
    };
    buildDataProvider();
  }, []);

  return { dataProvider };
};
