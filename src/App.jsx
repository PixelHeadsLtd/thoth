
import { useState } from 'react'
import treeOfLife from './assets/images/tree-of-life.svg'
import KnightOfWands from './components/KnightOfWands'

import './scss/app.scss'
import './scss/flex.scss'
import './scss/fonts.scss'
import './scss/typography.scss'
import './scss/nav.scss'
import './scss/cards.scss'
import './scss/vars.scss'
import './scss/mini-tree.scss'
import './scss/tetragrammaton.scss'
import './scss/colour-switching.scss'

function App() {
  const [activePage, setActivePage] = useState('tree-of-life')

  const pages = [
    { id: 'tree-of-life', label: 'Tree of Life' },
    { id: 'knight-of-wands', label: 'Knight of Wands' }
  ]

  return (
    <>
      <nav className="card-nav" aria-label="Page navigation">
        <h2>Choose a Card</h2>
        <select
          value={activePage}
          onChange={(e) => setActivePage(e.target.value)}
          aria-label="Select a Tarot card"
        >
          {pages.map((page) => (
            <option key={page.id} value={page.id}>
              {page.label}
            </option>
          ))}
        </select>
      </nav>

      <section className="wrapper flex-group flex-center">

        <article
          className={`tree-of-life flex-group flex-center ${
            activePage === 'tree-of-life' ? 'active' : ''
          }`}
          inert={activePage !== 'tree-of-life'}
        >
          <div>
            <h1 className="italic">The Qabalistic</h1>
            <h2 className="bold">The Tree of Life</h2>
          </div>
          <img src={treeOfLife} alt="" />
        </article>
        
        {/* Knight of Wands */}
        <article
          className={`knight-of-wands flex-group flex-nowrap ${
            activePage === 'knight-of-wands' ? 'active' : ''
          }`}
          inert={activePage !== 'knight-of-wands'}
        >
          <KnightOfWands />
        </article>

      </section>
    </>
  )
}

export default App
