import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Menu } from "@washingtonpost/wpds-assets";
import { ChevronRight } from "@washingtonpost/wpds-assets";
import { Check } from "@washingtonpost/wpds-assets";
import { StarFull } from "@washingtonpost/wpds-assets";
import { styled, theme } from "@washingtonpost/wpds-theme";

const NAME = "DropdownMenu";

const StyledDropdownMenu = styled(DropdownMenuPrimitive.Trigger, {
  appearance: "none",
  background: "transparent",
  border: "none",
  color: theme.colors.primary,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.space["025"],
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  lineHeight: theme.lineHeights.meta,
  padding: theme.space["050"],
});

export type DropdownMenuProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledDropdownMenu>;

export const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>
(({ children, ...props }, ref) => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');
  
    return (
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button className="IconButton" aria-label="Customise options">
            <Menu />
          </button>
        </DropdownMenuPrimitive.Trigger>
  
        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content className="DropdownMenuContent" sideOffset={5}>
            <DropdownMenuPrimitive.Item className="DropdownMenuItem">
              New Tab <div className="RightSlot">⌘+T</div>
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Item className="DropdownMenuItem">
              New Window <div className="RightSlot">⌘+N</div>
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Item className="DropdownMenuItem" disabled>
              New Private Window <div className="RightSlot">⇧+⌘+N</div>
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Sub>
              <DropdownMenuPrimitive.SubTrigger className="DropdownMenuSubTrigger">
                More Tools
                <div className="RightSlot">
                  <ChevronRight />
                </div>
              </DropdownMenuPrimitive.SubTrigger>
              <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.SubContent
                  className="DropdownMenuSubContent"
                  sideOffset={2}
                  alignOffset={-5}
                >
                  <DropdownMenuPrimitive.Item className="DropdownMenuItem">
                    Save Page As… <div className="RightSlot">⌘+S</div>
                  </DropdownMenuPrimitive.Item>
                  <DropdownMenuPrimitive.Item className="DropdownMenuItem">Create Shortcut…</DropdownMenuPrimitive.Item>
                  <DropdownMenuPrimitive.Item className="DropdownMenuItem">Name Window…</DropdownMenuPrimitive.Item>
                  <DropdownMenuPrimitive.Separator className="DropdownMenu.Separator" />
                  <DropdownMenuPrimitive.Item className="DropdownMenuItem">Developer Tools</DropdownMenuPrimitive.Item>
                </DropdownMenuPrimitive.SubContent>
              </DropdownMenuPrimitive.Portal>
            </DropdownMenuPrimitive.Sub>
  
            <DropdownMenuPrimitive.Separator className="DropdownMenuSeparator" />
  
            <DropdownMenuPrimitive.CheckboxItem
              className="DropdownMenuCheckboxItem"
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            >
              <DropdownMenuPrimitive.ItemIndicator className="DropdownMenuItemIndicator">
                <Check />
              </DropdownMenuPrimitive.ItemIndicator>
              Show Bookmarks <div className="RightSlot">⌘+B</div>
            </DropdownMenuPrimitive.CheckboxItem>
            <DropdownMenuPrimitive.CheckboxItem
              className="DropdownMenuCheckboxItem"
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            >
              <DropdownMenuPrimitive.ItemIndicator className="DropdownMenuItemIndicator">
                <Check />
              </DropdownMenuPrimitive.ItemIndicator>
              Show Full URLs
            </DropdownMenuPrimitive.CheckboxItem>
  
            <DropdownMenuPrimitive.Separator className="DropdownMenuSeparator" />
  
            <DropdownMenuPrimitive.Label className="DropdownMenuLabel">People</DropdownMenuPrimitive.Label>
            <DropdownMenuPrimitive.RadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenuPrimitive.RadioItem className="DropdownMenuRadioItem" value="pedro">
                <DropdownMenuPrimitive.ItemIndicator className="DropdownMenuItemIndicator">
                  <StarFull />
                </DropdownMenuPrimitive.ItemIndicator>
                Pedro Duarte
              </DropdownMenuPrimitive.RadioItem>
              <DropdownMenuPrimitive.RadioItem className="DropdownMenuRadioItem" value="colm">
                <DropdownMenuPrimitive.ItemIndicator className="DropdownMenuItemIndicator">
                  <StarFull />
                </DropdownMenuPrimitive.ItemIndicator>
                Colm Tuite
              </DropdownMenuPrimitive.RadioItem>
            </DropdownMenuPrimitive.RadioGroup>
  
            <DropdownMenuPrimitive.Arrow className="DropdownMenuArrow" />
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    );
  };