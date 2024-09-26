import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

(async function () {
  const files = readdirSync(join(import.meta.dirname, '..', '..', 'icons'));

  await Promise.all(
    files.map(async (fileName) => {
      const fileNameWithoutExtension = fileName.split('.')[0];
      const template = readFileSync(join(import.meta.dirname, 'TbdcIcon.vue'));
      const module = readFileSync(join(import.meta.dirname, '..', '..', 'icons', fileName));
      const svgAsString = module.toString().trim();
      const svgWithAttributes = svgAsString.replace('<svg ', '<svg :class="className" :style="color ? `color: ${color} !important` : undefined" ');
      const vueComponent = template.toString().replace('<IconComponent />', svgWithAttributes);
      const componentName = `TI${fileNameWithoutExtension}`;

      writeFileSync(join(import.meta.dirname, 'src', 'components', `${componentName}.vue`), vueComponent);
    })
  );
})();
