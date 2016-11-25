import {SortValueConverter} from './sort';
import {Config}             from './config';

export function configure(aurelia, configCallback) {

  if (typeof configCallback === 'function') {
    let config = aurelia.container.get(Config);

    configCallback(config);
  }
}
