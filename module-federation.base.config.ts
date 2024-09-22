import { SharedLibraryConfig } from '@nx/webpack';

/*
 * The shared function is called for each package that is being used.
 * It allows you to configure if and how the package should be shared.
 *
 * See https://module-federation.io/configure/shared.html for more details
 */
export function shared(pkg: string): undefined | SharedLibraryConfig | false {
  if (pkg === 'react') {
    return {
      singleton: true,
      eager: true,
      requiredVersion: '18.3.1',
    };
  }

  if (pkg === 'react-dom') {
    return {
      singleton: true,
      eager: true,
      requiredVersion: '18.3.1',
    };
  }

  return false;
}
