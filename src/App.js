import React, { useState } from "react"
import _ from "lodash"
import faker from "faker"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import "./App.css"

function App() {
  const [listItems, setListItems] = useState([
    buildSampleDocument(),
    buildSampleDocument()
  ])
  const [selectedListItem, setSelectedListItem] = useState({})

  const renderListItem = listItem => (
    <ListItem
      selected={listItem.id === selectedListItem.id}
      button
      onClick={() => setSelectedListItem(listItem)}
    >
      <ListItemText>{listItem.title}</ListItemText>
    </ListItem>
  )

  const getSelectedListItem = () =>
    _.isEmpty(selectedListItem)
      ? {}
      : _.find(listItems, { id: selectedListItem.id })

  const handleListItemChange = key => event => {
    const updatedSelectedListItem = {
      ...selectedListItem,
      [key]: event.target.value
    }
    const updatedSelectedListItems = _.map(listItems, listItem =>
      listItem.id === selectedListItem.id ? updatedSelectedListItem : listItem
    )
    setListItems(updatedSelectedListItems)
  }

  return (
    <div className="App">
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <List>{_.map(listItems, renderListItem)}</List>
        </Grid>
        <Grid item xs={8}>
          <TextField
            className="App-title"
            label="Title"
            value={getSelectedListItem().title}
            fullWidth={true}
            onChange={handleListItemChange("title")}
          />
          <TextField
            label="Content"
            value={getSelectedListItem().content}
            multiline={true}
            fullWidth={true}
            onChange={handleListItemChange("content")}
          />
        </Grid>
      </Grid>
    </div>
  )
}

const buildSampleDocument = () => ({
  id: _.uniqueId(),
  title: faker.lorem.words(),
  content: faker.lorem.paragraphs()
})

export default App
