import { typeOf } from '@ember/utils';
import { module, test } from 'qunit';
import FileSaver from 'file-saver';

module('Unit | Vendor | shim', function () {
  test('it shim the saveAs library properly', function (assert) {
    assert.equal(typeOf(FileSaver), 'function', 'FileSaver is a function');
    assert.equal(
      typeOf(FileSaver.saveAs),
      'function',
      'FileSaver.saveAs is a function'
    );
  });
});
