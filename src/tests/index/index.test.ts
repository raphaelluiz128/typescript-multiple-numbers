import generateNumbers from "../../index"

const expected = ['Team', 'Nama', 'Nama Team'];
//This test is focused to verify that expected data is being returned
test('Result expected', () => {
        expect(generateNumbers).toEqual(expect.arrayContaining(expected));
        console.log('ok, the words (Team, Nama, Nama Team) is returned.')
})