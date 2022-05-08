/* eslint-disable no-undef */
import { store } from '../index'
describe('store 테스트', () => {
  test('alarm 테스트', () => {
    expect(store.state.toggle.alarm).toBeDefined()
  })
  test('setting 테스트', () => {
    expect(store.state.toggle.setting).toBeDefined()
  })
  test('chatSort 테스트', () => {
    expect(store.state.toggle.chatSort).toBeDefined()
  })
})