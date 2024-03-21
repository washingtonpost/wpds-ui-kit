import { getScreenSize } from "./useResponsiveScreenSize";

describe("useResponsiveScreenSize", () => {
  it("should return the small screen size", () => {
    window.getComputedStyle = jest.fn().mockReturnValue({
      getPropertyValue: jest.fn().mockReturnValue("small"),
    });

    const screenSize = getScreenSize();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 320, // small screen size
    });

    expect(screenSize).toBe("small");
  });

  it("should return the medium screen size", () => {
    window.getComputedStyle = jest.fn().mockReturnValue({
      getPropertyValue: jest.fn().mockReturnValue("medium"),
    });

    const screenSize = getScreenSize();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 768, // medium screen size
    });

    expect(screenSize).toBe("medium");
  });

  it("should return the large screen size", () => {
    window.getComputedStyle = jest.fn().mockReturnValue({
      getPropertyValue: jest.fn().mockReturnValue("large"),
    });

    const screenSize = getScreenSize();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1024, // large screen size
    });

    expect(screenSize).toBe("large");
  });

  it("should return the xlarge screen size", () => {
    window.getComputedStyle = jest.fn().mockReturnValue({
      getPropertyValue: jest.fn().mockReturnValue("xlarge"),
    });

    const screenSize = getScreenSize();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1280, // xlarge screen size
    });

    expect(screenSize).toBe("xlarge");
  });

  it("should return the xxlarge screen size", () => {
    window.getComputedStyle = jest.fn().mockReturnValue({
      getPropertyValue: jest.fn().mockReturnValue("xxlarge"),
    });

    const screenSize = getScreenSize();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1440, // xxlarge screen size
    });

    expect(screenSize).toBe("xxlarge");
  });

  it("should return the unknown screen size", () => {
    window.getComputedStyle = jest.fn().mockReturnValue({
      getPropertyValue: jest.fn().mockReturnValue("unknown"),
    });

    const screenSize = getScreenSize();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 0, // unknown screen size
    });

    expect(screenSize).toBe("unknown");
  });
});
