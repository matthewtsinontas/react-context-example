import React, { memo } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Wrapper from '../Wrapper';

// Using react memo, we can avoid unnecessary re-renders of this component
// because although its parent HAS re-rendered, this component shouldn't
// due to the fact no props have changed
const ChildComponent = () => (
    <Wrapper level={2}>
        <p>I am a child component who has not subscribed to state, I have no idea what language we're in.</p>
        <LanguageSwitcher />
    </Wrapper>
)


export default memo(ChildComponent);