experimental-version:
	npx lerna version --conventional-commits --conventional-prerelease  --preid=experimental --sign-git-tag=experimental --no-changelog --yes --force-publish

experimental-publish:
	npx lerna publish from-package --dist-tag experimental --yes --no-verify-access

main-publish:
	npx lerna publish from-package --yes --no-git-reset --no-verify-access

main-version:
	npx lerna version --conventional-commits --yes --force-publish --create-release github

# create experimental release
experimental-release:
	make experimental-version
	npm run turbo:build:force
	make experimental-publish

# checkout any uncommitted changes
boop-checkout:
	git checkout .

# create main release
main-release:
	make main-version
	npm run turbo:build:ui:force
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
