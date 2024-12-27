import { readdirSync, renameSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

(function () {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const files = readdirSync(join(__dirname, 'build'));

  files.map((fileName) => {
    if (fileName.endsWith('.js')) {
      const fileNameWithoutExtension = fileName.split('.')[0];
      const oldPath = join(__dirname, 'build', fileName);
      const newPath = join(__dirname, 'dist', `${fileNameWithoutExtension}.cjs`);
      renameSync(oldPath, newPath);
    }
  });

  rmSync(join(__dirname, 'build'), { recursive: true, force: true });
  rmSync(join(__dirname, 'dist', 'tsconfig.esm.tsbuildinfo'));
})();
