import * as path from 'path';
import * as assert from 'yeoman-assert';
import { run } from 'yeoman-test';

describe('generator-tinymce:plugin', () => {
  before(() => {
    return (run as any)(path.join(__dirname, '../src/app'), {})
      .withPrompts({
        packageName: 'cool-plugin',
        type: 'plugin',
        description: 'my cool plugin'
      })
      .toPromise();
  });

  it('creates files', () => {
    assert.file([
      'package.json',
      'tslint.json',
      'tsconfig.json',
      'README.md',
      '.editorconfig',
      '.gitignore',
      'LICENSE.txt',
      'Gruntfile.js',
      'changelog.txt',
      'src/demo/html/index.html',
      'src/demo/ts/Demo.ts',
      'src/main/ts/Plugin.ts',
      'src/main/ts/core/AddTwo.ts',
      'src/test/ts/browser/PluginTest.ts',
      'src/test/ts/atomic/AddTwoTest.ts'
      // 'src/index.ts',
      // 'src/plugin.ts',
      // 'config/webpack.config.dev.js',
      // 'config/webpack.config.prod.js'
    ]);
  });

  it('has correct content in files', () => {
    assert.fileContent('package.json', '"name": "cool-plugin"');
    assert.fileContent('package.json', '"description": "my cool plugin"');
    assert.fileContent('package.json', '"license": "Apache-2.0"');
    assert.fileContent('README.md', '# coolPlugin');
    assert.fileContent('LICENSE.txt', 'Tiny Technologies Inc <is-accounts@ephox.com> (https://tiny.cloud/)');
    assert.fileContent('Gruntfile.js', 'cool-plugin/version.txt');
    assert.fileContent('src/demo/html/index.html', 'cool-plugin demo page');
    assert.fileContent('src/demo/ts/Demo.ts', 'code cool-plugin');
    assert.fileContent('src/demo/ts/Demo.ts', 'toolbar: \'cool-plugin\'');
    assert.fileContent('src/main/ts/Plugin.ts', 'tinymce.PluginManager.add(\'cool-plugin\', setup)');
    assert.fileContent('src/main/ts/Plugin.ts', 'editor.ui.registry.addButton(\'cool-plugin\',');
  });
});
