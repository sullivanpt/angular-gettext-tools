'use strict';

var assert = require('assert');
var testExtract = require('./utils').testExtract;

describe('Extracting from Javascript', function () {
    it('supports gettext()', function () {
        var files = [
            'test/fixtures/source.js'
        ];
        var catalog = testExtract(files);

        assert.equal(catalog.items.length, 1);
        assert.equal(catalog.items[0].msgid, 'Hello');
        assert.equal(catalog.items[0].msgstr, '');
        assert.deepEqual(catalog.items[0].references, ['test/fixtures/source.js:2']);
    });

    it('supports this.gettext()', function () {
        var files = [
            'test/fixtures/source-property.js'
        ];
        var catalog = testExtract(files);

        assert.equal(catalog.items.length, 3);
        assert.equal(catalog.items[0].msgid, 'Hello');
        assert.equal(catalog.items[0].msgstr, '');
        assert.equal(catalog.items[1].msgid, 'Hello world');
        assert.equal(catalog.items[1].msgstr, '');
        assert.equal(catalog.items[2].msgid, 'World');
        assert.equal(catalog.items[2].msgstr, '');

        assert.equal(catalog.items[0].references.length, 1);
        assert.deepEqual(catalog.items[0].references, ['test/fixtures/source-property.js:5']);
        assert.deepEqual(catalog.items[1].references, ['test/fixtures/source-property.js:11']);
        assert.deepEqual(catalog.items[2].references, ['test/fixtures/source-property.js:6']);
    });

    it('supports gettextCatalog.getString()', function () {
        var files = [
            'test/fixtures/catalog.js'
        ];
        var catalog = testExtract(files);

        assert.equal(catalog.items.length, 3);
        assert.equal(catalog.items[0].msgid, 'Bird');
        assert.equal(catalog.items[0].msgid_plural, 'Birds');
        assert.equal(catalog.items[0].msgstr.length, 2);
        assert.equal(catalog.items[0].msgstr[0], '');
        assert.equal(catalog.items[0].msgstr[1], '');
        assert.deepEqual(catalog.items[0].references, ['test/fixtures/catalog.js:4']);

        assert.equal(catalog.items[1].msgid, 'Hello');
        assert.equal(catalog.items[1].msgstr, '');
        assert.deepEqual(catalog.items[1].references, ['test/fixtures/catalog.js:2']);

        assert.equal(catalog.items[2].msgid, 'Hello2');
        assert.equal(catalog.items[2].msgstr, '');
        assert.equal(catalog.items[2].msgctxt, 'Context');
        assert.deepEqual(catalog.items[2].references, ['test/fixtures/catalog.js:3']);
    });

    it('supports foo.gettextCatalog.getString()', function () {
        var files = [
            'test/fixtures/deeppath_catalog.js'
        ];
        var catalog = testExtract(files);

        assert.equal(catalog.items[0].msgid, 'Bird');
        assert.equal(catalog.items[0].msgid_plural, 'Birds');
        assert.equal(catalog.items[0].msgstr.length, 2);
        assert.equal(catalog.items[0].msgstr[0], '');
        assert.equal(catalog.items[0].msgstr[1], '');
        assert.deepEqual(catalog.items[0].references, ['test/fixtures/deeppath_catalog.js:5']);
        assert.equal(catalog.items.length, 2);
        assert.equal(catalog.items[1].msgid, 'Hello');
        assert.equal(catalog.items[1].msgstr, '');
        assert.deepEqual(catalog.items[1].references, ['test/fixtures/deeppath_catalog.js:4']);
    });

    it('supports invalid javascript syntax without exception', function () {
        var files = [
            'test/fixtures/deeppath_catalog_invalid.js'
        ];
        testExtract(files);
    });
});
