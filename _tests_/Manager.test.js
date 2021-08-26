const Manager = require('../lib/manager');

describe('Manager', ()=>{
    it('sets office number', ()=>{
        const testOffice = 44;
        const testValue = new Manager('name', 1, 'email', testOffice);
        expect(testValue.officeNum).toEqual(testOffice);
    })
    it('getRole() returns Manager', ()=>{
        const testValue = new Manager();
        expect(testValue.getRole()).toBe('Manager');
    })
    it('getOfficeNumber() returns office number', ()=>{
        const testValue = new Manager('name', 1, 'email', 44);
        expect(testValue.getOfficeNumber()).toEqual(44);
    })
})