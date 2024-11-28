### **Customizable JavaScript Slider**

This script provides a reusable, class-based slider component with features such as navigation controls, dots, and optional auto-play functionality.

---

### **Features**
1. **Reusable Slider Class**  
   - Easily attach to any container with slides.
   - Customizable settings for slide elements and auto-play.

2. **Navigation Controls**  
   - Includes "next" and "prev" buttons for manual navigation.

3. **Dots for Slide Indicators**  
   - Adds clickable dots for direct navigation to specific slides.

4. **Auto-Play Option**  
   - Configurable delay for automatic slide transitions.
   - Resets auto-play timer on manual interaction.

---

### **How It Works**

1. **Initialization**  
   Create a new `slider` instance, passing in the required options:
   ```javascript
   new slider({
       el: document.querySelector("#sliders"), // The slider container
       slideClass: "slider",                  // Class for each slide
       auto: 5000                             // Auto-play interval in milliseconds
   });
   ```

2. **HTML Structure**  
   The slider expects the following basic structure:
   ```html
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>slider show</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v20.1.0/dist/font-face.css" type="text/css" media="all">
    <link rel="stylesheet" href="./css/reset.css" type="text/css" media="all">
    <link rel="stylesheet" href="./css/style.css" type="text/css" media="all">
</head>

<body>
    <header>
        <h1>Slider design using JavaScript, CSS and HTML</h1>
    </header>

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
    <script src="./js/script.js"></script>
</body>

</html>
   ```

3. **Styling Requirements**  
   Add CSS to style the slider:
   ```css
   *,
*::after,
*::before {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

*::after,
*::before {
    content: '';
}

body {
    font-size: 16px;
    font-family: "vazir";
    color: white;
    background-color: #29324e;
    direction: rtl
}

header {
    position: relative;
    line-height: 180px;
    height: 160px;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

header h1 {
    font-size: 1.3rem;
}

.sliders {
    max-width: 1000px;
    position: relative;
    margin: auto;
}

.slider {
    display: none;
}

.text {
    color: white;
    text-align: center;
    position: absolute;
    bottom: 0px;
    padding: 8px 12px;
    font-size: 1.5rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.numbertext {
    background-color: rgba(0, 0, 0, 0.5);
    direction: ltr;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.1rem;
    text-align: center;
    color: white;
    padding: 5px 8px;
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 12px;
    font-size: 1.5rem;
    border-radius: 3px 0 0 3px;
    transition: 0.6s ease;
    font-weight: bold;
    color: white;
    width: auto;
}

.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.5);
}

.next {
    left: 0;
    border-radius: 0 3px 3px 0;
}

.dots {
    text-align: center;
    margin-top: 10px;
}

.dots .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.dot:hover {
    background-color: #717171;
}

.dot.active {
    background-color: #fff;
}

.slider.active {
    display: block;
}
   ```

---

### **Key Components**

1. **Constructor**
   - Accepts options for element (`el`), slide class (`slideClass`), and auto-play interval (`auto`).

2. **Navigation Controls**  
   - Dynamically appends "next" and "prev" buttons to the slider container.  
   - Handles click events to navigate between slides.

3. **Dots**
   - Generates dots corresponding to the number of slides.  
   - Adds `active` state synchronization between dots and slides.

4. **Auto-Play**  
   - Automatically transitions between slides based on the `auto` interval.  
   - Timer resets when manual navigation occurs.

---

### **Customization Options**

- `el`: Pass the slider container element.  
- `slideClass`: Define the class for individual slides.  
- `auto`: Set the interval for auto-play in milliseconds. Pass `false` to disable auto-play.

---

### **License**
**Copyright Amir Javanmir**  
Released on: June 13, 2023  
Licensed under the MIT License.
