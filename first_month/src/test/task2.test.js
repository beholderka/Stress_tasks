const {} = require('../scripts/task2')

describe('isOdd',()=>{
    test('to be define',()=>{
        expect((7).isOdd).toBeDefined();
    })
    test('7',()=>{
        expect((7).isOdd()).toBe(true);
    })
    test('8',()=>{
        expect((8).isOdd()).toBe(false);
    })
})