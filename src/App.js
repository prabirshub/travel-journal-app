import Card from './components/Card'
import Header from './components/Header'
import data from './data'

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.title} item={item} />
  })

  return (
    <div className='container'>
      <Header />
      <section>{cards}</section>
    </div>
  )
}
