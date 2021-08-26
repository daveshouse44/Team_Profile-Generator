const Employee = require('../lib/employee');

describe('Employee', ()=>{
    it('can instantiate object', ()=>{
        const newEmployee = new Employee();
        expect(typeof newEmployee).toBe('object');
    })
    it('sets name', ()=>{
        const testName = 'Dave';
        const newEmployee = new Employee(testName, 1, 'email');
        expect(newEmployee.name).toBe(testName);
    })
    it('sets id', ()=>{
        const testId = '1';
        const newEmployee = new Employee('name', testId, 'email');
        expect(newEmployee.id).toBe(testId);
    })
    it('sets email', ()=>{
        const testEmail = 'dave@test.com';
        const newEmployee = new Employee('name', 1, testEmail);
        expect(newEmployee.email).toBe(testEmail);
    })
    it('gets name', ()=>{
        const testName = 'Dave';
        const newEmployee = new Employee(testName, 1, 'email');
        expect(newEmployee.getName()).toBe(testName);
    })
    it('gets id', ()=>{
        const testId = '1';
        const newEmployee = new Employee('name', testId, 'email');
        expect(newEmployee.getId()).toBe(testId);
    })
    it('gets email', ()=>{
        const testEmail = 'dave@test.com';
        const newEmployee = new Employee('name', 1, testEmail);
        expect(newEmployee.getEmail()).toBe(testEmail);
    })
    it('role returns "Employee"', ()=>{
        const newEmployee = new Employee();
        expect(newEmployee.getRole()).toBe("Employee");
    })
});