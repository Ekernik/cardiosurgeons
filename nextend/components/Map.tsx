import {
  YMaps,
  Map as YMap,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

type MapProps = {
  position: number[];
  height?: string;
};

const Map: React.FC<MapProps> = ({ position, height = '30vh' }) => (
  <div style={{ width: '100%', height }}>
    <YMaps query={{ lang: 'ru_RU' }}>
      <YMap
        width={'100%'}
        height={'100%'}
        defaultState={{
          center: position,
          zoom: 15,
          behaviors: ['default', 'scrollZoom'],
          controls: [],
        }}
      >
        <Placemark defaultGeometry={position} />
        <FullscreenControl />
        <ZoomControl />
      </YMap>
    </YMaps>
  </div>
);

export default Map;
