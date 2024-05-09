let input = document.querySelector('input')
let arr = ['Backspace', 'ArrowLeft', 'ArrowRight']

input.addEventListener('keydown', (event) => {
    let key = event.key, v = input.value
    
    if ((key >= '0' && key <= '9') || arr.includes(key)) {
        if (!arr.includes(key)) { 
            if (v.length < 4 || v === '') input.value = '+7 ('
            if (v.length === 7) input.value = v + ') '
            if (v.length === 12) input.value = v + '-'
            if (v.length === 15) input.value = v + '-'
        }
    }else {
        event.preventDefault();
    }  
})
