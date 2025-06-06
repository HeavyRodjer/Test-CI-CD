// pages/todo.page.ts
import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly input: Locator;
  readonly email: Locator
  readonly adress: Locator;
  readonly paramAdress: Locator;
  readonly buttonSumbit: Locator;
  readonly buttonToggle: Locator;
  readonly checkBoxDocuments: Locator;
  readonly value: Locator;
  readonly buttonAdd: Locator;
  readonly inputTable: Locator;
  readonly inputFirstName: Locator;
  readonly inputLastName: Locator;
  readonly inputsEmail: Locator;
  readonly inputAge: Locator;
  readonly inputSalary: Locator;
  readonly inputDepartment: Locator;
  readonly buttonsSubmit: Locator;
  readonly expectValue: Locator;


  constructor(page: Page) {
    this.page = page;
    this.input = page.locator('//input[@placeholder = "Full Name"]');
    this.email = page.locator('//input[@placeholder = "name@example.com"]');
    this.adress = page.locator('//textarea[@placeholder = "Current Address"]');
    this.paramAdress = page.locator('//textarea[@id= "permanentAddress"]');
    this.buttonSumbit = page.locator('//button[@id= "submit"]');
    this.buttonToggle = page.locator('//button[@title= "Toggle"]');
    this.checkBoxDocuments = page.locator('//span[text()= "Documents"]');
    this.value = page.locator('//span[text()= "You have selected :"]');
    this.buttonAdd = page.locator('//button[@id= "addNewRecordButton"]');
    this.inputTable = page.locator('//input[@placeholder = "Full Name"]');
    this.inputFirstName = page.locator('//input[@placeholder= "First Name"]');
    this.inputLastName = page.locator('//input[@placeholder= "Last Name"]');
    this.inputsEmail = page.locator('//input[@placeholder= "name@example.com"]');
    this.inputAge = page.locator('//input[@placeholder= "Age"]');
    this.inputSalary = page.locator('//input[@placeholder= "Salary"]');
    this.inputDepartment = page.locator('//input[@placeholder= "Department"]');
    this.buttonsSubmit = page.locator('//button[@id= "submit"]');
    this.expectValue = page.locator('//div[text()= "Roma"]');
    
  
    
  }

  async goto() {
    await this.page.goto('https://demoqa.com/text-box');
  }
  async gotoChekBox() {
    await this.page.goto('https://demoqa.com/checkbox');
  }
  async gotoTable() {
    await this.page.goto('https://demoqa.com/webtables');
  }
  

  async inputName(text: string) {
    await this.input.fill(text);

  }

  async inputEmail(text: string) {
    await this.email.fill(text);
  }

  async inputAdress(text: string) {
    await this.adress.fill(text);
  }
  async inputParamAdress(text: string){
    await this.paramAdress.fill(text)
  }

  async clickButtonSubmit() {
    await this.buttonSumbit.click();
  }
  async clickButtonTogle(){
    await this.buttonToggle.click()

  }
  async clickCheckBoxDocuments(){
    await this.checkBoxDocuments.click()
  }
  async expectTodoVisible() {
    await expect(this.value).toHaveText("You have selected :");
  }


  async clickButtonAdd(){
    await this.buttonAdd.click()
  }
  async fillInputFirstName(text: string){
    await this.inputFirstName.fill(text)
  }
  async fillInputLastName(text: string){
    await this.inputLastName.fill(text)
  }
  async fillEmail(text: string){
    await this.inputsEmail.fill(text)
  }
  async fillInputAge(text: string){
    await this.inputAge.fill(text)
  }
  async fillInputSalary(text: string){
    await this.inputSalary.fill(text)
  }
  async fillInputDepartment(text: string){
    await this.inputDepartment.fill(text)
  }
  async clickButtonsSubmit(){
    await this.buttonsSubmit.click()
  }
  async expectValues() {
    await expect(this.expectValue).toHaveText("Roma");
  }
 
}
