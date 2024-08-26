import dynamic from 'next/dynamic';

const Mapbox = dynamic(() => import('./MapboxComponent'), { 
  ssr: false 
});

export default Mapbox;