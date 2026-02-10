import { test, expect } from '@playwright/test';

test('Practice Test 1', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(page).toHaveTitle(title);
    console.log("Title is " + title);
    console.log("Practice Test 1 executed successfully");
});

test('Practice Test 2', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(page).toHaveTitle(title);
    console.log("Title is " + title);
    console.log("Practice Test 2 executed successfully");
});

test('Practice Test 3', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(page).toHaveTitle(title);
    console.log("Title is " + title);
    console.log("Practice Test 3 executed successfully");
});