import './App.css';
import taskList from './taskList';

function teskListV() {
    return(
        <div className='tasks-list-container'>
                <div className='tasks-list'>                  
                    { this.props.tasks.map(task => <taskList key={task.key} text={task.text} id={task.id} removeTask={this.props.removeTask}/>) }
                </div>
            </div>
    )
}

export default teskListV;