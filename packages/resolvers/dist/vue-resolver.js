/**
 * Vue resolver to use with Unplugin.
 * Docs: https://github.com/unplugin/unplugin-vue-components
 */
export function TbdcIconVueResolver() {
    return {
        type: 'component',
        resolve: (name) => {
            if (name.startsWith('TI')) {
                return { name, from: `@tbdc-agro-softwares/icons/vue` };
            }
        }
    };
}
