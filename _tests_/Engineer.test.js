const Engineer = require('../lib/engineer');
    
describe('Engineer', () => {
    it("getRole() returns Engineer", () => {
        const testValue = new Engineer(); 
        expect(testValue.getRole()).toBe('Engineer');
    })
    it("getGitHub() gets username", () => {
        const testValue = new Engineer('Ricki', 1, 'Ricki@test.com', 'https://github.com/RickiHub'); 
        expect(testValue.getGithub()).toBe('https://github.com/RickiHub');
    })
    it("getGitHub() sets username", () => {
        const testValue = new Engineer('Ricki', 1, 'Ricki@test.com', "https://github.com/RickiHub"); 
        expect(testValue.github).toBe('https://github.com/RickiHub');
    });
});