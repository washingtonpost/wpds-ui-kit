experimental-version:
	npx lerna version prerelease --force-publish --preid=alpha --sign-git-tag=alpha

experimental-publish:
	npx lerna publish from-package --dist-tag alpha 
	
main-publish:
	npx lerna publish from-package --yes --no-git-reset --no-verify-access

main-version:
	npx lerna version --conventional-commits --yes --force-publish --create-release github

# create experimental release
experimental-release:
	make experimental-version
	npm run build
	make experimental-publish

# checkout any uncommitted changes
boop-checkout:
	git checkout .

# create main release
main-release:
	make main-version
<<<<<<< Updated upstream
	npm run build
=======
	npm run turbo:build:ui:force
>>>>>>> Stashed changes
	make boop-checkout
	make main-publish
	npm install
	npm run format

# create commands for plop templates
new-component:
	npx plop --plopfile ./scripts/componentPlopfile.js

new-component-with-subcomponents:
	npx plop --plopfile ./scripts/componentWithSubcomponentsPlopfile.js

validate:
	npm run lint:check
	npm run format:check
	npm run test

v2-migrate-component:
	node scripts/move-component-to-new-dir.js $(componentName)
	npx storybook@latest migrate csf-2-to-3 --glob="./packages/kit/src/$(componentName)/*.stories.tsx"
	npx jscodeshift ./packages/kit/src/$(componentName) -t ./scripts/transform-wpds-imports.js --extensions=tsx
	npx react-codemod update-react-imports ./packages/kit/src
