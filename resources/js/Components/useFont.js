export default function useFont() {
    const fonts = [
        {
            fontFamily: "'ABeeZee', sans-serif",
            title: "ABeeZee",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap',
            isSelected: true,
            isItalic: false
        },
        {
            fontFamily: "'Abril Fatface'",
            title: "Abril Fatface",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Advent Pro', sans-serif",
            title: "Advent Pro",
            fontWeight: [
                700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Advent Pro', sans-serif",
            title: "Advent Pro Thin",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Alef', sans-serif",
            title: "Alef",
            fontWeight: [
                700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Alef:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Alef', sans-serif",
            title: "Alef Thin",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Alef:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Amaranth', sans-serif",
            title: "Amaranth",
            fontWeight: [
                700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Amaranth', sans-serif",
            title: "Amaranth Thin",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Gochi Hand', cursive",
            title: "Gochi Hand",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Just Another Hand', cursive",
            title: "Just Another Hand",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Alegreya', serif",
            title: "Alegreya Bold",
            fontWeight: [
                800
            ],
            link: 'https://fonts.googleapis.com/css2?family=Alegreya:wght@400;800&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Alegreya', serif",
            title: "Alegreya Italic",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,400;1,800&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Alegreya Sans', sans-serif",
            title: "Alegreya",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Alegreya Sans SC', sans-serif",
            title: "Alegreya Sans SC",
            fontWeight: [
                400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Alfa Slab One', cursive",
            title: "Alfa Slab One",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Allerta Stencil', sans-serif",
            title: "Allerta Stencil",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Beau Rivage', cursive",
            title: "Beau Rivage",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Allura', cursive",
            title: "Allura",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Allura&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Amaranth', sans-serif",
            title: "Amaranth Bold",
            fontWeight: [
                700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Amarante', cursive",
            title: "Amaranth",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Amarante&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Amatic SC', cursive",
            title: "Amatic SC",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Amiko', sans-serif",
            title: "Amiko Bold",
            fontWeight: [
                700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Amiko:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Amiko', sans-serif",
            title: "Amiko",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Amiko:wght@400;700&display=swap'    ,
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Andika', sans-serif",
            title: "Andika",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Andika:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Anonymous Pro', monospace",
            title: "Anonymous Pro Bold",
            fontWeight: [
                700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Anonymous Pro', monospace",
            title: "Anonymous Pro ",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Antic', sans-serif",
            title: "Antic",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Antic&display=swap',
            isSelected: false,
            isItalic: false
        },
        {
            fontFamily: "'Antic Didone, serif",
            title: "Antic Didone ",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Antic+Didone&display=swap',
            isSelected: false,
            isItalic: false
        },
    ]

    return {
        fonts
    }
}