import styles from './content.module.css'
import CardsList from '../Tasks/CardsList'

const Content = (
  { columns, addedDate, setAddedDate, addToDoCard, setAddToDoCard, addDoingCard, setAddDoingCard, addDoneCard, setAddDoneCard }
  ) => {
  return (
    <>
      <section className={styles.main}>
        <CardsList
          addedDate = {addedDate}
          setAddedDate = {setAddedDate}
          addToDoCard= {addToDoCard}
          setAddToDoCard={setAddToDoCard}
          addDoingCard={addDoingCard}
          setAddDoingCard={setAddDoingCard}
          addDoneCard={addDoneCard}
          setAddDoneCard={setAddDoneCard}
        />
        <CardsList
          addedDate = {addedDate}
          setAddedDate = {setAddedDate}
          addToDoCard= {addToDoCard}
          setAddToDoCard={setAddToDoCard}
          addDoingCard={addDoingCard}
          setAddDoingCard={setAddDoingCard}
          addDoneCard={addDoneCard}
          setAddDoneCard={setAddDoneCard}
        />
        <CardsList
          addedDate = {addedDate}
          setAddedDate = {setAddedDate}
          addToDoCard= {addToDoCard}
          setAddToDoCard={setAddToDoCard}
          addDoingCard={addDoingCard}
          setAddDoingCard={setAddDoingCard}
          addDoneCard={addDoneCard}
          setAddDoneCard={setAddDoneCard}
        />
      </section>
    </>
  )
}

export default Content