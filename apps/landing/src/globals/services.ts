import { AiOutlineShop } from 'react-icons/ai';
import { IconType } from 'react-icons';
import { HiDesktopComputer } from 'react-icons/hi';
import { GoMegaphone } from 'react-icons/go';
import { FaMobile } from 'react-icons/fa';
export const ServicesData: {
  name: string;
  description: string;
  icon: IconType;
}[] = [
  {
    name: 'Eccomerce',
    description: '',
    icon: AiOutlineShop,
  },

  {
    name: 'Diseño web',
    description: '',
    icon: HiDesktopComputer,
  },

  {
    name: 'Marketing',
    description: '',
    icon: GoMegaphone,
  },
  {
    name: 'Mobile apps',
    description: '',
    icon: FaMobile,
  },
];
