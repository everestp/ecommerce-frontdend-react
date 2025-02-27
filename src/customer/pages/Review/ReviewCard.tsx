import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={9}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              R
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Rest</p>
              <p className="opacity-70">2025-05T23:16:07.4733</p>
            </div>
          </div>
          <Rating readOnly value={4} precision={1} />
          <p>Value for Money,Great Product</p>
          <div>
            <img className="w-24 h-24 object-cover" src="https://images.pexels.com/photos/42148/pexels-photo-42148.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  />
          </div>
        </Grid2>
        
      </Grid2>
<div>
<IconButton>
          <Delete sx={{color :red[700]}}/>
        </IconButton>
</div>
      
    </div>
  );
};

export default ReviewCard;
//  18-30