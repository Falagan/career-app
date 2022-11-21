import { useColorMode } from '@chakra-ui/react';
import i18next from 'i18next';
import { LANGUAGES } from '../../shared/models/languages';
import { THEMES, THEME_MODE } from '../../shared/models/themes';
import { LayoutActions, LayoutActionsTypes } from './layout.actions';
import { LayoutState } from './layout.state';
export const LayoutReducer = (state: LayoutState, action: LayoutActions): LayoutState => {
  const { toggleColorMode } = useColorMode();
  switch (action.type) {
    case LayoutActionsTypes.TOGGLE_SIDE_MENU:
      return {
        ...state,
        sideMenuOpen: !state.sideMenuOpen,
      };
    case LayoutActionsTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case LayoutActionsTypes.SWITCH_THEME:
      return {
        ...state,
        theme: action.payload || THEMES.GRAY,
      };
    case LayoutActionsTypes.SWITCH_THEME_MODE:
      toggleColorMode();
      return {
        ...state,
        themeMode: action.payload || THEME_MODE.LIGHT,
      };
    case LayoutActionsTypes.SWITCH_LANGUAGE:
      i18next.changeLanguage(action.payload);
      return {
        ...state,
        lang: action.payload || LANGUAGES.ES,
      };
    default:
      return state;
  }
};
