const {} = require('../scripts/task2')

describe('isOld',()=>{
    test('to be define',()=>{
        expect((7).isOld).toBeDefined();
    })
    test('7',()=>{
        expect((7).isOld()).toBe(true);
    })
    test('8',()=>{
        expect((8).isOld()).toBe(false);
    })
})