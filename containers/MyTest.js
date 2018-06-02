import React, {Component} from 'react'
import {connect} from 'react-redux'

class MyTest extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        465
      </div>
    )
  }
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps)(MyTest)
