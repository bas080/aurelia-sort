import {SortValueConverter, Config} from '../src/aurelia-sort';
//import {Container} from 'aurelia-dependency-injection';

describe('aurelia-sort', function() {
  // describe('configure()', function() {
  //   it('Should call configure with a function', function() {
  //     configure(()=>{
  //       expect(true).toBe(true);
  //     });
  //   });
  // });
  //
  let sort;
  let config;

  beforeEach(() => {
    config = new Config();
    sort   = new SortValueConverter(config);
  });

  it('assign config to config', () => {
    expect(sort.config).toBe(config);
  });

  it('valueFn returns a function', () => {
    expect(typeof sort.valueFn({})).toBe('function');
  });

  it('has alphanumeric as default method', () => {
    expect(config.defaults.method).toBe('alphanumeric');
  });

  it('sorts using the defaults', () => {
    expect(sort.toView([3,2,4,1])).toEqual([1,2,3,4]);
  });
});
