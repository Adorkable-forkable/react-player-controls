import React from 'react'
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon'

chai.use(chaiEnzyme())

import PrevButton from '../src/components/PrevButton.js'

const noop = () => {}

describe('<PrevButton />', () => {

  it('should accept extra classes', () => {
    const classes = 'TestClass'

    let btn = mount(<PrevButton onClick={noop} extraClasses={classes} />)
    expect(btn.props().extraClasses).to.equal(classes)

    btn = shallow(<PrevButton onClick={noop} extraClasses={classes} />)
    expect(btn.props().className).to.contain(classes)
  })

  it('should accept custom styles', () => {
    const btn = shallow(<PrevButton style={{ fontSize: 100 }} onClick={noop} />)
    expect(btn.props().style).to.eql({ fontSize: 100 })
  })

  it('renders an icon per default', () => {
    const btn = mount(<PrevButton onClick={noop} />)
    expect(btn.find('.Icon')).to.have.length(1)
  })

  it('should trigger an onClick callback when clicked', () => {
    const callback = spy()
    const btn = mount(<PrevButton onClick={callback} />)

    btn.simulate('click')
    expect(callback.called).to.equal(false)

    btn.setProps({ onClick: callback, isEnabled: true })
    btn.simulate('click')
    expect(callback.called).to.equal(true)
  })

})
