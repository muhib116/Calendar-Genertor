export default function useFont() {
    const fonts = [
        {
            fontFamily: "'Poppins', sans-serif",
            text: "Poppins",
            fontWeight: [
                300, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,300;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Roboto', sans-serif",
            text: "Roboto",
            fontWeight: [
                300, 500, 400, 500, 700, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Prosto One', cursive",
            text: "Prosto One",
            fontWeight: [
                400
            ],
            link: 'https://fonts.googleapis.com/css2?family=Prosto+One&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Open Sans', sans-serif",
            text: "Open Sans",
            fontWeight: [
                300, 400, 500, 600, 700, 800
            ],
            link: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
            isSelected: false
        },
        {
            fontFamily: "Montserrat', sans-serif",
            text: "Montserrat",
            fontWeight: [
                300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Lato', sans-serif",
            text: "Lato",
            fontWeight: [
                300, 400, 700, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Roboto Condensed', sans-serif",
            text: "Roboto Condensed",
            fontWeight: [
                300, 400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Source Sans Pro', sans-serif",
            text: "Source Sans Pro",
            fontWeight: [
                300, 400, 600, 700, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,600;1,700;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Andika', sans-serif",
            text: "Andika",
            fontWeight: [
                 400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Oswald', sans-serif",
            text: "Oswald",
            fontWeight: [
                300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Raleway', sans-serif",
            text: "Raleway",
            fontWeight: [
                300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Inter', sans-serif",
            text: "Inter",
            fontWeight: [
                300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Noto Sans', sans-serif",
            text: "Noto Sans",
            fontWeight: [
                300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Hanken Grotesk', sans-serif",
            text: "Hanken Grotesk",
            fontWeight: [
                300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Ubuntu', sans-serif",
            text: "Ubuntu",
            fontWeight: [
                300, 400, 500, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Nunito', sans-serif",
            text: "Nunito",
            fontWeight: [
                300, 400, 500, 600, 700, 800, 900, 1000
            ],
            link: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'PT Sans', sans-serif",
            text: "PT Sans",
            fontWeight: [
                 400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Playfair Display', serif",
            text: "Playfair Display",
            fontWeight: [
                 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Merriweather', serif",
            text: "Merriweather",
            fontWeight: [
                 300, 400, 700, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Mukta', sans-serif",
            text: "Mukta",
            fontWeight: [
                 300, 400, 500, 600, 700, 800
            ],
            link: 'https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600;700;800&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Nunito Sans', sans-serif",
            text: "Nunito Sans",
            fontWeight: [
                 300, 400, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Work Sans', sans-serif",
            text: "Work Sans",
            fontWeight: [
                 300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Fira Sans', sans-serif",
            text: "Work Fira Sans",
            fontWeight: [
                 300, 400, 500, 600, 700, 800
            ],
            link: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Mulish', sans-serif",
            text: "Mulish",
            fontWeight: [
                 300, 400, 500, 600, 700, 800, 900, 1000 
            ],
            link: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Barlow', sans-serif",
            text: "Barlow",
            fontWeight: [
                 300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Nanum Gothic', sans-serif",
            text: "Nanum Gothic",
            fontWeight: [
                  400, 700, 800
            ],
            link: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Quicksand', sans-serif",
            text: "Quicksand",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Hind Siliguri', sans-serif",
            text: "Hind Siliguri",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'PT Sans Narrow', sans-serif",
            text: "PT Sans Narrow",
            fontWeight: [
                  400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Dosis', sans-serif",
            text: "Dosis",
            fontWeight: [
                  300, 400, 500, 600, 700, 800
            ],
            link: 'https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Balsamiq Sans', cursive",
            text: "Balsamiq Sans",
            fontWeight: [
                  400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Barlow Condensed', sans-serif",
            text: "Barlow Condensed",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Inter Tight', sans-serif",
            text: "Inter Tight",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'EB Garamond', serif",
            text: "EB Garamond",
            fontWeight: [
                  400, 500, 600, 700, 800
            ],
            link: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Comfortaa', cursive",
            text: "Comfortaa",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Exo 2', sans-serif",
            text: "Exo 2",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        
        {
            fontFamily: "'Teko', sans-serif",
            text: "Teko",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Crimson Text', serif",
            text: "Crimson Text",
            fontWeight: [
                  400, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Asap', sans-serif",
            text: "Asap",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Overpass', sans-serif",
            text: "Overpass",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Archivo', sans-serif",
            text: "Archivo",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Assistant', sans-serif",
            text: "Assistant",
            fontWeight: [
                  300, 400, 500, 600, 700, 800
            ],
            link: 'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700;800&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Rajdhani', sans-serif",
            text: "Rajdhani",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Cormorant Garamond', serif",
            text: "Cormorant Garamond",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Saira Condensed', sans-serif",
            text: "Saira Condensed",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@300;400;500;600;700;800;900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Chakra Petch', sans-serif",
            text: "Chakra Petch",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Amatic SC', cursive",
            text: "Amatic SC",
            fontWeight: [
                  400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Cinzel', serif",
            text: "Cinzel",
            fontWeight: [
                  400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Orbitron', sans-serif",
            text: "Orbitron",
            fontWeight: [
                  400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Tinos', serif",
            text: "Tinos",
            fontWeight: [
                  400,  700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Alegreya Sans', sans-serif",
            text: "Alegreya Sans",
            fontWeight: [
                  300, 400, 500, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;0,900;1,300;1,400;1,500;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Frank Ruhl Libre', serif",
            text: "Frank Ruhl Libre",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;600;700;800;900&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'IBM Plex Sans Condensed', sans-serif",
            text: "IBM Plex Sans Condensed",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Asap Condensed', sans-serif",
            text: "Asap Condensed",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Cormorant', serif",
            text: "Cormorant",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Ranga', cursive",
            text: "Ranga",
            fontWeight: [
                  400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Ranga:wght@400;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Philosopher', sans-serif",
            text: "Philosopher",
            fontWeight: [
                  400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'News Cycle', sans-serif",
            text: "News Cycle",
            fontWeight: [
                  400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Advent Pro', sans-serif",
            text: "Advent Pro",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300;400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Josefin Slab', serif",
            text: "Josefin Slab",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Quattrocento', serif",
            text: "Quattrocento",
            fontWeight: [
                  400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Khand', sans-serif",
            text: "Khand",
            fontWeight: [
                  300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Arsenal', sans-serif",
            text: "Arsenal",
            fontWeight: [
                  400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Arsenal:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Playfair Display SC', serif",
            text: "Playfair Display SC",
            fontWeight: [
                  400, 700, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Merienda', cursive",
            text: "Merienda",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Encode Sans Condensed', sans-serif",
            text: "Encode Sans Condensed",
            fontWeight: [
                  300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@300;400;500;600;700;800;900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Nanum Gothic Coding', monospace",
            text: "Nanum Gothic Coding",
            fontWeight: [
                  400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Alegreya Sans SC', sans-serif",
            text: "Alegreya Sans SC",
            fontWeight: [
                300, 400, 500, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,300;0,400;0,500;0,700;0,800;0,900;1,300;1,400;1,500;1,700;1,800;1,900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            text: "Plus Jakarta Sans",
            fontWeight: [
                300, 400, 500, 600, 700, 800
            ],
            link: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Saira Semi Condensed', sans-serif",
            text: "Saira Semi Condensed",
            fontWeight: [
                300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@300;400;500;600;700;800;900&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Jura', sans-serif",
            text: "Jura",
            fontWeight: [
                300, 400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Abhaya Libre', serif",
            text: "Abhaya Libre",
            fontWeight: [
                400, 500, 600, 700, 800
            ],
            link: 'https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Cabin Condensed', sans-serif",
            text: "Cabin Condensed",
            fontWeight: [
                400, 500, 600, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Cabin+Condensed:wght@400;500;600;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Economica', sans-serif",
            text: "Economica",
            fontWeight: [
                400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Economica:ital,wght@0,400;0,700;1,400;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'BenchNine', sans-serif",
            text: "BenchNine",
            fontWeight: [
                300, 400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=BenchNine:wght@300;400;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: "'Comic Neue', cursive",
            text: "Comic Neue",
            fontWeight: [
                300, 400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Glegoo', serif",
            text: "Glegoo",
            fontWeight: [
                400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Glegoo:wght@400;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Cinzel Decorative', cursive",
            text: "Cinzel Decorative",
            fontWeight: [
                400, 700
            ],
            link: 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Darker Grotesque', sans-serif",
            text: "Darker Grotesque",
            fontWeight: [
                300, 400, 500, 600, 700, 800, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap',
            isSelected: false
        },
        {
            fontFamily: " 'Overlock', cursive",
            text: "Overlock",
            fontWeight: [
                400, 700, 900
            ],
            link: 'https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap',
            isSelected: false
        },
    ]

    return {
        fonts
    }
}