import { useMemo } from 'react';
import { useFetchData } from '../hooks';

interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

const CustomHookComponent = () => {
  const { data, done } = useFetchData<Beverage[]>('/hv-taplist.json');

  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes('Portland')),
    [data]
  );

  return (
    <div>
      {portlandTaps.length && (
        <img src={portlandTaps![0].logo} alt="Beverage Image" />
      )}
    </div>
  );
};

export default CustomHookComponent;
