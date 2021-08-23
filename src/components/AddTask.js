import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === '' || day === '') {
            alert('Please enter all fields')
        } else {
            onAdd({text, day, reminder})
            //console.log(newTask)
        }

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className="form-control">
                <label>Task Name</label>
                <input type="text" placeholder="Add Task" 
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Task" 
                value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control
            form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className='btn btn-block'/>
        </form>
    )
}

export default AddTask
