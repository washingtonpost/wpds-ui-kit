localdev-storybook-in-nextjs:
	start-storybook -p 6006 --preview-url=/storybook/iframe.html --modern --quiet --ci --force-build-preview

build:
	build-storybook --quiet --preview-url=/storybook/iframe.html -o website/public/storybook --force-build-preview
	lerna run build
	npm run playroom:build

all-dev:
	npx concurrently -n 'workspaces,playroom,storybook,website' 'npm run dev --workspaces' 'npm run playroom:start' 'make localdev-storybook-in-nextjs' 'npm run website:dev'

start-storybook:
	start-storybook -p 6006 --modern --quiet --ci

experimental-version:
	lerna version --conventional-commits --conventional-prerelease --preid=experimental --sign-git-tag=experimental --no-changelog --yes

experimental-publish:
	lerna publish from-git --canary --preid experimental --pre-dist-tag experimental --npm-tag experimental --yes

main-publish: 
	npx lerna publish from-git --yes --no-git-reset

main-version:
	npx lerna version --conventional-commits --yes --conventional-graduate --create-release github