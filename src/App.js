import React, { useState } from "react"
import _ from "lodash"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import "./App.css"

function App() {
  const [listItems, setListItems] = useState([
    { id: 1, text: "Testing, 1, 2, 3" },
    { id: 2, text: "Testing, 4, 5, 6" }
  ])
  const [selectedListItem, setSelectedListItem] = useState(null)

  const renderListItem = listItem => (
    <ListItem button onClick={() => setSelectedListItem(listItem)}>
      <ListItemText>{listItem.text}</ListItemText>
    </ListItem>
  )

  const getValue = () =>
    !_.isNil(selectedListItem) ? selectedListItem.text : ""

  const handleChange = event => {
    const updatedSelectedListItem = {
      ...selectedListItem,
      text: event.target.value
    }
    const updatedSelectedListItems = _.map(listItems, listItem =>
      listItem.id === selectedListItem.id ? updatedSelectedListItem : listItem
    )
    setListItems(updatedSelectedListItems)
    setSelectedListItem(updatedSelectedListItem)
  }

  return (
    <div className="App">
      <Typography variant="h2" gutterBottom>
        Digital Crafts TODO List
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <List>{_.map(listItems, renderListItem)}</List>
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={getValue()}
            multiline={true}
            fullWidth={true}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
