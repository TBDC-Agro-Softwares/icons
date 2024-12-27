import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

(async function () {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const files = readdirSync(join(__dirname, '..', '..', 'icons'));

  await Promise.all(
    files.map(async (fileName) => {
      const fileNameWithoutExtension = fileName.split('.')[0];
      const template = readFileSync(join(__dirname, 'TbdcIcon.vue'));
      const module = readFileSync(join(__dirname, '..', '..', 'icons', fileName));
      const svgAsString = module.toString().trim();
      const svgWithAttributes = svgAsString.replace('<svg ', '<svg :class="className" :style="color ? `color: ${color} !important` : undefined" ');
      const vueComponent = template.toString().replace('<IconComponent />', svgWithAttributes);
      const componentName = `TI${fileNameWithoutExtension}`;

      writeFileSync(join(__dirname, 'src', 'components', `${componentName}.vue`), vueComponent);
    })
  );
})();
