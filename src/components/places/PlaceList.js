import React from "react";
import {
  Filter,
  SearchInput,
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  FunctionField
} from "react-admin";
import PlaceTitle from "./PlaceTitle";
import { AppConstant } from "../../providers/constants";

const PlaceFilter = props => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
);

const PlaceList = props => (
  <List
    title={<PlaceTitle type="Places" />}
    filters={<PlaceFilter />}
    {...props}
  >
    <Datagrid>
      <TextField label="Name" source="translations[0].title" />
      <FunctionField
        label="Image"
        render={record => {
          if (record.defaultImage === null || record.defaultImage === "") {
            return null;
          }
          return (
            <img
              alt={record.defaultImage}
              src={`${AppConstant.SERVER_IMAGE}${record.defaultImage}`}
              width={80}
              height={80}
            />
          );
        }}
      />
      <TextField source="type" />
      <TextField source="owner" />
      <TextField source="rating" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default PlaceList;
