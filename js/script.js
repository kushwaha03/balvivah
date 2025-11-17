// Language Switcher
function switchLanguage(lang) {
    const enTexts = document.querySelectorAll('.lang-en');
    const hiTexts = document.querySelectorAll('.lang-hi');
    if(lang === 'en'){
        enTexts.forEach(e => e.style.display = 'inline');
        hiTexts.forEach(e => e.style.display = 'none');
    } else {
        enTexts.forEach(e => e.style.display = 'none');
        hiTexts.forEach(e => e.style.display = 'inline');
    }
}

// Default language
switchLanguage('en');
