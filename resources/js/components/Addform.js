import React, {Component} from 'react';
import Axios from 'axios';

class Addform extends Component {
    constructor() {
        super();
        this.addRecord = this
            .addRecord
            .bind(this);
    }
    addRecord(e) {
        e.preventDefault();
        Axios.post('http://lareact.test/api/tasks', {  
                "title": e.target.task.value,
                "isCompleted": 0
            }) 
            .then(result => this.props.addRec(result.data))
            .catch(err => console.log(err));

    }
    render() {
        return (
            <form onSubmit={this.addRecord} className="mt5">
                <div className="form-group">
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Add new Task here..."
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add task" className="btn btn-primary btn-block"/>
                </div>
            </form>
        );
    }
}

export default Addform;