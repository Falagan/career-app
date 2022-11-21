import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { LANGUAGES } from '../../shared/models/languages';
import { THEMES, THEME_MODE } from '../../shared/models/themes';
import { LayoutActions } from './layout.actions';
import { LayoutReducer } from './layout.reducers';

export type LayoutState = {
  modalOpen: boolean;
  sideMenuOpen: boolean;
  lang: LANGUAGES;
  theme: THEMES;
  themeMode: THEME_MODE;
};

const initialState: LayoutState = {
  modalOpen: false,
  sideMenuOpen: false,
  lang: LANGUAGES.ES,
  theme: THEMES.GRAY,
  themeMode: THEME_MODE.LIGHT,
};

const LayoutStateContext = createContext({
  state: initialState as Partial<LayoutState>,
  dispatch: {} as Dispatch<LayoutActions>,
});

const LayoutStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(LayoutReducer, initialState);
  return <LayoutStateContext.Provider value={{ state, dispatch }}>{children}</LayoutStateContext.Provider>;
};

const useLayoutState = () => {
  const context = useContext(LayoutStateContext);
  if (!context) {
    throw new Error('useLayoutState must be used within a LayoutStateContext');
  }
  return context;
};

export { LayoutStateProvider, useLayoutState };
