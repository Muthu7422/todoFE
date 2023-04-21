import './App.css';

function taskList() {
    return(
        <div className='task-container'>
                <div className='task-container-background' style={{backgroundColor: this.state.backgroundColor}}>
                    <div className='task-term-container'>
                        <h2 className='task-term'>{this.props.text}</h2>
                    </div>
                    <div className='buttons-container'>
                        <button className='done-button' onClick={this.markDone}>v</button>
                        <button className='delete-button' onClick={this.removeTask}>x</button>
                    </div>
                </div>
            </div>
    )
}

export default taskList;