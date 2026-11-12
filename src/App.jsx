import { useState, useEffect } from 'react'
import treeOfLife from './assets/images/tree-of-life.svg'

import TheKnightOfWands from './components/TheKnightOfWands'
import TheKnightOfCups from './components/TheKnightOfCups'
import TheKnightOfSwords from './components/TheKnightOfSwords'
import TheKnightOfDisks from './components/TheKnightOfDisks'

import TheQueenOfWands from './components/TheQueenOfWands'
import TheQueenOfCups from './components/TheQueenOfCups'
import TheQueenOfSwords from './components/TheQueenOfSwords'
import TheQueenOfDisks from './components/TheQueenOfDisks'

import ThePrinceOfWands from './components/ThePrinceOfWands'

import './scss/ui.scss'
import './scss/flex.scss'
import './scss/fonts.scss'
import './scss/typography.scss'
import './scss/nav.scss'
import './scss/cards.scss'
import './scss/vars.scss'
import './scss/mini-tree.scss'
import './scss/tetragrammaton.scss'
import './scss/example-pairing.scss'
import './scss/key.scss'
import './scss/guide.scss'
import './scss/attributes.scss'
import './scss/tree-of-life.scss'
import './scss/icons.scss'

const pages = [
  { id: 'tree-of-life', label: 'Tree of Life' },
  { id: 'knight-of-wands', label: 'Knight of Wands' },
  { id: 'knight-of-cups', label: 'Knight of Cups' },
  { id: 'knight-of-swords', label: 'Knight of Swords' },
  { id: 'knight-of-disks', label: 'Knight of Disks' },
  { id: 'queen-of-wands', label: 'Queen of Wands' },
  { id: 'queen-of-cups', label: 'Queen of Cups' },
  { id: 'queen-of-swords', label: 'Queen of Swords' },
  { id: 'queen-of-disks', label: 'Queen of Disks' },
  { id: 'prince-of-wands', label: 'Prince of Wands' }
]

function App() {
  const [activePage, setActivePage] = useState('tree-of-life')

  const [isLeaving, setIsLeaving] = useState(false)

  const changePage = (pageId) => {
    if (pageId === activePage) return

    setIsLeaving(true)

    setTimeout(() => {
      setActivePage(pageId)
      setIsLeaving(false)
    }, 250)
  }

  const currentIndex = pages.findIndex(
    (page) => page.id === activePage
  )

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % pages.length
    changePage(pages[nextIndex].id)
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + pages.length) % pages.length
    changePage(pages[prevIndex].id)
  }
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Preserve normal keyboard behaviour in form controls
      if (
        ['INPUT', 'SELECT', 'TEXTAREA'].includes(event.target.tagName) ||
        event.target.isContentEditable ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) return

      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault()

        const index = pages.findIndex(page => page.id === activePage)
        const direction = event.key === 'ArrowRight' ? 1 : -1
        const next = index + direction

        if (next >= 0 && next < pages.length) {
          changePage(pages[next].id)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [changePage])
  

  return (
    <>
      <section className={`wrapper flex-group flex-center ${activePage} ${isLeaving ? 'leaving' : ''}`}>

        <article
          onClick={() => changePage('knight-of-wands')}
          className={`flex-group flex-center ${
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
          <TheKnightOfWands
            pages={pages}
            activePage={activePage}
            changePage={changePage} 
          />
        </article>
        
        {/* Knight of Cups */}
        <article
          className={`knight-of-cups flex-group flex-nowrap ${
            activePage === 'knight-of-cups' ? 'active' : ''
          }`}
          inert={activePage !== 'knight-of-cups'}
        >
          <TheKnightOfCups
            pages={pages}
            activePage={activePage}
            changePage={changePage} 
           />
        </article>
        
        {/* Knight of Swords */}
        <article
          className={`knight-of-swords flex-group flex-nowrap ${
            activePage === 'knight-of-swords' ? 'active' : ''
          }`}
          inert={activePage !== 'knight-of-swords'}
        >
          <TheKnightOfSwords
            pages={pages}
            activePage={activePage}
            changePage={changePage} 
           />
        </article>
        
        {/* Knight of Disks */}
        <article
          className={`knight-of-disks flex-group flex-nowrap ${
            activePage === 'knight-of-disks' ? 'active' : ''
          }`}
          inert={activePage !== 'knight-of-disks'}
        >
          <TheKnightOfDisks
            pages={pages}
            activePage={activePage}
            changePage={changePage} 
           />
        </article>
        
        {/* Queen of Wands */}
        <article
          className={`queen-of-wands flex-group flex-nowrap ${
            activePage === 'queen-of-wands' ? 'active' : ''
          }`}
          inert={activePage !== 'queen-of-wands'}
        >
          <TheQueenOfWands
            pages={pages}
            activePage={activePage}
            changePage={changePage}
           />
        </article>
        
        {/* Queen of Cups */}
        <article
          className={`queen-of-cups flex-group flex-nowrap ${
            activePage === 'queen-of-cups' ? 'active' : ''
          }`}
          inert={activePage !== 'queen-of-cups'}
        >
          <TheQueenOfCups
            pages={pages}
            activePage={activePage}
            changePage={changePage}
           />
        </article>
        
        {/* Queen of Swords */}
        <article
          className={`queen-of-swords flex-group flex-nowrap ${
            activePage === 'queen-of-swords' ? 'active' : ''
          }`}
          inert={activePage !== 'queen-of-swords'}
        >
          <TheQueenOfSwords
            pages={pages}
            activePage={activePage}
            changePage={changePage}
           />
        </article>
        
        {/* Queen of Disks */}
        <article
          className={`queen-of-disks flex-group flex-nowrap ${
            activePage === 'queen-of-disks' ? 'active' : ''
          }`}
          inert={activePage !== 'queen-of-disks'}
        >
          <TheQueenOfDisks
            pages={pages}
            activePage={activePage}
            changePage={changePage}
           />
        </article>
        
        {/* Prince of Wands */}
        <article
          className={`prince-of-wands flex-group flex-nowrap ${
            activePage === 'prince-of-wands' ? 'active' : ''
          }`}
          inert={activePage !== 'prince-of-wands'}
        >
          <ThePrinceOfWands
            pages={pages}
            activePage={activePage}
            changePage={changePage}
           />
        </article>

      </section>
    </>
  )
}

export default App
