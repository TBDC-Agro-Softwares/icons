import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

(function () {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const pathToFile = join(__dirname, 'dist', 'index.js');

  const file = readFileSync(pathToFile);

  const newFile = file.toString().replace('vue-resolver', 'vue-resolver.js');

  writeFileSync(pathToFile, newFile);
})();
