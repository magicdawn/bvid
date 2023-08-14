import { describe, expect, it } from 'vitest'
import { BvCode, av2bv, bv2av } from '../src/index'

describe('BV id', () => {
  it('class usage', () => {
    expect(BvCode.av2bv(170001)).toEqual('BV17x411w7KC')
    expect(BvCode.bv2av('BV17x411w7KC')).toEqual(170001)
  })

  it('export av2bv', () => {
    expect(av2bv(170001)).toEqual('BV17x411w7KC')
  })

  it('export bv2av', () => {
    expect(bv2av('BV17x411w7KC')).toEqual(170001)
  })
})
