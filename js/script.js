/**
 * Slider design using JavaScript, CSS and HTML
 * Copyright amir javanmir
 * Released on: June 13, 2023
 */
class slider {
    sliderindex = 1;

    constructor(options) {
        this.options = options;
        this.initSlider();
    }

    initSlider() {
        let { el: sliderElement, slideClass, auto } = this.options;
        if (!sliderElement) throw Error("Slider element not exists");
        this.auto = (!Number.isInteger(auto)) ? false : auto;
        this.sliders = [...sliderElement.children].filter(item => item.classList.contains(slideClass));

        this.createNextAndprevSlider();
        this.createDots();
        this.sliderShow(this.sliderindex);
        this.slideAuto();
    }

    createNextAndprevSlider() {
        let { el: sliderElement } = this.options;
        sliderElement.insertAdjacentHTML("beforeend", `
            <a class="next">&#10095;</a>
            <a class="prev">&#10094;</a>
        `);
        sliderElement.querySelector(".next").addEventListener("click", () => {
            this.resetInterval();
            this.sliderShow(this.sliderindex += 1);
        });
        sliderElement.querySelector(".prev").addEventListener("click", () => {
            this.resetInterval();
            this.sliderShow(this.sliderindex -= 1)
        });
    }

    sliderShow(num) {
        if (num > this.sliders.length) this.sliderindex = 1;
        if (num < 1) this.sliderindex = this.sliders.length;

        this.sliders.forEach(item => item.classList.remove("active"));
        this.dots.forEach(item => item.classList.remove("active"));
        this.sliders[this.sliderindex - 1].classList.add("active");
        this.dots[this.sliderindex - 1].classList.add("active");
    }

    createDots() {
        let { el: sliderElement } = this.options;
        let elementDots = this.sliders.map((val, index) => `<span class='dot' data-slide=${index+1}></span>`);
        let parentDots = document.createElement("div");
        parentDots.classList.add("dots");
        parentDots.innerHTML = elementDots.join("");
        sliderElement.after(parentDots);

        this.dots = parentDots.querySelectorAll(".dot");
        this.dots.forEach(item => item.addEventListener("click", (e) => {
            let valIndex = parseInt(e.target.getAttribute("data-slide"));
            this.sliderindex = valIndex;
            this.resetInterval();
            this.sliderShow(this.sliderindex);
        }));
    }

    slideAuto() {
        if (this.auto !== false) {
            this.intervalID = setInterval(() => {
                this.sliderShow(++this.sliderindex);
            }, this.auto);
        }
    }

    resetInterval() {
        clearInterval(this.intervalID);
        this.slideAuto();
    }
}

new slider({
    el: document.querySelector("#sliders"),
    slideClass: "slider",
    auto: 5000,
});
