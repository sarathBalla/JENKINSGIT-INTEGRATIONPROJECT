import { test, expect } from '@playwright/test';

test('Practice Test 4', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/m');
    const title = await page.title();
    expect(page).toHaveTitle(title);
    console.log("Title is " + title);
    console.log("Practice Test 4 executed successfully");
});
test('Practice Test 5', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(page).toHaveTitle("Swag Labs");
    console.log("Title is " + title);
    console.log("Practice Test 5 executed successfully");
});
test('Practice Test 6', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(page).toHaveTitle(title);
    console.log("Title is " + title);
    console.log("Practice Test 6 executed successfully");
});