import generateNumbers from "../../index"

const expected = ['Team', 'Nama', 'Nama Team'];
//This test is focused to verify that expected data is being returned
describe('Basica features', () => {
        it('Find words Team, Nama, Nama Team', () => {
                expect(generateNumbers).toEqual(expect.arrayContaining(expected));
                console.log('ok, the words (Team, Nama, Nama Team) is returned.');
        }),
        it('Return length of array', () => {
                expect(generateNumbers).toHaveLength(100);
                console.log('ok, the length is = 100');
        }),
        it("Don't find wrong term 'NamaTeam'", () => {
                expect(generateNumbers).not.toEqual(expect.arrayContaining(['NamaTeam']));
                console.log('ok, not found the term NamaTeam');
        })     
})
