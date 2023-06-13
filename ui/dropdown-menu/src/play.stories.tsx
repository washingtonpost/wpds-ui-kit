import { DropdownMenu as ComponentRoot, _RadixDropdownMenu as Component } from "./DropdownMenu";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "DropdownMenu",
    component: ComponentRoot,
} as ComponentMeta<typeof ComponentRoot>

const Template: ComponentStory<typeof ComponentRoot> = (
    { children, ...args },
    context
) => {

    // return (
    //     <>
    //         <Component {...args} data-testid={`${context.theme}-skip-link`}>
    //             {children}
    //         </Component>
    //     </>
    // );

    // const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    // const [urlsChecked, setUrlsChecked] = React.useState(false);
    // const [person, setPerson] = React.useState('pedro');

    return (
        <ComponentRoot>
            <Component.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                    {/* <Menu /> */}
                </button>
            </Component.Trigger>

            <Component.Portal>
                <Component.Content className="DropdownMenuContent" sideOffset={5}>
                    <Component.Item className="DropdownMenuItem">
                        New Tab <div className="RightSlot">⌘+T</div>
                    </Component.Item>
                    <Component.Item className="DropdownMenuItem">
                        New Window <div className="RightSlot">⌘+N</div>
                    </Component.Item>
                    <Component.Item className="DropdownMenuItem" disabled>
                        New Private Window <div className="RightSlot">⇧+⌘+N</div>
                    </Component.Item>
                    <Component.Sub>
                        <Component.SubTrigger className="DropdownMenuSubTrigger">
                            More Tools
                            <div className="RightSlot">
                                <div />
                            </div>
                        </Component.SubTrigger>
                        <Component.Portal>
                            <Component.SubContent
                                className="DropdownMenuSubContent"
                                sideOffset={2}
                                alignOffset={-5}
                            >
                                <Component.Item className="DropdownMenuItem">
                                    Save Page As… <div className="RightSlot">⌘+S</div>
                                </Component.Item>
                                <Component.Item className="DropdownMenuItem">Create Shortcut…</Component.Item>
                                <Component.Item className="DropdownMenuItem">Name Window…</Component.Item>
                                <Component.Separator className="DropdownMenu.Separator" />
                                <Component.Item className="DropdownMenuItem">Developer Tools</Component.Item>
                            </Component.SubContent>
                        </Component.Portal>
                    </Component.Sub>

                    <Component.Separator className="DropdownMenuSeparator" />

                    <Component.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={true}
                        onCheckedChange={() => { }}
                    >
                        <Component.ItemIndicator className="DropdownMenuItemIndicator">
                            <div />
                        </Component.ItemIndicator>
                        Show Bookmarks <div className="RightSlot">⌘+B</div>
                    </Component.CheckboxItem>
                    <Component.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={true}
                        onCheckedChange={() => { }}
                    >
                        <Component.ItemIndicator className="DropdownMenuItemIndicator">
                            <div />
                        </Component.ItemIndicator>
                        Show Full URLs
                    </Component.CheckboxItem>

                    <Component.Separator className="DropdownMenuSeparator" />

                    <Component.Label className="DropdownMenuLabel">People</Component.Label>
                    <Component.RadioGroup value={""} onValueChange={() => { }}>
                        <Component.RadioItem className="DropdownMenuRadioItem" value="pedro">
                            <Component.ItemIndicator className="DropdownMenuItemIndicator">
                                {/* <StarFull /> */}
                            </Component.ItemIndicator>
                            Pedro Duarte
                        </Component.RadioItem>
                        <Component.RadioItem className="DropdownMenuRadioItem" value="colm">
                            <Component.ItemIndicator className="DropdownMenuItemIndicator">
                                {/* <StarFull /> */}
                            </Component.ItemIndicator>
                            Colm Tuite
                        </Component.RadioItem>
                    </Component.RadioGroup>

                    <Component.Arrow className="DropdownMenuArrow" />
                </Component.Content>
            </Component.Portal>
        </ComponentRoot>
    );


};

export const DropdownMenu = Template.bind({});

DropdownMenu.args = {
    children: "Text button",
};
