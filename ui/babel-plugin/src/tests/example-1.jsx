import { styled } from "@washingtonpost/wpds-ui-kit";

const Button = styled("button", {
  color: "white",
  backgroundColor: "blue",
  fontSize: "16px",
  variants: {
    size: {
      small: {
        fontSize: "12px",
        lineHeight: "12px",
      },
      large: {
        fontSize: "20px",
        lineHeight: "20px",
      },
    },
    variant: {
      primary: {
        color: "white",
        backgroundColor: "blue",
      },
      secondary: {
        color: "blue",
        backgroundColor: "white",
      },
    },
  },
});

const App = () => {
  return (
    <div>
      <Button
        css={{
          color: "red",
          backgroundColor: "green",
        }}
        size={"small"}
        variant={"primary"}
        className="test-class"
      >
        Click me
      </Button>
    </div>
  );
};

export default App;
