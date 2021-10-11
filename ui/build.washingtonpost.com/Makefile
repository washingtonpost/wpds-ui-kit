localdev-storybook-in-nextjs:
	start-storybook -p 6006 --preview-url=/storybook/iframe.html --modern --quiet --ci --force-build-preview

build:
	build-storybook --preview-url=/storybook/iframe.html -o website/public/storybook --force-build-preview
	lerna run --scope website build
