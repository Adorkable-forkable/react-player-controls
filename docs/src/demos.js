import React, { PureComponent, useState } from 'react'
import ReactDOM from 'react-dom'
// // import PropTypes from 'prop-types'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.js'

import {
  Direction,
  FormattedTime,
  PlayerIcon,
  Slider,
} from '../../dist/index.js'

const WHITE_SMOKE = '#eee'
const GRAY = '#878c88'
const GREEN = '#72d687'

//
// FormattedTime demo
//
class FormattedTimeDemo extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      numSeconds: 100,
    }
  }

  render () {
    const { numSeconds } = this.state

    return (
      <div className="ComponentDemo FormattedTimeDemo">
        <pre className="ComponentDemo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              `<FormattedTime\n  numSeconds={this.state.numSeconds}\n/>`,
              Prism.languages.jsx
            )
          }} />
        </pre>

        <div className="ComponentDemo-settings">
          <label>
            <code>numSeconds</code>
            <input type="number" value={numSeconds} onChange={evt => this.setState({ numSeconds: evt.target.value })} />
          </label>
        </div>

        <div className="ComponentDemo-results">
          <FormattedTime numSeconds={numSeconds} />
        </div>
      </div>
    )
  }
}

//
// PlayerIcon demo
//
class PlayerIconDemo extends PureComponent {
  render () {
    return (
      <div className="ComponentDemo ButtonDemo">
        <pre className="ComponentDemo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              `<PlayerIcon.Play width={32} height={32} style={{ marginRight: 32 }} />\n` +
              `<PlayerIcon.Pause width={32} height={32} style={{ marginRight: 32 }} />\n` +
              `<PlayerIcon.Previous width={32} height={32} style={{ marginRight: 32 }} />\n` +
              `<PlayerIcon.Next width={32} height={32} style={{ marginRight: 32 }} />\n` +
              `<PlayerIcon.SoundOn width={32} height={32} style={{ marginRight: 32 }} />\n` +
              `<PlayerIcon.SoundOff width={32} height={32} style={{ marginRight: 32 }} />\n`,
              Prism.languages.jsx
            )
          }} />
        </pre>

        <div className="ComponentDemo-results">
          <PlayerIcon.Play width={32} height={32} style={{ marginRight: 32 }} />
          <PlayerIcon.Pause width={32} height={32} style={{ marginRight: 32 }} />
          <PlayerIcon.Previous width={32} height={32} style={{ marginRight: 32 }} />
          <PlayerIcon.Next width={32} height={32} style={{ marginRight: 32 }} />
          <PlayerIcon.SoundOn width={32} height={32} style={{ marginRight: 32 }} />
          <PlayerIcon.SoundOff width={32} height={32} style={{ marginRight: 32 }} />
        </div>
      </div>
    )
  }
}

//
// Slider demo
//
const SliderBar = ({ direction, value, style }) => (
  <div
    style={{
      position: 'absolute',
      background: GRAY,
      borderRadius: 4,
      ...(direction === Direction.HORIZONTAL ? {
        top: 'calc(50% - 4px)',
        left: 0,
        width: `${value * 100}%`,
        height: 8,
      } : {
        right: 0,
        bottom: 0,
        left: 'calc(50% - 4px)',
        width: 8,
        height: `${value * 100}%`,
      }),
      ...style,
    }}
  />
)

const SliderHandle = ({ direction, value, style }) => (
  <div
    style={Object.assign({}, {
      position: 'absolute',
      width: 16,
      height: 16,
      background: GREEN,
      borderRadius: '100%',
      transform: 'scale(1)',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.3)',
      }
    }, direction === Direction.HORIZONTAL ? {
      top: 'calc(50% - 4px)',
      left: `${value * 100}%`,
      marginTop: -4,
      marginLeft: -8,
    } : {
      left: 'calc(50% - 4px)',
      bottom: `${value * 100}%`,
      marginBottom: -8,
      marginLeft: -4,
    }, style)}
  />
)

