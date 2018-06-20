import types from './types';

export const CardsData = data => ({
  type: types.SRV_DATA,
  payload: data,
});

export const getData = (input = false) => ({
  type: types.SAGA_SRV_DATA,
  payload: input,
});

export const getHeroData = url => ({
  type: types.SAGA_HERO_DATA,
  payload: url,
});

export const HeroData = data => ({
  type: types.HERO_DATA,
  payload: data,
});

export const getCardDataById = id => ({
  type: types.SAGA_CARD_DATA_BY_ID,
  payload: id,
});

export const CardDataById = data => ({
  type: types.CARD_DATA_BY_ID,
  payload: data,
});
