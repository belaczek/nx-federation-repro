import { ModuleFederationConfig } from '@nx/webpack';
import { shared } from 'module-federation.base.config';

const config: ModuleFederationConfig = {
  name: 'acme-remote',

  library: { type: 'var', name: 'acme_remote' },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared,
};

export default config;
