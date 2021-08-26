const Intern = require('../lib/intern');

describe ('Intern', ()=>{
    it("getRole() returns 'Intern'", () => {
        const testValue = new Intern(); 
        expect(testValue.getRole()).toBe('Intern');
    })
    it("getSchool() sets school", () => {
        const testSchool = "Harvard";
        const testValue = new Intern('name', 1, 'email', testSchool); 
        expect(testValue.school).toEqual(testSchool);
    })
    it("getSchool() gets school", () => {
        const testValue = new Intern('name', 1, 'email', 'Harvard'); 
        expect(testValue.getSchool()).toBe('Harvard');
    })
})

