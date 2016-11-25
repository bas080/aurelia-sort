import {Config} from './config';
import {inject} from 'aurelia-framework';

@inject(Config)
export class SortValueConverter {

  constructor(config) {
    this.config = config;
  }

  /**
   * @param {array} unsorted - an array that is to be sorted
   * @param {object} options - which alters the behavior of sort
   * @param {boolean} [options.ignoreCase=true] - to sort case insensitively
   * @param {string} [options.property] - name of the property to sort
   * @param {string} [options.method='alphanumeric'] - the method to sort with
   */
  toView(array, options) {
    let value;

    options = Object.assign(this.config.defaults, options);

    value = options.valueFn ? options.valueFn(options) : this.valueFn(options);

    return array.sort((a, b) => this.config.methods[options.method](value(a), value(b)));
  }

  valueFn(options) {
    if (options.value) {
      return options.value;
    }

    if (options.property) {
      value = obj => obj[options.property];
    } else {
      value = v => v;
    }

    if (options.ignoreCase === true) {
      let oldValue = value;

      value = v => oldValue(v).toLowerCase();
    }
  }

}
