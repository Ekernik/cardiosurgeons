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
  <YMaps query={{ lang: 'ru_RU' }}>
    <YMap
      width={'100%'}
      height={'30vh'}
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
);

export default Map;
