interface ITodo {
    _id: string
    name: string
    surname: string
    country: string
    dob: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

type TodoProps = {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
  }
  