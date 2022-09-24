import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {title, id} = todoDetails

  const onClickDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="list-box">
      <p className="title-paragraph">{title}</p>
      <button type="button" className="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
