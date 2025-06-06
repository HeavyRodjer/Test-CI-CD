// tests/todo.spec.ts
import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/MainPage';

test('Add and verify todo', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo('Learn Playwright');
  await todoPage.expectTodoVisible('Learn Playwright');
});

test('Complete a todo', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo('Write tests');
  await todoPage.completeLastTodo();
});

test('Delete a todo', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo('Delete me');
  await todoPage.hoverButton()
  await todoPage.deleteTodo();
});
