import { styled } from "@washingtonpost/wpds-ui-kit";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

// Parts of Radix's Toggle Group component
// When putting together, do <StyledToggleGroup><StyledItem/>...</StyledToggleGroup>

export const StyledToggleGroup = styled(ToggleGroup.Root, {
  display: "inline-flex",
  backgroundColor: "$transparent",
  borderRadius: 4,
  boxShadow: `0 2px 10px $subtle`,
  alignItems: "center",
});

export const StyledItem = styled(ToggleGroup.Item, {
  backgroundColor: "transparent",
  color: "$primary",
  height: 35,
  width: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid $subtle",
  "&:first-child": {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  "&:last-child": { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  "&:hover": { backgroundColor: "$green500" },
  "&[data-state=on]": {
    backgroundColor: "$green40",
    color: "$gray700",
    fontWeight: "$bold",
    border: "2px solid $green500",
  },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px $primary` },
});
