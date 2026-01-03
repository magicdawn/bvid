import { describe, expect, it } from 'vitest'
import { av2bv, bv2av, BvCode, type BV1String } from '../src/index'

const cases: [bvid: BV1String, avid: number][] = [
  ['BV17x411w7KC', 170001],

  // https://github.com/magicdawn/bilibili-app-recommend/issues/75
  // 首页推荐给的BV号是：BV1g34C1i7Bv 正确的BV号是：BV1vt421H7kC
  ['BV1vt421H7kC', 1800179727],
]

describe('bvid <-> avid', () => {
  it('BvCode usage', () => {
    cases.forEach(([bvid, avid]) => {
      expect(BvCode.av2bv(avid)).toEqual(bvid)
      expect(BvCode.bv2av(bvid)).toEqual(avid)
    })
  })

  it('export av2bv', () => {
    cases.forEach(([bvid, avid]) => {
      expect(av2bv(avid)).toEqual(bvid)
    })
  })

  it('export bv2av', () => {
    cases.forEach(([bvid, avid]) => {
      expect(bv2av(bvid)).toEqual(avid)
    })
  })
})
