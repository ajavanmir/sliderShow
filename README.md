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
   <div id="sliders">
       <div class="slider active">Slide 1</div>
       <div class="slider">Slide 2</div>
       <div class="slider">Slide 3</div>
   </div>
   ```

3. **Styling Requirements**  
   Add CSS to style the slider:
   ```css
   #sliders {
       position: relative;
       overflow: hidden;
   }

   .slider {
       display: none;
   }

   .slider.active {
       display: block;
   }

   .dots {
       display: flex;
       justify-content: center;
       margin-top: 10px;
   }

   .dot {
       height: 10px;
       width: 10px;
       margin: 0 5px;
       background-color: gray;
       border-radius: 50%;
       cursor: pointer;
       transition: background-color 0.3s;
   }

   .dot.active {
       background-color: black;
   }

   .next, .prev {
       cursor: pointer;
       position: absolute;
       top: 50%;
       width: auto;
       margin-top: -22px;
       color: black;
       font-weight: bold;
       font-size: 18px;
       user-select: none;
   }

   .next {
       right: 0;
   }

   .prev {
       left: 0;
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

### **Usage Example**

Include the HTML, CSS, and JavaScript:
```html
<div id="sliders">
    <div class="slider active">Slide 1</div>
    <div class="slider">Slide 2</div>
    <div class="slider">Slide 3</div>
</div>

<script src="slider.js"></script>
<script>
    new slider({
        el: document.querySelector("#sliders"),
        slideClass: "slider",
        auto: 5000,
    });
</script>
```

---

### **License**
**Copyright Amir Javanmir**  
Released on: June 13, 2023  
Licensed under the MIT License.
