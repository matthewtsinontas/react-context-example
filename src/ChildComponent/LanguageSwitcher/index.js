import React from 'react';
import WithLang from '../../WithLang';
import Wrapper from '../../Wrapper';

// Because we wrap the default export for this component in our WithLang HOC, the props from that state
// will be passed into here, essentially subscribing THIS component to state
const LanguageSwitcher = ({ lang, setLang }) => {
    return (
        <Wrapper level={3}>
            <p>I am a language switcher nested multiple levels in the component tree. I can set state using context!</p>
            <select 
                onChange={e => setLang(e.target.value)}
                value={lang}
                >
                <option value="en">English</option>
                <option value="ch">官话</option>
            </select>
        </Wrapper>
    );
}

export default WithLang(LanguageSwitcher);