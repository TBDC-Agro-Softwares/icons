import { readdirSync, renameSync, rmSync } from 'fs';
import { join } from 'path';

(function () {
  const files = readdirSync(join(import.meta.dirname, 'build'));

  files.map((fileName) => {
    if (fileName.endsWith('.js')) {
      const fileNameWithoutExtension = fileName.split('.')[0];
      const oldPath = join(import.meta.dirname, 'build', fileName);
      const newPath = join(import.meta.dirname, 'dist', `${fileNameWithoutExtension}.cjs`);
      renameSync(oldPath, newPath);
    }
  });

  rmSync(join(import.meta.dirname, 'build'), { recursive: true, force: true });
  rmSync(join(import.meta.dirname, 'dist', 'tsconfig.esm.tsbuildinfo'));
})();
