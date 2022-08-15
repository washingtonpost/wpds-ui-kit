import * as React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "@testing-library/react";
import {
  useCallbackRef,
  useUncontrolledState,
  useControllableState,
} from "./hooks";

test("should use callback ref", () => {
  const moc = jest.fn();
  const { result } = renderHook(() => useCallbackRef(moc));
  result.current();
  expect(moc).toBeCalled();
});

test("should use uncontrolled state", () => {
  const defaultValue = "value";
  const handleChange = jest.fn();
  const { result } = renderHook(() =>
    useUncontrolledState({ defaultProp: defaultValue, onChange: handleChange })
  );
  const [, setValue] = result.current;

  act(() => {
    setValue("new value");
  });

  expect(handleChange).toBeCalled();
});

test("should use controllable state with controlled value", () => {
  const handleChange = jest.fn();
  const { result } = renderHook(() => {
    const [id] = React.useState("my-id");
    return useControllableState({
      prop: id,
      defaultProp: undefined,
      onChange: handleChange,
    });
  });
  const [, setValue] = result.current;
  act(() => {
    setValue("new-id");
  });

  expect(handleChange).toBeCalled();
});

test("should use controllable state with default value", () => {
  const id = "my-id";
  const handleChange = jest.fn();
  const { result } = renderHook(() =>
    useControllableState({
      prop: undefined,
      defaultProp: id,
      onChange: handleChange,
    })
  );
  const [, setValue] = result.current;
  act(() => {
    setValue("new-id");
  });

  expect(handleChange).toBeCalled();
});
