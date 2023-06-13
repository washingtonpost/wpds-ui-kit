import { DropdownMenu as Component } from "./DropdownMenu";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "DropdownMenu",
    component: Component,
} as ComponentMeta<typeof Component>


const Template: ComponentStory<typeof Component> = (
    { children, ...args },
    context
) => {
    return (
        <>
            <Component {...args} data-testid={`${context.theme}-skip-link`}>
                {children}
            </Component>
        </>
    );
};

export const Button = Template.bind({});

Button.args = {
    children: "Text button",
};
