import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface AddClothingFormProps {
  addClothingItem: (item: { id: number; name: string; category: string; size: string }) => void;
}

const AddClothingForm: React.FC<AddClothingFormProps> = ({ addClothingItem }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name,
      category,
      size,
    };
    addClothingItem(newItem);
    setName('');
    setCategory('');
    setSize('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          required
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          fullWidth
          required
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        Add Clothing Item
      </Button>
    </form>
  );
};

export default AddClothingForm;
