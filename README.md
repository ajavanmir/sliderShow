# JavaScript Slider

A simple and customizable image slider built with JavaScript, HTML, and CSS. This project includes features like navigation buttons, dots for navigation, and an optional auto-play mode.

## Features

- **Manual Navigation**: Navigate between slides using "Next" and "Previous" buttons.
- **Automatic Navigation**: Slides change automatically at a specified interval.
- **Dot Navigation**: Jump directly to a specific slide using dots.
- **Responsive Design**: Works on all screen sizes.

## Demo

Add a preview link or a GIF here to show how the slider works (optional).

## Installation

1. Clone the repository or download the source code:
   ```bash
   git clone https://github.com/yourusername/slider.git
   ```
2. Open the `index.html` file in your browser.

## Usage

1. Include the following structure in your HTML file:
   ```html
   <div class="sliders" id="sliders">
       <div class="slider active">
           <div class="numbertext">1/3</div>
           <img src="./img/photo1.webp" width="100%">
           <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit1.</p>
       </div>
       <div class="slider">
           <div class="numbertext">2/3</div>
           <img src="./img/photo2.webp" width="100%">
           <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit2.</p>
       </div>
       <div class="slider">
           <div class="numbertext">3/3</div>
           <img src="./img/photo3.webp" width="100%">
           <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit3.</p>
       </div>
   </div>
   ```
2. Link the CSS and JavaScript files:
   ```html
   <link rel="stylesheet" href="./css/style.css">
   <script src="./js/script.js" defer></script>
   ```
3. Initialize the slider in your JavaScript:
   ```javascript
   new slider({
       el: document.querySelector("#sliders"),
       slideClass: "slider",
       auto: 5000, // Optional: Set the auto-play interval (in milliseconds).
   });
   ```

## Project Structure

```
├── index.html
├── css
│   ├── reset.css
│   ├── style.css
├── js
│   └── script.js
├── img
│   ├── photo1.webp
│   ├── photo2.webp
│   ├── photo3.webp
```

## Customization

### Options

- **`el`**: The container element of the slider (required).
- **`slideClass`**: The class applied to each slide (required).
- **`auto`**: Interval in milliseconds for automatic slide transitions (optional).

### CSS Modifications

You can modify the slider's appearance by editing the `style.css` file.

### **License**
This project is licensed under the MIT License.  
**Copyright Amir Javanmir**  
Released on: June 13, 2023
