// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/projects/flixplus/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/projects/flixplus/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///D:/projects/flixplus/node_modules/unplugin-vue-router/dist/vite.mjs";
import AutoImport from "file:///D:/projects/flixplus/node_modules/unplugin-auto-import/dist/vite.js";
import { VueRouterAutoImports } from "file:///D:/projects/flixplus/node_modules/unplugin-vue-router/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/projects/flixplus/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      // global imports to register
      imports: [
        // presets
        "vue",
        "vue-router",
        VueRouterAutoImports,
        // custom
        {
          "@vueuse/core": [
            // named imports
            "useMouse",
            // import { useMouse } from '@vueuse/core',
            // alias
            ["useFetch", "useMyFetch"]
            // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          "axios": [
            // default imports
            ["default", "axios"]
            // import { default as axios } from 'axios',
          ],
          "[package-name]": [
            "[import-names]",
            // alias
            ["[from]", "[alias]"]
          ]
        }
      ],
      // Array of strings of regexes that contains imports meant to be filtered out.
      ignore: [
        "useMouse",
        "useFetch"
      ],
      // Enable auto import by filename for default module exports under directories
      defaultExportByFilename: false,
      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: "./auto-imports.d.ts",
      // Array of strings of regexes that contains imports meant to be ignored during
      // the declaration file generation. You may find this useful when you need to provide
      // a custom signature for a function.
      ignoreDts: [
        "ignoredFunction",
        /^ignore_/
      ],
      // Auto import inside Vue template
      // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
      vueTemplate: true,
      // Custom resolvers, compatible with `unplugin-vue-components`
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [
        /* ... */
      ],
      // Inject the imports at the end of other imports
      injectAtEnd: true,
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false,
        // Default `false`
        filepath: "./.eslintrc-auto-import.json",
        // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true
        // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    vue()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxmbGl4cGx1c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxcZmxpeHBsdXNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL2ZsaXhwbHVzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IFZ1ZVJvdXRlckF1dG9JbXBvcnRzIH0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBWdWVSb3V0ZXIoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIC8vIHRhcmdldHMgdG8gdHJhbnNmb3JtXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XG4gICAgICAgIC9cXC52dWUkLyxcbiAgICAgICAgL1xcLnZ1ZVxcP3Z1ZS8sIC8vIC52dWVcbiAgICAgICAgL1xcLm1kJC8sIC8vIC5tZFxuICAgICAgXSxcbiAgICBcbiAgICAgIC8vIGdsb2JhbCBpbXBvcnRzIHRvIHJlZ2lzdGVyXG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIC8vIHByZXNldHNcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtcm91dGVyJywgXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLCBcbiAgICAgICAgLy8gY3VzdG9tXG4gICAgICAgIHtcbiAgICAgICAgICAnQHZ1ZXVzZS9jb3JlJzogW1xuICAgICAgICAgICAgLy8gbmFtZWQgaW1wb3J0c1xuICAgICAgICAgICAgJ3VzZU1vdXNlJywgLy8gaW1wb3J0IHsgdXNlTW91c2UgfSBmcm9tICdAdnVldXNlL2NvcmUnLFxuICAgICAgICAgICAgLy8gYWxpYXNcbiAgICAgICAgICAgIFsndXNlRmV0Y2gnLCAndXNlTXlGZXRjaCddLCAvLyBpbXBvcnQgeyB1c2VGZXRjaCBhcyB1c2VNeUZldGNoIH0gZnJvbSAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgICdheGlvcyc6IFtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgaW1wb3J0c1xuICAgICAgICAgICAgWydkZWZhdWx0JywgJ2F4aW9zJ10sIC8vIGltcG9ydCB7IGRlZmF1bHQgYXMgYXhpb3MgfSBmcm9tICdheGlvcycsXG4gICAgICAgICAgXSxcbiAgICAgICAgICAnW3BhY2thZ2UtbmFtZV0nOiBbXG4gICAgICAgICAgICAnW2ltcG9ydC1uYW1lc10nLFxuICAgICAgICAgICAgLy8gYWxpYXNcbiAgICAgICAgICAgIFsnW2Zyb21dJywgJ1thbGlhc10nXSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICBcbiAgICAgIC8vIEFycmF5IG9mIHN0cmluZ3Mgb2YgcmVnZXhlcyB0aGF0IGNvbnRhaW5zIGltcG9ydHMgbWVhbnQgdG8gYmUgZmlsdGVyZWQgb3V0LlxuICAgICAgaWdub3JlOiBbXG4gICAgICAgICd1c2VNb3VzZScsXG4gICAgICAgICd1c2VGZXRjaCdcbiAgICAgIF0sXG4gICAgXG4gICAgICAvLyBFbmFibGUgYXV0byBpbXBvcnQgYnkgZmlsZW5hbWUgZm9yIGRlZmF1bHQgbW9kdWxlIGV4cG9ydHMgdW5kZXIgZGlyZWN0b3JpZXNcbiAgICAgIGRlZmF1bHRFeHBvcnRCeUZpbGVuYW1lOiBmYWxzZSxcbiAgICBcbiAgICAgIC8vIEF1dG8gaW1wb3J0IGZvciBtb2R1bGUgZXhwb3J0cyB1bmRlciBkaXJlY3Rvcmllc1xuICAgICAgLy8gYnkgZGVmYXVsdCBpdCBvbmx5IHNjYW4gb25lIGxldmVsIG9mIG1vZHVsZXMgdW5kZXIgdGhlIGRpcmVjdG9yeVxuICAgICAgZGlyczogW1xuICAgICAgICAvLyAnLi9ob29rcycsXG4gICAgICAgIC8vICcuL2NvbXBvc2FibGVzJyAvLyBvbmx5IHJvb3QgbW9kdWxlc1xuICAgICAgICAvLyAnLi9jb21wb3NhYmxlcy8qKicsIC8vIGFsbCBuZXN0ZWQgbW9kdWxlc1xuICAgICAgICAvLyAuLi5cbiAgICAgIF0sXG4gICAgXG4gICAgICAvLyBGaWxlcGF0aCB0byBnZW5lcmF0ZSBjb3JyZXNwb25kaW5nIC5kLnRzIGZpbGUuXG4gICAgICAvLyBEZWZhdWx0cyB0byAnLi9hdXRvLWltcG9ydHMuZC50cycgd2hlbiBgdHlwZXNjcmlwdGAgaXMgaW5zdGFsbGVkIGxvY2FsbHkuXG4gICAgICAvLyBTZXQgYGZhbHNlYCB0byBkaXNhYmxlLlxuICAgICAgZHRzOiAnLi9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgXG4gICAgICAvLyBBcnJheSBvZiBzdHJpbmdzIG9mIHJlZ2V4ZXMgdGhhdCBjb250YWlucyBpbXBvcnRzIG1lYW50IHRvIGJlIGlnbm9yZWQgZHVyaW5nXG4gICAgICAvLyB0aGUgZGVjbGFyYXRpb24gZmlsZSBnZW5lcmF0aW9uLiBZb3UgbWF5IGZpbmQgdGhpcyB1c2VmdWwgd2hlbiB5b3UgbmVlZCB0byBwcm92aWRlXG4gICAgICAvLyBhIGN1c3RvbSBzaWduYXR1cmUgZm9yIGEgZnVuY3Rpb24uXG4gICAgICBpZ25vcmVEdHM6IFtcbiAgICAgICAgJ2lnbm9yZWRGdW5jdGlvbicsXG4gICAgICAgIC9eaWdub3JlXy9cbiAgICAgIF0sXG4gICAgXG4gICAgICAvLyBBdXRvIGltcG9ydCBpbnNpZGUgVnVlIHRlbXBsYXRlXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3VuanMvdW5pbXBvcnQvcHVsbC8xNSBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3VuanMvdW5pbXBvcnQvcHVsbC83MlxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgXG4gICAgICAvLyBDdXN0b20gcmVzb2x2ZXJzLCBjb21wYXRpYmxlIHdpdGggYHVucGx1Z2luLXZ1ZS1jb21wb25lbnRzYFxuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydC9wdWxsLzIzL1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIC8qIC4uLiAqL1xuICAgICAgXSxcbiAgICBcbiAgICAgIC8vIEluamVjdCB0aGUgaW1wb3J0cyBhdCB0aGUgZW5kIG9mIG90aGVyIGltcG9ydHNcbiAgICAgIGluamVjdEF0RW5kOiB0cnVlLFxuICAgIFxuICAgICAgLy8gR2VuZXJhdGUgY29ycmVzcG9uZGluZyAuZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbiBmaWxlLlxuICAgICAgLy8gZXNsaW50IGdsb2JhbHMgRG9jcyAtIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3VzZXItZ3VpZGUvY29uZmlndXJpbmcvbGFuZ3VhZ2Utb3B0aW9ucyNzcGVjaWZ5aW5nLWdsb2JhbHNcbiAgICAgIGVzbGludHJjOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBEZWZhdWx0IGBmYWxzZWBcbiAgICAgICAgZmlsZXBhdGg6ICcuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJywgLy8gRGVmYXVsdCBgLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbmBcbiAgICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSwgLy8gRGVmYXVsdCBgdHJ1ZWAsICh0cnVlIHwgZmFsc2UgfCAncmVhZG9ubHknIHwgJ3JlYWRhYmxlJyB8ICd3cml0YWJsZScgfCAnd3JpdGVhYmxlJylcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdnVlKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9QLFNBQVMsZUFBZSxXQUFXO0FBRXZSLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyw0QkFBNEI7QUFOZ0gsSUFBTSwyQ0FBMkM7QUFTdE0sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBO0FBQUEsTUFFVCxTQUFTO0FBQUEsUUFDUDtBQUFBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BR0EsU0FBUztBQUFBO0FBQUEsUUFFUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxRQUVBO0FBQUEsVUFDRSxnQkFBZ0I7QUFBQTtBQUFBLFlBRWQ7QUFBQTtBQUFBO0FBQUEsWUFFQSxDQUFDLFlBQVksWUFBWTtBQUFBO0FBQUEsVUFDM0I7QUFBQSxVQUNBLFNBQVM7QUFBQTtBQUFBLFlBRVAsQ0FBQyxXQUFXLE9BQU87QUFBQTtBQUFBLFVBQ3JCO0FBQUEsVUFDQSxrQkFBa0I7QUFBQSxZQUNoQjtBQUFBO0FBQUEsWUFFQSxDQUFDLFVBQVUsU0FBUztBQUFBLFVBQ3RCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BR0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFHQSx5QkFBeUI7QUFBQTtBQUFBO0FBQUEsTUFJekIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLTjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0EsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0wsV0FBVztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBO0FBQUE7QUFBQSxNQUlBLGFBQWE7QUFBQTtBQUFBO0FBQUEsTUFJYixXQUFXO0FBQUE7QUFBQSxNQUVYO0FBQUE7QUFBQSxNQUdBLGFBQWE7QUFBQTtBQUFBO0FBQUEsTUFJYixVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUE7QUFBQSxRQUNULFVBQVU7QUFBQTtBQUFBLFFBQ1Ysa0JBQWtCO0FBQUE7QUFBQSxNQUNwQjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
