import { ModuleFederationConfig } from '@nx/webpack';
import { shared } from 'module-federation.base.config';

const config: ModuleFederationConfig = {
  name: 'acmeRemoteTwo',

  library: { type: 'var', name: 'acmeRemoteTwo' },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared,
};

export default config;
