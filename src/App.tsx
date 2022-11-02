import Card from './components/card'
import Keyboard from './components/404/keyboard'
import Nav from './components/nav'
import Space from './components/404/space'

function App() {
  return (
    <>
      <Nav />
      <div className="flex gap-2 justify-evenly p-2">
        <Card title="keyboard">
          <Keyboard />
        </Card>
        <Card title="space">
          <Space />
        </Card>
      </div>
    </>
  )
}

export default App
