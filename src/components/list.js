import React, { useState, useContext, useEffect } from 'react'
import { SettingsContext } from '../context/context ';

function List(props) {

  const settingsContext = useContext(SettingsContext);
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(Math.ceil(props.list.length / settingsContext.perPage));



  useEffect(() => {
    let start = (currentPage - 1) * settingsContext.perPage;
    let end = start + settingsContext.perPage;
    setNumOfPages(Math.ceil(props.list.length / settingsContext.perPage));
    setCurrentItems(props.list.slice(start, end));
  },[props.list.length]);

  useEffect(() => {
    if (settingsContext.showCompleted) {
      let start = (currentPage - 1) * settingsContext.perPage;
      let end = start + settingsContext.perPage;
      setCurrentItems(props.list.slice(start, end));
      setNumOfPages(Math.ceil(props.list.length / settingsContext.perPage));
    } else {
      let temp = props.list.filter((item) => {
        return item.complete === false
      })
      let start = (currentPage - 1) * settingsContext.perPage;
      let end = start + settingsContext.perPage;
      setCurrentItems(temp.slice(start, end));
      setNumOfPages(Math.ceil(temp.length / settingsContext.perPage))
    }
  }, [currentPage, settingsContext.showCompleted]);

  function changeCurrentPage(num) {
    setCurrentPage(num);
  }

  function next() {
    settingsContext.setshowCompleted(!settingsContext.showCompleted);
  }

  const pages = () => {
    let page = [];
    for (let i = 1; i <= numOfPages; i++) {
      page.push(<button onClick={() => { changeCurrentPage(i) }} key={i}>{i}</button>)
    }
    return page;
  }

  return (
    <div>
      <button onClick={next} >View Completed: </button>
      {currentItems.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
      {currentPage > 1 && <button onClick={() => { setCurrentPage(currentPage - 1) }}>Previous</button>}
      {pages()}
      {currentPage < numOfPages && <button onClick={() => { setCurrentPage(currentPage + 1) }} >Next</button>}

    </div>
  )
}

export default List