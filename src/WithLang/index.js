// Context for Language

import React, { createContext } from 'react';

export const defaultLanguage = "en";

// Whatever is passed into React.createContext() is considered the default state
// this is important because all child components will have access to these values
// on their initial render - it is safe to pass an empty anonymous function here
// as by the time a user might click on something to trigger a language change
// the DOM will have been rendered and the top-level component which provides state
// will have been initialised with its own state
const { Provider, Consumer } = createContext({
    lang: defaultLanguage,
    setLang: () => {}
  });
  
// Export a provider, this is the thing we pass the data too
export const LanguageProvider = Provider;
  
// Higher order component (HOC) pattern takes a component
// and adds the new props from the context
export default Component => ({ ...compProps }) => (
    <Consumer>
        {context => <Component {...compProps} {...context} />}
    </Consumer>
);
