import {
  YMaps,
  Map as YMap,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

type MapProps = {
  position: number[];
};

const Map: React.FC<MapProps> = ({ position }) => (
  <div style={{ width: '100%', height: '30vh' }}>
    <YMaps query={{ lang: 'ru_RU' }}>
      <YMap
        width={'100%'}
        height={'100%'}
        defaultState={{
          center: position,
          zoom: 12,
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
