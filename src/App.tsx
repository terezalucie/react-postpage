import { useState } from 'react'
import MainHeader from './components/MainHeader'
import PostsList from './components/PostsList'

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(true)
    const handleShowModal = () =>setModalIsVisible(true)
    const handleHideModal = () =>setModalIsVisible(false)

  return (
    <>    
      <MainHeader onCreatePost={handleShowModal} />
      <main>
        <PostsList isPosting={modalIsVisible} onClose={handleHideModal} />
      </main>
    </>

  )
}

export default App  
