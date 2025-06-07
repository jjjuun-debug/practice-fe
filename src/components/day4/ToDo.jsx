function ToDo ({isComplete, value, onClick}) {
  return (
    <div
      className="to-do"
      data-is-complete={isComplete}
      onClick={onClick}
    >
        
    <p>{isComplete && <span>&#10004;</span>}</p>
    <p>{value}</p>
    </div>
  )
}

export default ToDo;