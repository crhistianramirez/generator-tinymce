import * as Generator from 'yeoman-generator';
import { camelCase } from 'lodash';
import * as utils from '../utils';

export default class TypeScript extends Generator {
  public options: { name: string };
  constructor (args, opts) {
    super(args, opts);

    this.option('name', {
      type: String,
      description: 'Name of the plugin'
    });
  }

  public initializing () {
    const name = this.options.name;
    const camelName = camelCase(name);

    const ch = utils.copyHelper(this);

    ch('gitignore', '.gitignore');
    ch('tslint.json', 'tslint.json');
    ch('tsconfig.json', 'tsconfig.json');
    ch('typings.json', 'typings.json');
    ch('README.md', 'README.md', { name, camelName });
    ch('static/index.html', 'static/index.html', { camelName });
    ch('src/index.ts', 'src/index.ts', { camelName });
    ch('src/plugin.ts', 'src/plugin.ts', { name, camelName });
    ch('config/webpack.config.dev.js', 'config/webpack.config.dev.js');
    ch('config/webpack.config.prod.js', 'config/webpack.config.prod.js', { name });
    ch('_package.json', 'package.json', { name, camelName });
  }
}
