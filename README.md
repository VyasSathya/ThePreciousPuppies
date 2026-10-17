# The Precious Puppies

A historical React Web3 client for the Precious Puppies NFT project. The source combines a collection landing page, navigation, contract ABI files, and wallet-related dependencies.

## Repository map

- [src/App.js](src/App.js) and [src/routes.js](src/routes.js): application shell and routing
- [src/pages/precious-puppies/](src/pages/precious-puppies/): collection, project, team, roadmap, and page content
- [src/components/layout/](src/components/layout/): navigation and sidebar components
- [src/abi/](src/abi/): contract ABI files
- [craco.config.js](craco.config.js): PostCSS/Tailwind build customization

## Development commands

Install Node.js and npm, then install the declared dependencies:

```sh
npm install
npm start
```

The package uses CRACO over Create React App. It also declares:

```sh
npm run build
npm test
```

The `deploy` script builds and publishes through `gh-pages`; it is a publication action, not a required local setup step. No dependency installation, build, test, wallet interaction, or deployment was performed during this documentation review.

## Historical prototype status

Read the page/contract source before enabling wallet flows. Contract addresses, networks, sale state, provider availability, and mint behavior have not been validated against any current deployment. The repository should be understood as a source snapshot, not a currently operating sale or guaranteed working wallet application.

The original starter scaffold came from Create React App. The app retains React, Web3, MetaMask-detection, and Tailwind-related dependencies; that tooling attribution should be preserved when adapting the code.

## License and artwork

No root source license or complete artwork-provenance record is included. Rights to reuse collection imagery and any external contract/source material need to be established separately; public visibility alone does not grant those permissions.
