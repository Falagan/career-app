import { Box, Kbd, useColorMode } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LANGUAGES } from '../shared/models/languages';
import { THEMES } from '../shared/models/themes';
import './layout.css';
import { LayoutActionsTypes } from './state/layout.actions';
import { useLayoutState } from './state/layout.state';
import Header from './ui/header/header';
import Loading from './ui/loading/loading';
import SideMenu from './ui/side-menu/side-menu';

export default function Layout() {
  const { state, dispatch } = useLayoutState();

  function switchLang(lang: LANGUAGES) {
    dispatch({ type: LayoutActionsTypes.SWITCH_LANGUAGE, payload: lang });
  }

  function switchTheme(theme: THEMES) {
    dispatch({ type: LayoutActionsTypes.SWITCH_THEME, payload: theme });
  }

  function toggleSideMenu() {
    dispatch({ type: LayoutActionsTypes.TOGGLE_SIDE_MENU });
  }

  function toggleColorThemeMode() {
    dispatch({ type: LayoutActionsTypes.SWITCH_THEME_MODE });
  }

  return (
    <Box h="100%">
      <Header
        onSwitchLang={switchLang}
        onSwitchTheme={switchTheme}
        onToggleSideMenu={toggleSideMenu}
        onToggleColorThemeMode={toggleColorThemeMode}
        title={
          <span>
            <Kbd>Eloy</Kbd> + <Kbd>Pérez</Kbd>
          </span>
        }
      >
        <Link to="/">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="tooling">Tooling</Link>
        <Link to="programming">Programming Languages</Link>
        <Link to="languages">Languages</Link>
        <Link to="certifications">Certifications</Link>
        <Link to="contact">Contact</Link>
      </Header>
      <SideMenu
        isOpen={state.sideMenuOpen || false}
        onClose={toggleSideMenu}
        header={
          <span>
            <Kbd>Eloy</Kbd> + <Kbd>Pérez</Kbd>
          </span>
        }
      >
        <Link to="/">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="tooling">Tooling</Link>
        <Link to="programming">Programming Languages</Link>
        <Link to="languages">Languages</Link>
        <Link to="certifications">Certifications</Link>
        <Link to="contact">Contact</Link>
      </SideMenu>
      <Suspense fallback={<Loading></Loading>}>
        <Box paddingTop={'100px'}>
          <Outlet />
        </Box>
      </Suspense>
    </Box>
  );
}
