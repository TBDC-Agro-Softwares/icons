import { readdirSync, writeFileSync, rmSync } from 'fs';
import { join } from 'path';

(async function () {
  const files = readdirSync(join(import.meta.dirname, 'src', 'components'));

  const tsFiles = files.filter((fileName) => fileName.endsWith('.ts'));
  const vueComponentFiles = files.filter((fileName) => fileName.endsWith('.vue'));

  tsFiles.forEach((fileName) => {
    rmSync(join(import.meta.dirname, 'src', 'components', fileName));
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
    writeFileSync(join(import.meta.dirname, 'src', 'components', `index-${index}.ts`), groupedLine.join('\n'));
    exportLines.push(`export * from './components/index-${index}';`);
  });

  const template = `import '@/scss/_icons.scss';

${exportLines.join('\n')}`;

  writeFileSync(join(import.meta.dirname, 'src', 'index.ts'), template);
})();
