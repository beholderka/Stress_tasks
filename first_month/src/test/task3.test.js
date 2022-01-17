const {every} = require('../scripts/task3')

describe('every',()=>{
    test('to be define',()=>{
        expect(every).toBeDefined();
    })
    test('true',()=>{
        expect(every([8, 2, 4], function (num){
            return num%2===0
        }) ).toBe(true);
    })
    test('empty array',()=>{
        expect(every([], function (num){
            return num%2===0
        }) ).toBe(false);
    })
    test('not function',()=>{
        expect(every([2,5,6], {}) ).toBe(false);
    })
    test('not array',()=>{
        expect(every(5, function (num){
            return num%2===0
        }) ).toBe(false);
    })
})