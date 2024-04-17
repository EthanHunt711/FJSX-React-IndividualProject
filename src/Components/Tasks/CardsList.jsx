import React from 'react'
import styles from './cardsList.module.css'
import Task from './TaskCard'

export const CardsList = ( 
    { addedDate, setAddedDate, addToDoCard, setAddToDoCard, addDoingCard, setAddDoingCard, addDoneCard, setAddDoneCard }
    ) => {
  return (
    <article className={styles.column}>
      <div className={styles.columnTitle}>
        <p className={styles.columnTitleText}>Card Title</p>
      </div>
      <ul className={styles.list}>
          <Task 
              addedDate = { addedDate }
              setAddedDate = { setAddedDate }
          /> 
      </ul>
      </article>
  )
}

export default CardsList