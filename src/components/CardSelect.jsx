
import { useState, useEffect, useRef, useId } from 'react'

function CardSelect({ pages, activePage, changePage }) {
  const selectedIndex = pages.findIndex(
    (page) => page.id === activePage
  )

  const selectedLabel = pages[selectedIndex]?.label ?? ''

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState(selectedLabel)
  const inputRef = useRef(null)
  const [hasTyped, setHasTyped] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  const containerRef = useRef(null)
  const optionRefs = useRef([])
  const panelId = useId()
  const panelRef = useRef(null)

  // Show all cards initially; filter only after typing
  const filteredPages = hasTyped
    ? pages.filter((page) =>
        page.label.toLowerCase().includes(
          search.trim().toLowerCase()
        )
      )
    : pages

  // Keep input synchronised with the active card
  useEffect(() => {
    setSearch(selectedLabel)
    setHasTyped(false)
    setIsOpen(false)
  }, [selectedLabel])

  const openDropdown = () => {
    if (!isOpen) {
      setSearch(selectedLabel)
      setHasTyped(false)
      setHighlightedIndex(Math.max(0, selectedIndex))
      setIsOpen(true)
    }
  }

  const closeDropdown = () => {
    setIsOpen(false)
    setSearch(selectedLabel)
    setHasTyped(false)
  }

  const selectCard = (pageId) => {
    closeDropdown()
    changePage(pageId)
  }

  const handlePrev = () => {
    if (selectedIndex <= 0) return
    selectCard(pages[selectedIndex - 1].id)
  }

  const handleNext = () => {
    if (selectedIndex >= pages.length - 1) return
    selectCard(pages[selectedIndex + 1].id)
  }

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        closeDropdown()
      }
    }

    document.addEventListener('pointerdown', handleClickOutside)

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
    }
  }, [isOpen, selectedLabel])

  // Check active class on the currently displayed card
  useEffect(() => {
    if (containerRef.current?.closest('article')?.classList.contains('active')) {
    }
  }, [isOpen, activePage])

  // Keep highlighted option visible when navigating with keyboard
  useEffect(() => {
    if (!isOpen) return

    const panel = panelRef.current
    const option = optionRefs.current[highlightedIndex]

    if (!panel || !option) return

    const panelRect = panel.getBoundingClientRect()
    const optionRect = option.getBoundingClientRect()

    if (optionRect.bottom > panelRect.bottom) {
      panel.scrollTop += optionRect.bottom - panelRect.bottom
    }

    if (optionRect.top < panelRect.top) {
      panel.scrollTop -= panelRect.top - optionRect.top
    }
  }, [isOpen, highlightedIndex, search])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      if (isOpen) {
        event.preventDefault()
        closeDropdown()
      }
      return
    }

    if (event.key === 'Tab') {
      closeDropdown()
      return
    }

    if (!isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        openDropdown()
      }
      return
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        setHighlightedIndex((index) =>
          Math.min(index + 1, filteredPages.length - 1)
        )
        break

      case 'ArrowUp':
        event.preventDefault()
        setHighlightedIndex((index) =>
          Math.max(index - 1, 0)
        )
        break

      case 'Enter':
        event.preventDefault()

        if (filteredPages[highlightedIndex]) {
          selectCard(filteredPages[highlightedIndex].id)
        }
        break

      case 'Home':
        event.preventDefault()
        setHighlightedIndex(0)
        break

      case 'End':
        event.preventDefault()
        setHighlightedIndex(
          Math.max(0, filteredPages.length - 1)
        )
        break
    }
  }

  return (
    <div className="card-select" ref={containerRef}>

      <button
        type="button"
        className="btn-prev"
        onClick={handlePrev}
        disabled={selectedIndex <= 0}
        aria-label="Previous card"
      />

      <div 
        className={`input-wrapper ${isOpen ? 'active' : ''}`}
        onClick={(event) => {
          openDropdown()
          inputRef.current?.focus()
          inputRef.current?.select()
        }}
      >
        <input
          type="text"
          ref={inputRef}
          role="combobox"
          aria-label="Choose a Tarot card"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-activedescendant={
            isOpen && filteredPages[highlightedIndex]
              ? `${panelId}-option-${highlightedIndex}`
              : undefined
          }
          autoComplete="off"
          value={search}
          onFocus={(event) => {
            event.currentTarget.select()
          }}
          onChange={(event) => {
            setSearch(event.target.value)
            setHasTyped(true)
            setHighlightedIndex(0)
            setIsOpen(true)
          }}
          onKeyDown={handleKeyDown}
        />
      </div>

      {selectedIndex < pages.length - 1 && (
        <button
          type="button"
          className="btn-next"
          onClick={handleNext}
          aria-label="Next card"
        />
      )}

      {isOpen && (
        <div
          ref={panelRef}
          id={panelId}
          className="card-select-panel"
          role="listbox"
          aria-label="Tarot cards"
        >
          {filteredPages.length > 0 ? (
            filteredPages.map((page, index) => (
              <button
                key={page.id}
                id={`${panelId}-option-${index}`}
                ref={(el) => {
                  optionRefs.current[index] = el
                }}
                type="button"
                role="option"
                tabIndex={-1}
                aria-selected={activePage === page.id}
                className={`card-select-option ${
                  activePage === page.id ? 'selected' : ''
                } ${
                  highlightedIndex === index ? 'highlighted' : ''
                }`}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => selectCard(page.id)}
              >
                {page.label}
              </button>
            ))
          ) : (
            <div className="card-select-empty">
              No matching cards
            </div>
          )}
        </div>
      )}

    </div>
  )
}

export default CardSelect
