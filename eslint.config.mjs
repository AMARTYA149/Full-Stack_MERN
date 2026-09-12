// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
    {
        files: ["**/*.{js,ts}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
        ],

        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },

        rules: {
            // "no-console": "error",
            // "dot-notation": "error",
            "@typescript-eslint/no-misused-promises": "off",
        },
    },
    {
        ignores: [
            "dist",
            "node_modules",
            "eslint.config.mjs",
            "jest.config.js",
        ],
    },
);
