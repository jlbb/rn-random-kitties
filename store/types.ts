export const RESET_BG_COLOR = "RESET_BG_COLOR";
export const SET_BG_COLOR = "SET_BG_COLOR";
export const SET_CAT_ITEMS = "SET_CAT_ITEMS";

/**
 *  BASIC TYPES
 */

export type BgColorType = string;
export type CatItemsType = string[];

/**
 *  STATE TYPES
 */

export interface StateManagement {
  context: ContextAppState;
  app: MainAppState;
}

export interface ContextAppState {
  backgroundColor: BgColorType;
}

export interface MainAppState {
  catItems: CatItemsType;
}

/**
 *  ACTION TYPES
 */

// CONTEXT APP ACTIONS

interface ResetBgColorAction {
  type: typeof RESET_BG_COLOR;
}

interface SetBgColorAction {
  type: typeof SET_BG_COLOR;
  payload: string;
}

export type ContextAppActionsType = ResetBgColorAction | SetBgColorAction;

export type ResetBgColorType = () => ResetBgColorAction;
export type SetBgColorType = (color: string) => SetBgColorAction;
export type SetRandomBgColorType = () => SetBgColorAction;

// MAIN APP ACTIONS

interface SetCatItemsAction {
  type: typeof SET_CAT_ITEMS;
  payload: CatItemsType;
}

export type MainAppActionTypes = SetCatItemsAction;

export type SetCatItemsType = (catItems: CatItemsType) => MainAppActionTypes;
export type FetchRandomCatsType = (
  nCats?: number
) => Promise<MainAppActionTypes>;

/**
 *  REDUCER TYPES
 */

export type ContextAppReducer = (
  state: ContextAppState,
  action: ContextAppActionsType
) => ContextAppState;

export type MainAppReducer = (
  state: MainAppState,
  action: MainAppActionTypes
) => MainAppState;
