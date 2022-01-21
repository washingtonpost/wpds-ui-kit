localdev-storybook-in-nextjs:
	npx start-storybook -p 6006 --preview-url=/storybook/iframe.html --modern --quiet --ci --force-build-preview

build: 
	npx prettier --write .
	lerna run build --stream
	npx build-storybook --output-dir ./ssr-testing/public/storybook --preview-url /storybook/iframe.html

all-dev:
	npx concurrently -n 'workspaces,playroom,storybook,website' 'npm run dev --workspaces' 'npm run playroom:start' 'make localdev-storybook-in-nextjs' 'npm run website:dev'

start-storybook:
	start-storybook -p 6006 --modern --quiet --ci

experimental-version:
	npx lerna version --conventional-commits --conventional-prerelease --preid=experimental --sign-git-tag=experimental --no-changelog --yes

experimental-publish:
	npx lerna publish from-package --dist-tag experimental --yes

main-publish: 
	npx lerna publish from-git --yes --no-git-reset --no-verify-access

main-version:
	npx lerna version --conventional-commits --yes --conventional-graduate --create-release github

# create experimental release
experimental-release:
	make experimental-version
	npm run build
	make experimental-publish

# create command for plop templates
new-component:
	npx plop --plopfile ./scripts/plopfile.js
	npx lerna link --force-local
	npm run bootstrap