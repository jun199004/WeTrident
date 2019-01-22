/**
 * 主要负责用户交互逻辑，
 * 用户的交互产生的状态数据通过actions记录到store上，
 * 获取后台的数据需要通过actions或者Service(取决于是否需要记录到store)，避免在Scene里面直接调用后台
 *
 * Created by sines on 2018-02-23T10:25:07.640Z.
 */
import React, { Component } from 'react'
import connect from './actionsReducer'

// import PropTypes from 'prop-types'
// import ChartExampleService from './ChartExampleService'
// import {AppNavigator} from 'apps/webankPro/navigation'

class ChartExampleScene extends Component {
  render () {
    return null
  }
}

export default connect(ChartExampleScene)