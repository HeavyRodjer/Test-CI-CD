// pages/todo.page.ts
import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly input: Locator;
  readonly todoLabel: (name: string) => Locator;
  readonly deleteButton: Locator;
  readonly checkbox: Locator;
  readonly hoverDelButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator('input[placeholder="What needs to be done?"]');
    this.todoLabel = (name: string) => page.locator(`//label[text()="${name}"]`);
    this.deleteButton = page.locator('button[aria-label="Delete"]');
    this.checkbox = page.locator('ul.todo-list input[type="checkbox"]').last();
    this.hoverDelButton = page.locator('//label[text()= "Delete me"]');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addTodo(text: string) {
    await this.input.fill(text);
    await this.page.keyboard.press('Enter');
  }

  async expectTodoVisible(text: string) {
    await expect(this.todoLabel(text)).toBeVisible();
  }

  async completeLastTodo() {
    await this.checkbox.click();
  }
  async hoverButton(){
    await this.hoverDelButton.hover()
  }

  async deleteTodo() {
    await this.deleteButton.click();
  }
}
