import { StaticImageData } from 'next/image';

export type DoctorType = {
  id: string;
  name: string;
  name_about_who: string;
  name_whos: string;
  shortname: string;
  title: string[];
  img: StaticImageData;
  alt: string;
  link: string;
};
