import Container from '../Components/Container/Container'
import './App.css'

function App() {

  return (
    <div className='main'>
      <Container title="Incomplete"></Container>
      <Container title="To Do"></Container>
      <Container title="Doing"></Container>
      <Container title="Under Review"></Container>
      <Container title="Completed"></Container>
    </div>
  )
}

export default App
