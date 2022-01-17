const  {getDays} = require('../scripts/task1')

describe('getDays',()=>{
    test('to be define',()=>{
        expect(getDays).toBeDefined();
    })
    test('2022 1',()=>{
        expect(getDays(2022,1)).toBe(31)
    })
    test('2021 2',()=>{
        expect(getDays(2021,2)).toBe(28)
    })
    test('2024 2',()=>{
        expect(getDays(2024,2)).toBe(29)
    })
    test('2021 4',()=>{
        expect(getDays(2021,4)).toBe(30)
    })
    test('2024 February',()=>{
        expect(getDays(2024,'February')).toBe(29)
    })
    test('2024 ss',()=>{
        expect(getDays(2024,'ss')).toBe(false)
    })
    test('-325 February',()=>{
        expect(getDays(-324,'February')).toBe(false)
    })
})