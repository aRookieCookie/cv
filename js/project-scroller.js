var projects =
    [
        {
            title: "Flappy Whale",
            code: "Python",
            img_src: "resources/images/projects/FlappyWhale.png",
            redirect: "https://github.com/aRookieCookie/Flappy-Whale"
        },
        {
            title: "Trading Bot",
            code: "Python",
            img_src: "resources/images/projects/BitCrypt.png",
            redirect: "https://github.com/aRookieCookie/BitCrypt"
        },
        {
            title: "Cocktail SE",
            code: "Flask (Python)",
            img_src: "resources/images/projects/Cocktail_SE.png",
            redirect: "https://github.com/aRookieCookie/cocktail-engine"
        },
        {
            title: "TITLE",
            code: "PLACEHOLDER",
            img_src: "resources/images/projects/placeholder.png",
            redirect: ""
        },
        {
            title: "TITLE",
            code: "PLACEHOLDER",
            img_src: "resources/images/projects/placeholder.png",
            redirect: ""
        },
        {
            title: "TITLE",
            code: "PLACEHOLDER",
            img_src: "resources/images/projects/placeholder.png",
            redirect: ""
        }
    ]

var widget_wrapper = document.getElementById("widget-wrapper")

loadProjects()

function loadProjects() {
    for (let x of projects) {
        // CREATE ELEMENTS
        let widget = document.createElement("div")
        let img = document.createElement("img")
        let title = document.createElement("h3")
        let code = document.createElement("p")
        let anchor = document.createElement("a")

        // SET CLASS
        widget.classList.add("project-widget")
        img.classList.add("project-img")

        // SET CONTENT
        img.src = x.img_src
        title.innerHTML = x.title
        code.innerHTML = x.code
        anchor.setAttribute("href", x.redirect)
        anchor.setAttribute("target", "_blank")

        // ADD TOGETHER IN WIDGET
        widget.appendChild(img)
        widget.appendChild(title)
        widget.appendChild(code)
        anchor.appendChild(widget)

        // SET WIDGET INTO THE WRAPPER
        widget_wrapper.appendChild(anchor)
    }
}

// SCROLL
var left_arrow = document.getElementById("left-arrow")
var right_arrow = document.getElementById("right-arrow")

let currentOffset = 0
let offsetIndex = 0

function getScrollAmount(direction) {
    let gap = parseFloat(window.getComputedStyle(widget_wrapper).getPropertyValue("gap"))
    let width = window.innerWidth * 0.25

    let step = width + gap

    if (direction === "Left") {
        currentOffset += step
        offsetIndex -= 1
    } else {
        currentOffset -= step
        offsetIndex += 1
    }

    return `${currentOffset}px`
}


left_arrow.addEventListener("click", function () {
    if (offsetIndex > 0) {
        widget_wrapper.style.transform = `translateX(${getScrollAmount("Left")}`
    }
})


right_arrow.addEventListener("click", function () {
    if (offsetIndex < projects.length - 2) {
        widget_wrapper.style.transform = `translateX(${getScrollAmount("Right")}`
    }
})