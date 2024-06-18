import { test, expect } from "@playwright/test";

const workingExamplePage = "/resources/working-examples";

test.describe("errors should show", () => {
  test("in required fields when left empty and form is submitted", async ({
    page,
  }) => {
    await page.goto(workingExamplePage);

    await page.locator("[type=submit]").click();

    await expect(page.locator("text=First Name is required")).toBeVisible();
    await expect(page.locator("text=Last Name is required")).toBeVisible();
    await expect(page.locator("text=Email is required")).toBeVisible();
    await expect(page.locator("text=Phone number is required")).toBeVisible();
    await expect(page.locator("text=Address is required")).toBeVisible();
    await expect(page.locator("text=City is required")).toBeVisible();
    await expect(page.locator("text=Zipcode is required")).toBeVisible();
    await expect(page.locator("text=State is required")).toBeVisible();
    await expect(page.locator("text=Please select one")).toBeVisible();
  });

  test.describe("in email field when value entered", () => {
    test("does not pass @ or .com", async ({ page }) => {
      await page.goto(workingExamplePage);

      await page.locator("input[name='email']").fill("j");

      await page.locator("[type=submit]").click();

      await expect(
        page.locator("text=Entered value does not match email format")
      ).toBeVisible();
    });
    test("does not pass .com", async ({ page }) => {
      await page.goto(workingExamplePage);

      await page.locator("input[name='email']").fill("john.doe@washpost");

      await page.locator("[type=submit]").click();

      await expect(
        page.locator("text=Entered value does not match email format")
      ).toBeVisible();
    });
    test("does not pass @", async ({ page }) => {
      await page.goto(workingExamplePage);

      await page.locator("input[name='email']").fill("john.doewashpost.com");

      await page.locator("[type=submit]").click();

      await expect(
        page.locator("text=Entered value does not match email format")
      ).toBeVisible();
    });
  });

  test.describe("in phone number field when value entered", () => {
    test("has less than 10 digits", async ({ page }) => {
      await page.goto(workingExamplePage);

      await page.locator("input[name='phone']").fill("123456789");

      await page.locator("[type=submit]").click();

      await expect(
        page.locator("text=Please pass in a valid phone number")
      ).toBeVisible();
    });
    test("has too many digits", async ({ page }) => {
      await page.goto(workingExamplePage);

      await page.locator("input[name='phone']").fill("1234567890112");

      await page.locator("[type=submit]").click();

      await expect(
        page.locator("text=Please pass in a valid phone number")
      ).toBeVisible();
    });
    test("passes in a letter", async ({ page }) => {
      await page.goto(workingExamplePage);

      await page.locator("input[name='phone']").fill("123456789a");
      await page.locator("[type=submit]").click();
      await expect(
        page.locator("text=Please pass in a valid phone number")
      ).toBeVisible();
    });
  });
});

test.describe("no errors should show", () => {
  test("in required fields when filled and form is submitted", async ({
    page,
  }) => {
    await page.goto(workingExamplePage);

    await page.locator("input[name='firstName']").fill("John");
    await page.locator("input[name='lastName']").fill("Doe");
    await page.locator("input[name='email']").fill("john.doe@washpost.com");
    await page.locator("input[name='phone']").fill("1231231234");
    await page.locator("input[name='address']").fill("123 Street");
    await page.locator("input[name='city']").fill("New York");
    await page.locator("input[name='zip']").fill("10001");
    await page.locator("select").selectOption("New York");
    await page.locator("input[name='password']").fill("Password1!");
    await page.locator("input[name='password2']").fill("Password1!");
    await page.locator("textarea[name='notes']").fill("Notes go here");
    // select a radio button
    await page.getByLabel("Instagram").check();
    await page.locator("[role='checkbox']").check();

    await page.locator("[type=submit]").click();

    await expect(page.locator("text=First Name is required")).not.toBeVisible();
    await expect(page.locator("text=Last Name is required")).not.toBeVisible();
    await expect(page.locator("text=Email is required")).not.toBeVisible();
    await expect(
      page.locator("text=Phone number is required")
    ).not.toBeVisible();
    await expect(page.locator("text=Address is required")).not.toBeVisible();
    await expect(page.locator("text=City is required")).not.toBeVisible();
    await expect(page.locator("text=Zipcode is required")).not.toBeVisible();
    await expect(page.locator("text=State is required")).not.toBeVisible();
    await expect(page.locator("text=Please select one")).not.toBeVisible();
  });

  test("when Reset Form button is pressed", async ({ page }) => {
    await page.goto(workingExamplePage);

    await page.locator("[type=submit]").click();

    await expect(page.locator("text=First Name is required")).toBeVisible();

    await page.locator("text=Reset Form").click();

    await expect(page.locator("text=First Name is required")).not.toBeVisible();
  });
});
