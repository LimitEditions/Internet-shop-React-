import React, { useReducer, useState, useEffect } from 'react';

export const TOGGLE_THEME = 'TOGGLE_THEME';

export const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

function ThemeToggle() {
  const [theme, dispatch] = useReducer(themeReducer, 'light');
  const [text, setText] = useState('Светлая тема');

  const toggleTheme = () => ({
    type: TOGGLE_THEME,

  });

  useEffect(() => {
    setText(theme === 'dark' ? 'Темная тема' : 'Светлая тема');
  }, [theme]);

  return (
    <div style={{ color: theme === 'dark' ? 'white' : 'black', backgroundColor: theme === 'dark' ? 'black' : 'white', height: '100vh' }}>
      <label >
        <input type="checkbox" checked={theme === 'dark'} onChange={() => dispatch(toggleTheme())} />
        {text}
      </label>
    </div>
  );
}

export default ThemeToggle;