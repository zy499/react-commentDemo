import React, { Component } from 'react';
import Add from '../Add/Add';
import List from '../List/List';
class App extends Component {
    state = {
        comments:[
            {userName:'赵云',content:'打死旁边的胖子'},
            {userName:'马超',content:'打死旁边的胖子+111'}
        ]
    }
    addComment = (comment)=>{
        const { comments } = this.state
        //给comments数组新添数据
        comments.unshift(comment)
        //更新状态
        this.setState({comments})
    }
    delComment = (index)=>{
        const { comments } = this.state
        comments.splice(index,1)
        this.setState({comments})
    }
    render() {
        const { comments } = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-12">
                            <h1>请发表对React的评论</h1>
                        </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add addComment={ this.addComment } />
                    <List comments={ comments } delComment={ this.delComment } />
                </div>
            </div>
        );
    }
}

export default App;