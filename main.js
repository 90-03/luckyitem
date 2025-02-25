'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const results = ['sardine', 'acorn', 'nothing, sorry', 'movie theater', 'books', '7 oranges', 'rose garden', 'black tea', 'green tea', 'T-shirt', 'iron', 'chocolate', 'desert', '6th floor', 'apple', 'matcha', 'tomato', 'nuts', 'New York', 'Paris', 'Bali', 'sunflower', 'bamboo', 'olive', 'lavender', 'pine cone', 'seashells', 'star-shaped objects', 'small mirror', 'big mirror', 'taking a walk', 'deep breathing by the seaside', 'practicing meditation', 'listening to jazz'];
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];
  });
}