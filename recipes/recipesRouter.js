const express = require('express');

const Recipes = require('./recipesModel');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch((err) => {
        res.status(500).json({ message: "Problem getting recipes" });
      });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
    Recipes.getRecipesById(id)
    .then(recipe => {
        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(404).json({ message: "Recipe not found" })
        }        
      })
      .catch((err) => {
        res.status(500).json({ message: "Problem getting recipes" });
      });
});

router.get('/:id/ingredients', (req, res) => {
 const { id } = req.params;
  Recipes.getShoppingList(id)
  .then(ingredient => {
    if (ingredient.length) {
      res.status(200).json(ingredient);
    } else {
      res.status(404).json({ message: 'Ingrendient not found' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Problem getting ingredients' });
  });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
     Recipes.getInstructions(id)
     .then(instruction => {
       if (instruction.length) {
         res.status(200).json(instruction);
       } else {
         res.status(404).json({ message: 'Instruction not found' })
       }
     })
     .catch(err => {
       res.status(500).json({ message: 'Problem getting instructions' });
     });
   });

module.exports = router;