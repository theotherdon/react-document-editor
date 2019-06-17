import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import _ from "lodash"

import "./App.css"

function App() {
  const listItems = [{ text: "Testing, 1, 2, 3" }, { text: "Testing, 4, 5, 6" }]
  const renderListItem = listItem => (
    <ListItem button>
      <ListItemText>{listItem.text}</ListItemText>
    </ListItem>
  )

  return (
    <div className="App">
      <Typography variant="h2">Digital Crafts TODO List</Typography>
      <List>{_.map(listItems, renderListItem)}</List>
    </div>
  )
}

export default App
