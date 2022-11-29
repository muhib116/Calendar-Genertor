// this weeks data also available in calendarState.jsx
const weeksList = {
    english: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    spanish: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    french: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
}

const listOfMonth = [
    {
        english: 'January',
        spanish: 'enero',
        french: 'Janvier'
    },
    {
        english: 'February',
        spanish: 'Febrero',
        french: 'Février'
    },
    {
        english: 'March',
        spanish: 'Marzo',
        french: 'Mars'
    },
    {
        english: 'April',
        spanish: 'Abril',
        french: 'Avril'
    },
    {
        english: 'May',
        spanish: 'Mayo',
        french: 'Peut'
    },
    {
        english: 'June',
        spanish: 'Junio',
        french: 'Juin'
    },
    {
        english: 'July',
        spanish: 'Julio',
        french: 'Juillet'
    },
    {
        english: 'August',
        spanish: 'Agosto',
        french: 'Août'
    },
    {
        english: 'August',
        spanish: 'Septiembre',
        french: 'Septembre'
    },
    {
        english: 'October',
        spanish: 'Octubre',
        french: 'Octobre'
    },
    {
        english: 'November',
        spanish: 'Noviembre',
        french: 'Novembre'
    },
    {
        english: 'December',
        spanish: 'Diciembre',
        french: 'Décembre'
    }
]
const languageList = ['English', 'French', 'Spanish']
const yearList = []




// create year list start------
let currentYear = new Date().getFullYear()
let nextYearLimit = currentYear + 1

for(currentYear; currentYear <= nextYearLimit; currentYear++){
    yearList.push(currentYear)
}


export { 
    weeksList, 
    languageList, 
    yearList, 
    listOfMonth 
}