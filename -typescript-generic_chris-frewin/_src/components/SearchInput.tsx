import React, { useState, useEffect } from 'react'

import useDebounce from '../hooks/useDebounce'

export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void
}

export function SearchInput(props: ISearchInputProps) {
  const { setSearchQuery } = props
  const [query, setQuery] = useState<string>('')
  const debounceQuery = useDebounce(query, 250)

  // delay to user search
  useEffect(() => {
    setSearchQuery(debounceQuery)
  }, [debounceQuery, setSearchQuery])

  return (
    <>
      <label htmlFor="search" className="mt-3">
        Search! Try Me!
      </label>
      <input
        id="search"
        className="form-control full-width"
        type="search"
        placeholder="Search ..."
        aria-label="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
    </>
  )
}
