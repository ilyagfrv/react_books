import 'App.css'

import { TheHeader, Form, Filter, List, Error } from 'components'

export default function App() {
  return (
    <div className='app'>
      <TheHeader />

      <main className='main'>
        <div className='left-side'>
          <Form />
        </div>

        <div className='right-side'>
          <Filter />
          <List />
        </div>
      </main>
      <Error />
    </div>
  )
}
