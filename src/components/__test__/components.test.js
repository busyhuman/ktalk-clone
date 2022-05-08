/* eslint-disable no-undef */
import Vue from 'vue'
import Alarm from '../modal/AlarmModalComponent.vue'
import ModalBack from '../modal/ModalBackComponent.vue'
import Chat from '../ChatComponent.vue'
import Nav from '../NavComponent.vue'
import NormalList from '../NormalListComponent.vue'
import Profile from '../ProfileComponent.vue'

jest.mock('../ChatComponent.vue')
jest.mock('../NavComponent.vue')
jest.mock('../NormalListComponent.vue')
jest.mock('../ProfileComponent.vue')

describe('Component', () => {
  test('[Snapshot Testing] Alarm', () => {
    const cmp = new Vue(Alarm).$mount()
    expect(cmp.$el).toMatchSnapshot()
  })

  test('[Snapshot Testing] ModalBack', () => {
    const cmp = new Vue(ModalBack).$mount()
    expect(cmp.$el).toMatchSnapshot()
  })

  test('[Snapshot Testing] Chat', () => {
    const cmp = new Vue(Chat).$mount()
    expect(cmp.$el).toMatchSnapshot()
  })

  test('[Snapshot Testing] Nav', () => {
    const cmp = new Vue(Nav).$mount()
    expect(cmp.$el).toMatchSnapshot()
  })

  test('[Snapshot Testing] NormalList', () => {
    const cmp = new Vue(NormalList).$mount()
    expect(cmp.$el).toMatchSnapshot()
  })

  test('[Snapshot Testing] Profile', () => {
    const cmp = new Vue(Profile).$mount()
    expect(cmp.$el).toMatchSnapshot()
  })
})

