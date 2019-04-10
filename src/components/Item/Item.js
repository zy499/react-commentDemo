import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Item.css'
class Item extends Component {
    state = {}
    static propTypes = {
        comment : PropTypes.object.isRequired,
        delComment : PropTypes.func.isRequired,
        index : PropTypes.number.isRequired,
    }
    handleDelComment = ()=>{
        const { comment,index,delComment } =  this.props
        if(window.confirm(`您确定删除${comment.userName}的评论吗?`))
        delComment(index)
    }
    render() {
        const { comment } = this.props
        return (
            <div>
                <li className="list-group-item">
                    <div className="handle">
                        <a href="javascript:;" onClick={this.handleDelComment}>删除</a>
                    </div>
                    <p className="user"><span >{comment.userName}</span>&emsp;<span className="pik">说:</span></p>
                    <p className="centence">{comment.content}</p>
                </li>
            </div>
        );
    }
}

export default Item;