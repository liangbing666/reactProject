import React, { Component, Fragment } from 'react'
import ChangeReportItem from './ChangeReportItem'
import axios from 'axios'



class ChangeReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '在这输入要添加的报告',
            list: []
        }
    }

    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5d57c7b810dfe022fe212b4a/domo06/addReport')
            .then((res) => {
                console.log('axios 获取数据成功:' + JSON.stringify(res))
                this.setState({
                    list: res.data.data
                })
            })
            .catch((error) => { console.log('axios 获取数据失败' + error) })
    }

    inputChange(e) {
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }

    //添加列表项
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })

    }

    //删除列表项
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="add">Add:</label>
                    <input id="add" className="input" value={this.state.inputValue} onChange={(e) => this.inputChange(e)} />
                    <button onClick={() => this.addList()}> 提交 </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <ChangeReportItem
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    deleteItem={() => this.deleteItem()}
                                />

                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }


}
export default ChangeReport 