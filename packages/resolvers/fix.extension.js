import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

(function () {
  const pathToFile = join(import.meta.dirname, 'dist', 'index.js');

  const file = readFileSync(pathToFile);

  const newFile = file.toString().replace('vue-resolver', 'vue-resolver.js');

  writeFileSync(pathToFile, newFile);
})();
