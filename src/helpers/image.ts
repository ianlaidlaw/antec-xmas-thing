import { ImageKeys } from '../res/constants';
import Amazon from '../res/img/Amazon.png';
import BanvilleAndJones from '../res/img/BanvilleAndJones.png';
import BestBuy from '../res/img/BestBuy.png';
import BlackMarketProvisions from '../res/img/BlackMarketProvisions.png';
import BostonPizza from '../res/img/BostonPizza.png';
import Chapters from '../res/img/Chapters.png';
import CoalAndCanary from '../res/img/CoalAndCanary.png';
import EBGames from '../res/img/EBGames.png';
import GolfTown from '../res/img/GolfTown.png';
import GoodLocal from '../res/img/GoodLocal.png';
import HomeDepot from '../res/img/HomeDepot.png';
import Ikea from '../res/img/Ikea.png';
import Indigo from '../res/img/Indigo.png';
import KHAB from '../res/img/KHAB.png';
import LuxeBBQ from '../res/img/LuxeBBQ.png';
import Marshalls from '../res/img/Marshalls.png';
import Mcdonalds from '../res/img/Mcdonalds.png';
import McNally from '../res/img/McNally.png';
import Michaels from '../res/img/Michaels.png';
import Netflix from '../res/img/Netflix.png';
import Nintendo from '../res/img/Nintendo.png';
import OhDoughnuts from '../res/img/OhDoughnuts.png';
import Playstation from '../res/img/Playstation.png';
import SkipTheDishes from '../res/img/SkipTheDishes.png';
import SportChek from '../res/img/SportChek.png';
import Starbucks from '../res/img/Starbucks.png';
import Superstore from '../res/img/Superstore.png';
import TimHortons from '../res/img/TimHortons.png';
import UberEats from '../res/img/UberEats.png';
import Walmart from '../res/img/Walmart.png';
import DefaultImage from '../res/img/DefaultImage.png';

export const getImage = (key: string | null | undefined) => {
  switch (key) {
    case ImageKeys.Amazon:
      return Amazon;
    case ImageKeys.BanvilleAndJones:
      return BanvilleAndJones;
    case ImageKeys.BestBuy:
      return BestBuy;
    case ImageKeys.BlackMarketProvisions:
      return BlackMarketProvisions;
    case ImageKeys.BostonPizza:
      return BostonPizza;
    case ImageKeys.Chapters:
      return Chapters;
    case ImageKeys.CoalAndCanary:
      return CoalAndCanary;
    case ImageKeys.EBGames:
      return EBGames;
    case ImageKeys.GolfTown:
      return GolfTown;
    case ImageKeys.GoodLocal:
      return GoodLocal;
    case ImageKeys.HomeDepot:
      return HomeDepot;
    case ImageKeys.Ikea:
      return Ikea;
    case ImageKeys.Indigo:
      return Indigo;
    case ImageKeys.KHAB:
      return KHAB;
    case ImageKeys.LuxeBBQ:
      return LuxeBBQ;
    case ImageKeys.Marshalls:
      return Marshalls;
    case ImageKeys.Mcdonalds:
      return Mcdonalds;
    case ImageKeys.McNally:
      return McNally;
    case ImageKeys.Michaels:
      return Michaels;
    case ImageKeys.Netflix:
      return Netflix;
    case ImageKeys.Nintendo:
      return Nintendo;
    case ImageKeys.OhDoughnuts:
      return OhDoughnuts;
    case ImageKeys.Playstation:
      return Playstation;
    case ImageKeys.SkipTheDishes:
      return SkipTheDishes;
    case ImageKeys.SportChek:
      return SportChek;
    case ImageKeys.Starbucks:
      return Starbucks;
    case ImageKeys.Superstore:
      return Superstore;
    case ImageKeys.TimHortons:
      return TimHortons;
    case ImageKeys.UberEats:
      return UberEats;
    case ImageKeys.Walmart:
      return Walmart;
    default:
      return DefaultImage;
  }
};
