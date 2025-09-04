import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // 👇 Add this line to allow explicit any
      "@typescript-eslint/no-explicit-any": "off",
      // Relax no-unused-vars
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_", // allow unused function args if prefixed with _
          varsIgnorePattern: "^_", // allow unused vars if prefixed with _
          caughtErrorsIgnorePattern: "^_", // allow unused catch(err) if named _err
        },
      ],
    },
  },
];

export default eslintConfig;
