/**
 * Vue resolver to use with Unplugin.
 * Docs: https://github.com/unplugin/unplugin-vue-components
 */
export declare function TbdcIconVueResolver(): {
    type: "component" | "directive";
    resolve: (name: string) => {
        name: string;
        from: string;
    } | undefined;
};
