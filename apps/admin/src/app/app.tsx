import { Admin, ListGuesser, Resource } from 'react-admin';
import { useHasuraDataProvider } from '../utils/useDataProvider';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import frenchMessages from 'ra-language-french';

export function App() {
  const { dataProvider } = useHasuraDataProvider();
  const i18nProvider = polyglotI18nProvider(() => frenchMessages, 'fr');

  if (!dataProvider) return <p>Loading...</p>;

  return (
    <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
      <Resource name="Artwork" list={ListGuesser} />
      <Resource name="Category" list={ListGuesser} />
      <Resource name="Product" list={ListGuesser} />
      <Resource name="ProductImage" list={ListGuesser} />
      <Resource name="Purchase" list={ListGuesser} />
      <Resource name="PurchaseItem" list={ListGuesser} />
      <Resource name="Address" list={ListGuesser} />
      <Resource name="ShippingCost" list={ListGuesser} />
      <Resource name="ShopCategory" list={ListGuesser} />
      <Resource name="AdminVariable" list={ListGuesser} />
    </Admin>
  );
}

export default App;

