import { test, expect } from '@playwright/test';

test('Відкрити Серіал Корпорация заговор', async ({ page }) => {
  // Перейди на сторінку логіну
  await page.goto('https://kinokong.day/59242-korporaciya-zagovor-2021-1-2-sezon.html');

  // Очікуй, що з'явиться поле логіна
  const searchInput = page.locator('//*[@id="player"]/div/div[2]');
  // await expect(searchInput).toBeVisible();
  await searchInput.click();

});

test('Відкрити сайт https://demo.playwright.dev/todomvc', async ({ page }) => {
  // Перейди на сторінку логіну
  await page.goto('https://demo.playwright.dev/todomvc');

  // Очікуй, що з'явиться поле логіна
  const searchInput = page.locator('//input[@placeholder="What needs to be done?"]');
  // await expect(searchInput).toBeVisible();
  await searchInput.fill("Learn TS")
  await page.keyboard.press("Enter")
  await searchInput.fill("Practice Playwright")
  await page.keyboard.press("Enter")
  await searchInput.fill("Write tests")
  await page.keyboard.press("Enter")
  const textInSite = page.locator('//label[text() = "Practice Playwright"]')
  await textInSite.hover();
  const del = page.locator('(//button[@aria-label="Delete" and contains(@class, "destroy")])[2]');

  await del.click()
   await page.waitForTimeout(100000)
  await page.keyboard.press("Enter")


});
test('Відкрити сторінку ', async ({ page }) => {
  // Перейди на сторінку логіну
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Очікуй, що з'явиться поле логіна
  const searchInput = page.locator('//h1[text()= "todos"]');
  await expect(searchInput).toBeVisible();


});

test('Введення тексту у поле', async ({ page }) => {
  // Перейди на сторінку логіну
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Очікуй, що з'явиться поле логіна
  const searchInput = page.locator('//input[@placeholder= "What needs to be done?"]');
  await searchInput.fill("Learn Playwright")
  await page.keyboard.press("Enter")
  const get = page.locator('//label[text()= "Learn Playwright"]');
  await expect(get).toBeVisible
});

test('Натиснення на чекбокс', async ({ page }) => {
  // Перейди на сторінку логіну
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Очікуй, що з'явиться поле логіна
  const searchInput = page.locator('//input[@placeholder= "What needs to be done?"]');
  await searchInput.fill("Write tests")
  await page.keyboard.press("Enter")
  const get = page.locator('//label[text()= "Write tests"]');
  await get.hover()
  const checkbox = page.locator('(//input[@type= "checkbox"])[2]');
  await checkbox.click()

});

test('Видалення елемента', async ({ page }) => {
  // Перейди на сторінку логіну
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Очікуй, що з'явиться поле логіна
  const searchInput = page.locator('//input[@placeholder= "What needs to be done?"]');
  await searchInput.fill("Write tests")
  await page.keyboard.press("Enter")
  const get = page.locator('//label[text()= "Write tests"]');
  await get.hover()
  const checkbox = page.locator('//button[@aria-label= "Delete"]');
  await checkbox.click()

});

test('Відкрити сторінку  new', async ({ page }) => {
  // Перейди на сторінку логіну
  await page.goto('https://playwright.dev/java/');

  const buttonDocs = page.locator('//a[text() = "Docs"]');
  await buttonDocs.click()
  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');


});

test('Перевірка помилки (negative case)', async ({ page }) => {
  // Перейди на сторінку логіну
  await page.goto(' https://the-internet.herokuapp.com/login');
  const login = page.locator('//input[@type="text"]');
  const pass = page.locator('//input[@type="password"]');
  const error = page.locator('//div[@id="flash"]');
  await login.fill("test")
  await pass.fill("test")
  await expect(error).toBeVisible
});