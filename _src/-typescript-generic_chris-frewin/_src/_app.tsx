import React, { useState } from 'react'
import { hot } from 'react-hot-loader'

import widgets from './mock-data/widget'
import people from './mock-data/people'

import genericSearch from './utils/genericSearch'
import { SearchInput } from './components/SearchInput'
import genericSort from './utils/genericSort'
import IWidget from './interfaces/IWidget'
import IProperty from './interfaces/IProperty'
import IPerson from './interfaces/IPerson'
import { Sorters } from './components/Sorters'

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    IProperty<IWidget>
  >({ property: 'title' })
  const [peopleSortProperty, setPeopleSortProperty] = useState<
    IProperty<IPerson>
  >({ property: 'firstName' })
  return (
    <>
      <SearchInput setSearchQuery={(query) => setQuery(query)} />
      <h2>Widgets:</h2>
      <Sorters
        setProperty={(property) => {
          setWidgetSortProperty({ property })
        }}
        object={widgets[0]}
      />
      {widgets
        .filter((widget) =>
          genericSearch(widget, ['title', 'description'], query, false)
        )
        .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
        .map((widget, key) => {
          return <h3 key={key}>{widget.title}</h3>
        })}
      <h2>People:</h2>
      <Sorters
        setProperty={(property) => {
          setPeopleSortProperty({ property })
        }}
        object={people[0]}
      />
      {people
        .filter((person) =>
          genericSearch(
            person,
            ['firstName', 'lastName', 'eyeColor'],
            query,
            false
          )
        )
        .sort((a, b) => genericSort(a, b, peopleSortProperty.property))
        .map((person, key) => {
          return (
            <h3 key={key}>
              {person.firstName} {person.lastName}
            </h3>
          )
        })}
    </>
  )
}

export default hot(module)(App)
