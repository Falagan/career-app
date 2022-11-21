import { LANGUAGES } from '../../shared/models/languages';
import { THEMES, THEME_MODE } from '../../shared/models/themes';
import { Action } from '../../shared/state/action';

export const enum LayoutActionsTypes {
  TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU',
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  SWITCH_THEME = 'SWITCH_THEME',
  SWITCH_THEME_MODE = 'SWITCH_THEME_MODE',
  SWITCH_LANGUAGE = 'SWITCH_LANGUAGE',
}

export type ToggleSideMenuAction = Action<LayoutActionsTypes.TOGGLE_SIDE_MENU, boolean>;
export type ToggleModalAction = Action<LayoutActionsTypes.TOGGLE_MODAL, boolean>;
export type SwitchLangAction = Action<LayoutActionsTypes.SWITCH_LANGUAGE, LANGUAGES>;
export type SwitchThemeAction = Action<LayoutActionsTypes.SWITCH_THEME, THEMES>;
export type SwitchThemeModeAction = Action<LayoutActionsTypes.SWITCH_THEME_MODE, THEME_MODE>;

export type LayoutActions =
  | ToggleSideMenuAction
  | ToggleModalAction
  | SwitchLangAction
  | SwitchThemeAction
  | SwitchThemeModeAction;
