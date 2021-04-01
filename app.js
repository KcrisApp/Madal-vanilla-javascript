document.addEventListener('DOMContentLoaded',() =>{

    const btnModal = document.querySelector('#btn-modal')
    const btnConfirm = document.querySelector('#btn-confirm')
    const btnDismist = document.querySelector('#btn-dismist')

    const modal = document.querySelector('.modal-bg')

    btnModal.addEventListener('click',()=>{

        modal.classList.add('bg-active')
    })
    btnConfirm.addEventListener('click',()=>{

        modal.classList.remove('bg-active')
        alert('Hai salvato correttamente i dati')
    })
    btnDismist.addEventListener('click',()=>{

        modal.classList.remove('bg-active')
        alert('I tuoi dati non sono stati salvati')
    })
})