/* eslint-disable no-undef */
import * as utils from '../util'
describe('utils 테스트', () => {
  test('isNull 테스트1', () => {
    expect(utils.isNull('a')).toBeFalsy()
  })
  test('isNull 테스트2', () => {
    expect(utils.isNull('1')).toBeFalsy()
  })
  test('isNull 테스트3', () => {
    expect(utils.isNull('[]')).toBeFalsy()
  })
  test('isNull 테스트4', () => {
    expect(utils.isNull(undefined)).toBeTruthy()
  })
  test('isNull 테스트5', () => {
    expect(utils.isNull('')).toBeTruthy()
  })
  test('isNull 테스트6', () => {
    expect(utils.isNull(null)).toBeTruthy()
  })
  test('isNull 테스트7', () => {
    expect(utils.isNull('@')).toBeFalsy()
  })
})