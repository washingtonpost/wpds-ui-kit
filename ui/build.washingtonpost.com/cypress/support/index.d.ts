declare namespace Cypress {
	interface Chainable<Subject> {
		visitStory(
			componentName: string,
			storyName: string,
			options?: Partial<Cypress.VisitOptions>
		): Chainable<any>;
	}
}
