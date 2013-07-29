# grunt-angular-gettext

> Tasks for extracting/compiling angular-gettext strings.

Used in combination with [`angular-gettext`](https://github.com/rubenv/angular-gettext).


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-angular-gettext --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-gettext');
```

## The "nggettext_extract" task

Extracts translations from your Angular.JS templates and generates a gettext-compatible `.pot` file.

In your project's Gruntfile, add a section named nggettext_extract` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  nggettext_extract: {
    pot: {
      'po/myApp.pot': ['src/views/*.html']
    },
  },
})
```

## Contributing
All code lives in the `src` folder and is written in CoffeeScript. Try to stick to the style conventions used in existing code.

Tests can be run using `grunt test`. A convenience command to automatically run the tests is also available: `grunt watch`. Please add test cases when adding new functionality: this will prove that it works and ensure that it will keep working in the future.
    
## License 

    (The MIT License)

    Copyright (C) 2013 by Ruben Vermeersch <ruben@savanne.be>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
