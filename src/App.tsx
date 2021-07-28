import React from 'react';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
} from '@clerk/clerk-react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

function HomePage() {
  return (
    <div className='Home'>
      <SignedOut>
        <h2>You are signed out</h2>
        <div className='Links'>
          <Link to='/sign-in'>SignIn page</Link>
          <Link to='/sign-up'>SignUp page</Link>
        </div>
      </SignedOut>

      <SignedIn>
        <h2>You are signed in</h2>
        <UserButton afterSignOutAll='/' />
      </SignedIn>
    </div>
  );
}

const DEMO_FRONTEND_API = 'clerk.9s8wj.hu2sd.lcl.dev';

function App() {
  const { push } = useHistory();

  return (
    <ClerkProvider frontendApi={DEMO_FRONTEND_API} navigate={to => push(to)}>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>

          <Route path='/sign-in'>
            <SignIn />
          </Route>

          <Route path='/sign-up'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </ClerkProvider>
  );
}

export default App;
