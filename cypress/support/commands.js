Cypress.Commands.add("visitStory", (componentName, storyName, options) => {
	// eslint-disable-next-line cypress/no-unnecessary-waiting
	return cy
		.visit(
			`iframe.html?id=ui-${componentName.toLowerCase()}--${storyName.toLowerCase()}`,
			options
		)
		.wait(0);
});
