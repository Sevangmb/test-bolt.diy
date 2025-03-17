import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface ClothingItem {
  id: number;
  name: string;
  category: string;
  size: string;
}

interface ClothingListProps {
  clothingItems: ClothingItem[];
  deleteClothingItem: (id: number) => void;
}

const ClothingList: React.FC<ClothingListProps> = ({ clothingItems, deleteClothingItem }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Clothing List
      </Typography>
      <List>
        {clothingItems.map(item => (
          <ListItem key={item.id} divider>
            <ListItemText primary={`${item.name} - ${item.category} - ${item.size}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteClothingItem(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ClothingList;
