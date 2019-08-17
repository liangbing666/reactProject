import React, { Component } from 'react';
import PropTypes from 'prop-types'


class ChangeReportItem extends Component {

    handleClick() {
        this.props.deleteItem(this.props.index)
    }

    render() {
        return (
            <div onClick={() => this.handleClick()}>
                {this.props.avname}-Add——{this.props.content}
            </div>
        );
    }

}

ChangeReportItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

ChangeReportItem.defaultProps = {
    avname:'2019/8'
}


export default ChangeReportItem