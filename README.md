# Rock Paper Scissors Game

This is a simple Rock, Paper, Scissors game implemented in HTML, JavaScript, and CSS. In this README, I'll explain the design choices I made and how CSS was used to realize those changes.

## Design Choices

1. **Image Size:** I decided to make the images of the rock, paper, and scissors visually appealing and appropriately sized. In the default view, each image is 150x150 pixels. For smaller screens, I reduced the image size to 100x100 pixels to ensure a better fit, and for larger screens, I increased it to 200x200 pixels to make the game more engaging.

2. **Button Styling:** The "Play" button is a crucial element of the game. I styled it with a blue background color, white text, and added padding to make it more prominent. This makes it clear to the user that they should click the button to play the game.

3. **Responsive Design:** To ensure a good user experience across various devices, I used CSS media queries. When the screen width is below 600 pixels, the images and button size are adjusted to fit smaller screens better. For screens larger than 1200 pixels, I increased the image and button size for a more immersive experience.

4. **Result Text:** The result of each game round is displayed in an `<h1>` element. I kept the text font simple and centered it to ensure readability and a clean appearance.

## CSS Implementation

The CSS file, `styles.css`, was instrumental in achieving these design choices:

- I used CSS to set the image size and button styles for different screen sizes. This was accomplished using media queries that target specific screen widths.

- To style the button, I applied background colors, text colors, and padding, making it visually appealing and user-friendly.

- Media queries were used to change styles based on screen sizes, ensuring the game's responsiveness.

In summary, CSS played a crucial role in achieving the desired design for this Rock, Paper, Scissors game. It allowed me to adapt the layout and appearance of the game to different screen sizes, making it enjoyable for users on various devices.
