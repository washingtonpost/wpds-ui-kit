import { DropdownMenu as Component, _RadixDropdownMenu as ComponentPieces } from "./DropdownMenu";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "DropdownMenu",
    component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (
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
        <Component>
            <ComponentPieces.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                    {/* <Menu /> */}
                </button>
            </ComponentPieces.Trigger>

            <ComponentPieces.Portal>
                <ComponentPieces.Content className="DropdownMenuContent" sideOffset={5}>
                    <ComponentPieces.Item className="DropdownMenuItem">
                        New Tab <div className="RightSlot">⌘+T</div>
                    </ComponentPieces.Item>
                    <ComponentPieces.Item className="DropdownMenuItem">
                        New Window <div className="RightSlot">⌘+N</div>
                    </ComponentPieces.Item>
                    <ComponentPieces.Item className="DropdownMenuItem" disabled>
                        New Private Window <div className="RightSlot">⇧+⌘+N</div>
                    </ComponentPieces.Item>
                    <ComponentPieces.Sub>
                        <ComponentPieces.SubTrigger className="DropdownMenuSubTrigger">
                            More Tools
                            <div className="RightSlot">
                                <div />
                            </div>
                        </ComponentPieces.SubTrigger>
                        <ComponentPieces.Portal>
                            <ComponentPieces.SubContent
                                className="DropdownMenuSubContent"
                                sideOffset={2}
                                alignOffset={-5}
                            >
                                <ComponentPieces.Item className="DropdownMenuItem">
                                    Save Page As… <div className="RightSlot">⌘+S</div>
                                </ComponentPieces.Item>
                                <ComponentPieces.Item className="DropdownMenuItem">Create Shortcut…</ComponentPieces.Item>
                                <ComponentPieces.Item className="DropdownMenuItem">Name Window…</ComponentPieces.Item>
                                <ComponentPieces.Separator className="DropdownMenu.Separator" />
                                <ComponentPieces.Item className="DropdownMenuItem">Developer Tools</ComponentPieces.Item>
                            </ComponentPieces.SubContent>
                        </ComponentPieces.Portal>
                    </ComponentPieces.Sub>

                    <ComponentPieces.Separator className="DropdownMenuSeparator" />

                    <ComponentPieces.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={true}
                        onCheckedChange={() => { }}
                    >
                        <ComponentPieces.ItemIndicator className="DropdownMenuItemIndicator">
                            <div />
                        </ComponentPieces.ItemIndicator>
                        Show Bookmarks <div className="RightSlot">⌘+B</div>
                    </ComponentPieces.CheckboxItem>
                    <ComponentPieces.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={true}
                        onCheckedChange={() => { }}
                    >
                        <ComponentPieces.ItemIndicator className="DropdownMenuItemIndicator">
                            <div />
                        </ComponentPieces.ItemIndicator>
                        Show Full URLs
                    </ComponentPieces.CheckboxItem>

                    <ComponentPieces.Separator className="DropdownMenuSeparator" />

                    <ComponentPieces.Label className="DropdownMenuLabel">People</ComponentPieces.Label>
                    <ComponentPieces.RadioGroup value={""} onValueChange={() => { }}>
                        <ComponentPieces.RadioItem className="DropdownMenuRadioItem" value="pedro">
                            <ComponentPieces.ItemIndicator className="DropdownMenuItemIndicator">
                                {/* <StarFull /> */}
                            </ComponentPieces.ItemIndicator>
                            Pedro Duarte
                        </ComponentPieces.RadioItem>
                        <ComponentPieces.RadioItem className="DropdownMenuRadioItem" value="colm">
                            <ComponentPieces.ItemIndicator className="DropdownMenuItemIndicator">
                                {/* <StarFull /> */}
                            </ComponentPieces.ItemIndicator>
                            Colm Tuite
                        </ComponentPieces.RadioItem>
                    </ComponentPieces.RadioGroup>

                    <ComponentPieces.Arrow className="DropdownMenuArrow" />
                </ComponentPieces.Content>
            </ComponentPieces.Portal>
        </Component>
    );


};

export const DropdownMenu = Template.bind({});

DropdownMenu.args = {
    children: "Text button",
};
