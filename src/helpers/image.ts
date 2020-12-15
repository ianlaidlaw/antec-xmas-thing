import { ImageKeys } from '../res/constants';
import amazon from '../res/img/amazon.png';
import steam from '../res/img/mcdonalds.png';
import mcdonalds from '../res/img/mcdonalds.png';
import defaultImage from '../res/img/defaultImage.png';

export const getImage = (key: string) => {
  switch (key) {
    case ImageKeys.Amazon:
      return amazon;
    case ImageKeys.Steam:
      return steam;
    case ImageKeys.Mcdonalds:
      return mcdonalds;
    default:
      return defaultImage;
  }
};
