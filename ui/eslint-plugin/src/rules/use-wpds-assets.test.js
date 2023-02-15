const rule = require("./use-wpds-assets");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("use-wpds-assets", rule, {
    valid: [
        {
            code: `
                import React from 'react';
                import { Time } from '@washingtonpost/wpds-assets';
            
                export default function MyComponent() { 
                    return <Time />;
                }
            `,
        },
    ],
    invalid: [
        {
            code: `
                import React from 'react';
            
                export default function MyComponent() {
                    return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 6C11.45 6 11 6.45 11 7V11H7C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13H11V17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17V13H17C17.55 13 18 12.55 18 12C18 11.45 17.55 11 17 11H13V7C13 6.45 12.55 6 12 6Z" fill="#000000"/>
                        </svg>
                    );
                }
            `,
            errors: [
                {
                    message: 'Please use "@washingtonpost/wpds-assets" instead of inline SVG.',
                },
            ],
        },
    ],
});