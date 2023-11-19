particlesJS("particles-js", {
    particles: {
        number: {
            value: 5,
            density: {
                enable: true,
                value_area: 1,
            },
        },
        color: {
            value: "#e70052",
        },
        shape: {
            type: "triangle",
            stroke: {
                width: 0,
                color: "#000000",
            },
        },
        opacity: {
            value: 0.5,
            random: false,
        },
        size: {
            value: 4,
            random: true,
        },
        move: {
            enable: true,
            speed: 1.6,
            direction: "top",
            random: false,
            straight: false,
            out_mode: "out",
        },
        line_linked: {
            enable: true,
            distance: 145,
            color: "#ffffff",
            opacity: 0.8,
            width: 1.3,
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
        },
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.25,
            },
            grab: {
                distance: 125,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
    fps_limit: 60, // Limit FPS to 60
});
