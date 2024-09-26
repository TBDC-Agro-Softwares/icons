import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

(async function () {
  const files = readdirSync(join(import.meta.dirname, 'src', 'components'));

  const dtsLines = files.map((fileName) => {
    const fileNameWithoutExtension = fileName.split('.')[0];
    return `${fileNameWithoutExtension}: (typeof import('./${fileName}'))['default'];`;
  });

  const template = `declare module 'vue' {
interface GlobalComponents {
${dtsLines.join('\n')}
}
}`;

  writeFileSync(join(import.meta.dirname, 'dist', `index.d.ts`), template);
})();
