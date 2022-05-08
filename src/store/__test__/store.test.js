/* eslint-disable no-undef */
import { store } from '../index'
describe('store 테스트', () => {
  test('alarm 테스트', () => {
    expect(store.state.toggle.alarm).toBe(true)
  })
  test('setting 테스트', () => {
    expect(store.state.toggle.setting).toBe(false)
  })
  test('chatSort 테스트', () => {
    expect(store.state.toggle.chatSort).toBe(false)
  })
})