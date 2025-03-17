import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClothingList from './components/ClothingList';
import AddClothingForm from './components/AddClothingForm';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';

interface ClothingItem {
  id: number;
  name: string;
  category: string;
  size: string;
}

function App() {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);

  const addClothingItem = (item: ClothingItem) => {
    setClothingItems([...clothingItems, item]);
  };

  const deleteClothingItem = (id: number) => {
    setClothingItems(clothingItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clothing Management App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/add">Add Clothing</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
        <Routes>
          <Route path="/" element={<ClothingList clothingItems={clothingItems} deleteClothingItem={deleteClothingItem} />} />
          <Route path="/add" element={<AddClothingForm addClothingItem={addClothingItem} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
