// tests/todo.spec.ts
import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/SecondPage';

test('Add and verify todo', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.inputName("RomanQA")
  await todoPage.inputEmail("test@gmail.com")
  await todoPage.inputAdress("TestStreat")
  await todoPage.inputParamAdress("Testova21")
  await todoPage.clickButtonSubmit()
});
test('second task', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.gotoChekBox();

  await todoPage.clickButtonTogle()
  await todoPage.clickCheckBoxDocuments()
  await todoPage.expectTodoVisible()
});

test('three task', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.gotoTable();

  await todoPage.clickButtonAdd()
  await todoPage.fillInputFirstName("Roma")
  await todoPage.fillInputLastName("QA")
  await todoPage.fillEmail("test@gmail.com")
  await todoPage.fillInputAge("25")
  await todoPage.fillInputSalary("5000")
  await todoPage.fillInputDepartment("IT")
  await todoPage.clickButtonsSubmit()
});