function SliderDemo () {
  const [isEnabled, setIsEnabled] = useState(true)
  const [direction, setDirection] = useState(Direction.HORIZONTAL)
  const [value, setValue] = useState(0)
  const [lastValueStart, setLastValueStart] = useState(0)
  const [lastValueEnd, setLastValueEnd] = useState(0)
  const [lastIntent, setLastIntent] = useState(0)
  const [lastIntentStart, setLastIntentStart] = useState(0)
  const [lastIntentEndCount, setLastIntentEndCount] = useState(0)

  return (
    <div className="ComponentDemo SliderDemo">
      <pre className="ComponentDemo-code">
        <code className="language-jsx" dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `const SliderBar = ({ direction, value, style }) => <div style={computedStylesHere} />` +
            `\nconst SliderHandle = ({ direction, value, style }) => <div style={computedStylesHere} />` +
            `\n` +
            `\n<Slider\n  isEnabled={this.state.isEnabled}\n  direction={this.state.direction}\n  onChange={newValue => this.setState(() => ({ value: newValue }))}\n  onChangeStart={startValue => this.setState(() => ({ lastValueStart: startValue }))}\n  onChangeEnd={endValue => this.setState(() => ({ lastValueEnd: endValue }))}\n  onIntent={intent => this.setState(() => ({ lastIntent: intent }))}\n  onIntentStart={intent => this.setState(() => ({ lastIntentStart: intent }))}\n  onIntentEnd={() => this.setState(() => ({ lastIntentEndCount: this.state.lastIntentEndCount + 1 }))}\n  style={sliderStylesHere}\n>` +
            `\n  <SliderBar\n    direction={this.state.direction}\n    value={1}\n    style={{ background: #eee }}\n  />` +
            `\n  <SliderBar\n    direction={this.state.direction}\n    value={this.state.value}\n    style={{ background: this.state.isEnabled ? '#72d687' : '#878c88' }}\n  />` +
            `\n  <SliderBar\n    direction={this.state.direction}\n    value={this.state.lastIntent}\n    style={{ background: 'rgba(0, 0, 0, 0.05)' }}\n  />` +
            `\n  <SliderHandle\n    direction={this.state.direction}\n    value={this.state.value}\n    style={{ background: this.state.isEnabled ? '#72d687' : '#878c88' }}\n  />` +
            `\n</Slider>`,
            Prism.languages.jsx
          )
        }} />
      </pre>

      <div className="ComponentDemo-settings">
        <label>
          <input type="checkbox" checked={isEnabled} onChange={(evt) => setIsEnabled(!isEnabled)} />
          <code>isEnabled</code>
        </label>

        <label>
          <code>direction</code>
          <select value={direction} onChange={(evt) => setDirection(evt.target.value)}>
            <option value={Direction.HORIZONTAL}>Direction.HORIZONTAL</option>
            <option value={Direction.VERTICAL}>Direction.VERTICAL</option>
          </select>
        </label>

        <label>
          <code>value</code>
          <input type="number" value={value} min={0} max={1} step={0.01} onChange={evt => setValue(evt.target.value)} />
        </label>

        <label>
          <code>lastValueStart</code>
          <input type="number" disabled value={lastValueStart} />
        </label>

        <label>
          <code>lastValueEnd</code>
          <input type="number" disabled value={lastValueEnd} />
        </label>

        <label>
          <code>lastIntent</code>
          <input type="number" disabled value={lastIntent} />
        </label>

        <label>
          <code>lastIntentStart</code>
          <input type="number" disabled value={lastIntentStart} />
        </label>

        <label>
          <code>lastIntentEndCount</code>
          <input type="number" disabled value={lastIntentEndCount} />
        </label>
      </div>

      <div className="ComponentDemo-results">
        <Slider
          isEnabled={isEnabled}
          direction={direction}
          onChange={setValue}
          onChangeStart={setLastValueStart}
          onChangeEnd={setLastValueEnd}
          onIntent={setLastIntent}
          onIntentStart={setLastIntentStart}
          onIntentEnd={() => setLastIntentEndCount(lastIntentEndCount + 1)}
          style={{
            width: direction === Direction.HORIZONTAL ? 200 : 24,
            height: direction === Direction.HORIZONTAL ? 24 : 130,
            // borderRadius: 4,
            // background: WHITE_SMOKE,
            transition: direction === Direction.HORIZONTAL ? 'width 0.1s' : 'height 0.1s',
            cursor: isEnabled === true ? 'pointer' : 'default',
          }}
        >
          <SliderBar direction={direction} value={1} style={{ background: WHITE_SMOKE }} />
          <SliderBar direction={direction} value={value} style={{ background: isEnabled ? GREEN : GRAY }} />
          <SliderBar direction={direction} value={lastIntent} style={{ background: 'rgba(0, 0, 0, 0.05)' }} />
          <SliderHandle direction={direction} value={value} style={{ background: isEnabled ? GREEN : GRAY }} />
        </Slider>
      </div>
    </div>
  )
}

ReactDOM.render(<FormattedTimeDemo />, document.querySelector('.component-demo[data-component="FormattedTime"]'))
ReactDOM.render(<PlayerIconDemo />, document.querySelector('.component-demo[data-component="PlayerIcon"]'))
ReactDOM.render(<SliderDemo />, document.querySelector('.component-demo[data-component="Slider"]'))
