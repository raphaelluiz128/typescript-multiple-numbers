"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../../index"));
var expected = ['Team', 'Nama', 'Nama Team'];
//This test is focused to verify that expected data is being returned
test('Result expected', function () {
    expect(index_1.default).toEqual(expect.arrayContaining(expected));
    console.log('ok, the words (Team, Nama, Nama Team) is returned.');
});
