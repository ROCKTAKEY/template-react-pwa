# Template for Creating React PWA App with Typescript
- `mui/material` and `mui/icons-material`
- `react-i18next`
- `eslint` and `stylelint`
- Automatic linting before commit (by `hunsky` and `lint-staged`)
- CI in Github Actions workflow

# Usage
1. Click "Use this template" and create your repository.
2. `git clone` and run `npm install` to create `package-lock.json`.
3. Change "name" on `pacakge.json` from "template-react-pwa" to your repository's name.
4. Commit `package-lock.json` and `package.json`.
5. Now Github Actions workflow should be successful and your repository is ready. Enjoy!

# Details
This package is created by `npx create-react-app . --template=cra-template-pwa-typescript`.

## Eslint
This package use these extends:
- `react-app`
- `react-app/jest`
- `plugin:react/recommended`
- `plugin:json/recommended`
- `airbnb`
- `airbnb-typescript`

`no-param-reassign.props`, `no-underscore-dangle` and `no-console` rules are nullified,
because codes created by `create-react-app` break these rules.
In addition, these rules, espacially `no-param-reassign.props` and `no-console`, seem to restrict our
coding too much.

# license
Note that this package is NOT licensed by AGPLv3. The LICENSE file is just a part of template.
This template is public domain except part of `create-react-app`. You can remove the AGPLv3 LICENSE file
when you use.
