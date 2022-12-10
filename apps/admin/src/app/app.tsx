import { Admin, ListGuesser, Resource } from 'react-admin';
import { useHasuraDataProvider } from '../utils/useDataProvider';

export function App() {
  const { dataProvider } = useHasuraDataProvider();

  if (!dataProvider) return <p>Loading...</p>;

  return (
    <Admin dataProvider={dataProvider}>
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
