# Memory Card Game

[Live Demo](https://jakublepianka-memory-card.netlify.app/)

An interactive memory card game built with React and Vite. Choose your card images (cats or dogs), select difficulty, and test your memory by clicking unique cards without repeating!

## Features

- **Animal Choice**: Pick between cat or dog images for your cards
- **Difficulty Selection**: Choose the number of cards (Easy, Medium, Hard)
- **Score Tracking**: Current score and high score displayed in real time
- **Shuffle & Reset**: Shuffle cards or reset your score with a single click
- **Modal Preferences**: Game settings modal for animal and difficulty selection
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Loading Spinner**: Shows while images are being fetched

## Game Logic

- **Unique Clicks**: Click each card only once per round to increase your score
- **Card Shuffle**: Cards shuffle after each click
- **High Score**: Tracks your best run until you reset
- **API Integration**: Fetches images from Dog CEO and The Cat API

## Responsive Design

- **Laptop/Desktop (1200px+)**: Multi-column card grid
- **Tablet/Laptop (800px-1199px)**: Adjusted grid layout
- **Mobile/Tablet (<800px)**: Single column, touch-friendly controls

## Tech Stack

- React
- Vite
- CSS Modules

## How to Play

1. Open the game and select your preferences in the modal
2. Click each card only once per round
3. If you click a card twice, your score resets
4. Try to beat your high score!

## API Sources

- [Dog CEO API](https://dog.ceo/dog-api/)
- [The Cat API](https://thecatapi.com/)
