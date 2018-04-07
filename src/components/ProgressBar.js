import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'

import { noop } from '../utils.js'
import RangeControlOverlay from './RangeControlOverlay.js'

const { number, bool, func, object, string } = PropTypes

/**
 * Seekable progress bar
 *
 * TODO: Make use of the range input element?
 */
class ProgressBar extends Component {

  static propTypes = {
    totalTime: number,
    currentTime: number,
    isSeekable: bool,
    onSeek: func,
    onSeekStart: func,
    onSeekEnd: func,
    onIntent: func,
    className: string,
    style: object,
    childClasses: object,
    childrenStyles: object,
  }

  static defaultProps = {
    totalTime: Infinity,
    currentTime: 0,
    isSeekable: false,
    onSeek: noop,
    onSeekStart: noop,
    onSeekEnd: noop,
    onIntent: noop,
    className: null,
    style: {},
    childClasses: {},
    childrenStyles: {},
  }

  constructor (props) {
    super(props)

    this.progressBarEl = null

    this.state = {
      currentIntent: 0,
    }
  }

  @autobind
  storeRef (rootEl) {
    this.progressBarEl = rootEl
  }

  @autobind
  handleSeek (relativeTime) {
    const { isSeekable, onSeek, totalTime } = this.props

    if (isSeekable) {
      onSeek(relativeTime * totalTime)
    }
  }

  @autobind
  handleSeekStart (relativeTime) {
    const { isSeekable, onSeekStart, totalTime } = this.props

    if (isSeekable) {
      onSeekStart(relativeTime * totalTime)
    }
  }

  @autobind
  handleSeekEnd (relativeTime) {
    const { isSeekable, onSeekEnd, totalTime } = this.props

    if (isSeekable) {
      onSeekEnd(relativeTime * totalTime)
    }
  }

  @autobind
  handleIntent (relativeTime) {
    const { isSeekable, onIntent, totalTime } = this.props
    const intent = isSeekable ? relativeTime : 0

    this.setState({
      ...this.state,
      currentIntent: intent,
    })

    if (isSeekable) {
      onIntent(relativeTime * totalTime)
    }
  }

  render () {
    const {
      totalTime, currentTime, isSeekable,
      className, childClasses, style, childrenStyles,
    } = this.props
    const { currentIntent } = this.state

    const progressPercent = Math.min(100, 100 * currentTime / totalTime)
    const styleLeft = `${progressPercent}%`

    return (
      <div
        className={className}
        style={style}
        ref={this.storeRef}
      >
        <div
          className={childClasses.elapsed}
          style={{ width: styleLeft, ...(childrenStyles.elapsed || {}) }}
        />

        <div
          className={childClasses.intent}
          style={{ width: `${currentIntent * 100}%`, ...(childrenStyles.intent || {}) }}
        />

        <div
          className={childClasses.handle}
          style={{ left: styleLeft, ...(childrenStyles.handle || {}) }}
        />

        {isSeekable && (
          <RangeControlOverlay
            className={childClasses.seek}
            style={childrenStyles.RangeControlOverlay}
            bounds={() => this.progressBarEl.getBoundingClientRect()}
            onChange={this.handleSeek}
            onChangeStart={this.handleSeekStart}
            onChangeEnd={this.handleSeekEnd}
            onIntent={this.handleIntent}
          />
        )}
      </div>
    )
  }
}

export default ProgressBar
