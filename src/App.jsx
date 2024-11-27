import { YMaps, Map } from '@pbe/react-yandex-maps';
const App = () => (
  <YMaps>
    <div >
      My awesome application with maps!
      <Map  defaultState={{ center: [40.81546155532312, 72.28221983705828], zoom: 9 }} />
    </div>
  </YMaps>
);
export default App