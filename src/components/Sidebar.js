import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      id="sidebar"
      sx={{
        overflowY: "auto",
        display: "flex",
        height: { sx: "auto", md: "95%" },
        flexDirection:{xs:'row', md:'column'}
      }}>
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              backgroundColor: category.name===selectedCategory && "#fc1503",
              color: "#ffffff",
            }}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}>
            <span
              style={{
                color: category.name===selectedCategory ? "white" : "red",
                marginRight: "5px",
              }}>
              {category.icon}
            </span>
            <span
              style={{ opacity: category.name===selectedCategory ? 1 : 0.8 }}>
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};
export default Sidebar;
