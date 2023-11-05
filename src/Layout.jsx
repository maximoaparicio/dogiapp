import CatsRendering from './components/CatsRendering.jsx'
import Header from './components/Header.jsx'

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="max-w-[1200px] mx-auto px-2">
        <CatsRendering />
      </main>
    </div>
  )
}
