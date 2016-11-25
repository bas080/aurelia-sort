export class Config {

  methods = {
    alphanumeric: (a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }

      return 0;
    }
  };

  defaults = {
    method    : 'alphanumeric',
    ignoreCase: true,
  };

  registerMethod(name, sortFn) {
    this.methods[name] = sortFn;

    return methods;
  }

}
