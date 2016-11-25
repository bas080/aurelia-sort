# aurelia-sort

This plugin is a standard
[aurelia value converter](http://aurelia.io/hub.html#/doc/article/aurelia/binding/latest/binding-value-converters/2)
which allows to sort arrays within your aurelia templates.


## Features

* Has a default builtin alphanumeric sort
* Allows registering other types of sorters
* Easily configure your desired defaults

## Configure

> main.js

```js

  .plugin('aurelia-sort', config => {

    // random sort order method
    config.registerMethod('random', () => Math.random());

    // you have access to the default options. You can overwrite them here.
    config.defaults.ignoreCase = false;

    // you can also overwrite the default valueFn completely. This function
    // returns a function which gets the values to be sorted.
    config.defaults.valueFn = options => {
      // make it ignore all options. These are the options that developerts get
      // to define in the template or view-model
      return (item) => item
    }
  });

```

## Usage

> my-component.html

```html

  <ol repeat.for="product of products | sort:{method: 'random'}">
    <li>${product.name}</li>
  </ol>

```

Or if you prefer defining the options in your view-model.

```js

export class MyComponentCustomElement {

  sortOptions: {
    ignoreCase: false
  };

  /* ... */

}

```

```html

  <ol repeat.for="product of products | sort:sortOptions">
    <li>${product.name}</li>
  </ol>

```

