import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { LanguageProvider, defaultLanguage } from './WithLang';
import ChildComponent from './ChildComponent';
import Wrapper from './Wrapper';

const App = () => {
  const [lang, setLang] = useState(defaultLanguage);

  return (
    <Wrapper level={1}>
      <p>I am at the top level, the current language is: {lang}</p>
      <LanguageProvider value={{ lang, setLang }}>
        <ChildComponent />
      </LanguageProvider>
    </Wrapper>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
