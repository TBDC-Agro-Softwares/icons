import { readdirSync, writeFileSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

(async function () {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const files = readdirSync(join(__dirname, 'src', 'components'));

  const tsFiles = files.filter((fileName) => fileName.endsWith('.ts'));
  const vueComponentFiles = files.filter((fileName) => fileName.endsWith('.vue'));

  tsFiles.forEach((fileName) => {
    rmSync(join(__dirname, 'src', 'components', fileName));
  });

  const dtsLines = vueComponentFiles.map((fileName) => {
    const fileNameWithoutExtension = fileName.split('.')[0];
    return `export { default as ${fileNameWithoutExtension} } from './${fileName}';`;
  });

  const groupedLines = dtsLines.reduce((accumulator, currentValue, index) => {
    const chunkIndex = Math.floor(index / 20);
    if (!accumulator[chunkIndex]) accumulator[chunkIndex] = [];

    accumulator[chunkIndex].push(currentValue);

    return accumulator;
  }, []);

  const exportLines = [];

  groupedLines.forEach((groupedLine, index) => {
    writeFileSync(join(__dirname, 'src', 'components', `index-${index}.ts`), groupedLine.join('\n'));
    exportLines.push(`export * from './components/index-${index}';`);
  });

  const template = exportLines.join('\n');

  writeFileSync(join(__dirname, 'src', 'index.ts'), template);
})();
