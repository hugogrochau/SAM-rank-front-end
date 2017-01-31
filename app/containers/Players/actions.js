import {
  PLAYERS_FETCH_REQUESTED,
  PLAYERS_FETCH_SUCCEEDED,
  PLAYERS_FETCH_FAILED,
  PLAYER_SEARCH,
  CHANGE_ORDER,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  CHANGE_SIZE_SMALL,
  CHANGE_SIZE_LARGE,
} from './constants';

export const fetchPlayers = () => ({ type: PLAYERS_FETCH_REQUESTED });

export const playersFetchSucceeded = (players) => ({ type: PLAYERS_FETCH_SUCCEEDED, players });

export const playersFetchFailed = (message) => ({ type: PLAYERS_FETCH_FAILED, message });

export const playerSearch = (text) => ({ type: PLAYER_SEARCH, text });

export const orderPlayers = (columnName) => ({ type: CHANGE_ORDER, columnName });

export const changePage = (forward) => ({ type: forward ? NEXT_PAGE : PREVIOUS_PAGE });

export const changeSize = (small) => ({ type: small ? CHANGE_SIZE_SMALL : CHANGE_SIZE_LARGE });
