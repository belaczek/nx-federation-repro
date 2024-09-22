import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

import { loadRemoteModule } from '@nx/react/mf';

const AcmeRemote = React.lazy(() =>
  loadRemoteModule('acme-remote', './Module')
);
const AcmeRemoteTwo = React.lazy(() =>
  loadRemoteModule('acmeRemoteTwo', './Module')
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/acme-remote-two">AcmeRemoteTwo</Link>
        </li>

        <li>
          <Link to="/remote">Remote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="acme-host" />} />
        <Route path="/acme-remote-two" element={<AcmeRemoteTwo />} />

        <Route path="/remote" element={<AcmeRemote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
