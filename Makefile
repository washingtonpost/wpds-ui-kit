experimental-version:
	npx lerna version --conventional-commits --conventional-prerelease  --preid=experimental --sign-git-tag=experimental --no-changelog --yes --force-publish

experimental-publish:
	npx lerna publish from-package --dist-tag experimental --yes --no-verify-access

main-publish: 
	npx lerna publish from-git --yes --no-git-reset --no-verify-access

main-version:
	npx lerna version --conventional-commits --conventional-graduate --yes --force-publish

# create experimental release
experimental-release:
	make experimental-version
	npm run turbo:build:force
	make experimental-publish

# create main release
main-release:
	make main-version
	npm run turbo:build:force
	make main-publish
	npm install

# create command for plop templates
new-component:
	npx plop --plopfile ./scripts/plopfile.js
	npx lerna link --force-local
	npm run bootstrap