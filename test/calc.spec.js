/*
* File: calc.spec.js
* Author: Sztana Balázs
* Copyright: 2023, Sztana Balázs 
* Date: 2023-06-06
* Web: http://github.com/BalazsSztana
* Licenc: MIT
*
*/
describe('Számítás tesztelése', () => {
    it('Normál1: m: 1000, h: 2000: sz: 3000', () => {
        let actual = calcBodyIndex(1000, 2000, 3000);
        let expected = 5940;
        expect(actual).toBeCloseTo(expected, 0.9);
    });
   
});
