const frame = document.querySelector('iframe')
const navLinks = document.querySelectorAll('.nav-link')

console.log(navLinks)

const linkSwitcher = (e) => {
    if(e.target.id == 'party'){
        frame.src = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQpdYb8AVRu9YFtxzRmZDwVdjSHL0-KcG_wLbs3xKAzcQjUeAxedUn5j1J6ehj6rA/pubhtml?widget=true&amp;headers=false'
    }else if(e.target.id == 'major'){
        frame.src = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmXxZBbLlBTVMV96UQtVTpkXJUdyfOq7rdqq4Hb8QNZoKUER1GDPi3IVTH5xr4BA/pubhtml?widget=true&amp;headers=false'
    }else if(e.target.id == 'mayor'){
        frame.src = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQecaMuuCqJg9B9T-cQVouusOw_7NZrb_0AKpU_s2KAXSrCcoDOz9yegmOzqn2G-A/pubhtml?widget=true&amp;headers=false'
    }
}

navLinks.forEach(navLink => navLink.addEventListener('click', e => (linkSwitcher(e))))


