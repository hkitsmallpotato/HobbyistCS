import React from "react";
import LinkPreview from '../components/linkpreview';
import { List, ListItem } from '@material-ui/core';

export default function LinkList(props) {
  return (
    <List>
      {props.list.map((item) => (
        <ListItem key={item.id}>
          <LinkPreview title={item.title} url={item.url}
            img={item.thumbnail.childImageSharp.fluid} />
        </ListItem>
      ))}
    </List>
  )
}
