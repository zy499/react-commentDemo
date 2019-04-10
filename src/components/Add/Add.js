import React, {Component} from 'react';
import PropTypes from 'prop-types'
class Add extends Component {
    static propTypes = {
        addComment : PropTypes.func.isRequired
    }
    state = {
        userName : '',
        content : ''
    }
    handleNameChange = (e)=>{
        const userName = e.target.value
        this.setState({userName})
    }
    handleContChange = (e)=>{
        const content = e.target.value
        this.setState({content})
    }
    handleAdd = ()=>{
        //收集数据 并封装成comment对象
        const comment = this.state
        //调用方法更新数据
        this.props.addComment(comment)
        //清空输入框
        this.setState({
            userName : '',
            content : ''
        })
    }
    render() {
        const { userName,content } = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={userName}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={content}
                            onChange={this.handleContChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleAdd}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Add;