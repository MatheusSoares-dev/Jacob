gsap.registerPlugin(ScrollTrigger)


gsap.fromTo("#titulo", {
    scale: 3,
    y: -195,

}, {
    scale: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#titulo",
        start: "center center",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: 2,
        ease: "expoScale(0.5,7,none)"
    }
})

const discoverTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".slide",
        scrub: 2,
        start: "50% 35%",
        end: "100% ",
        ease: "ease",
    }
})

discoverTl.to(".slideText1", {
    y: 250
})

discoverTl.to(".slideText2", {
    y: 250
})

discoverTl.to(".slideText3", {
    y: 250
})

discoverTl.to(".slideText4", {
    y: 250
})

gsap.to("#ternos-img", {
    clipPath: "circle(100% at 50% 50%)",

    scrollTrigger: {
        trigger: "#sessao-img > .conteiner",
        start: "top top",
        end: "150% bottom",
        pin: true,
        scrub: 2,
        onEnter: () => {
            document.body.classList.add("dark-theme")
        },
        onLeaveBack: () => {
            document.body.classList.remove("dark-theme")
        }
    }
})

const conteudo = document.querySelector(".conteudo");

const quantidadeScroll = () => {
    return conteudo.scrollWidth - window.innerWidth;
};

gsap.to(conteudo, {
    x: () => -quantidadeScroll(),
    ease: "none",
    scrollTrigger: {
        trigger: ".conteudo-rolagem",
        start: "top top",
        end: () => "+=" + quantidadeScroll(),
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true
    }
});


const gridWrapper = gsap.utils.toArray(".grid-itens")

gridWrapper.forEach(wrapper => {
    const caixas = wrapper.querySelectorAll(".box")

    caixas.forEach(box => {
        gsap.from(box, {
            y: 500,
            duration: .5,
            scrollTrigger: {
                trigger: box,
                start: "top bottom",
                end: "bottom top",
                scrub: 4
            }
        })
    })
});

const titulo = document.querySelector(".servicos-titulo h2")
const nomes = gsap.utils.toArray(".grid-img")

let tl_h2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#servicos-sessao > .conteiner",
        start: "top 50%",
        end: "top 50%",
        scrub: 2,
        ease: "ease",

        onEnter: () => {
            gsap.set(titulo, {
                position: "fixed",
                bottom: 0,
                zIndex: -1000
            })
        },

        onEnterBack: () => {
            gsap.set(titulo, {
                position: "relative",
                bottom: "0"
            })
        }
}
    })


nomes.forEach((sessao, i) => {
    ScrollTrigger.create({
        trigger: sessao,
        start: "bottom-=20% bottom",
        end: "bottom top",
        onEnter: () => {
            updateTitulo(i)
            if (i === 0) {
                document.body.classList.remove("dark-theme")
            }
        },
        onEnterBack: () => {
            updateTitulo(i)
            if (i === 0) {
                document.body.classList.add("dark-theme")
            }
        }
    })
});


function updateTitulo(index) {
    const textTitulo = ["Criação", "Broche", "Gravata", "Acessorio"]
    titulo.textContent = textTitulo[index]
}

updateTitulo(0)