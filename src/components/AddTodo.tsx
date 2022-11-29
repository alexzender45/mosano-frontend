import React, { useState } from 'react'
//import { getCountries } from '../API'
// import Select from 'react-select'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }
  // const countries = (): void => {
  //   getCountries()
  //   .then(({ data: { countries } }: ITodo[] | any) => countries)
  //   .catch((err: Error) => console.log(err))
  // }
  //   console.log(countries)

  return (
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='surname'>Surname</label>
          <input onChange={handleForm} type='text' id='surname' />
        </div>
        <div>
          <label htmlFor='country'>Country</label>
          <input onChange={handleForm} type='text' id='country' />
          </div>
        <div>
          <label htmlFor='dob'>Date of Birth</label>
          <input onChange={handleForm} type='text' id='dob' />
          </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Todo</button>
    </form>
  )
}

export default AddTodo
