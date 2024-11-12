document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const cardDetails = card.querySelector('.card-details');
        const cardImage = card.querySelector('img');
        if (cardDetails.style.display === 'none' || cardDetails.style.display === '') {
            cardDetails.style.display = 'block';
            cardImage.style.height = '150px';
            button.textContent = '-';
        } else {
            cardDetails.style.display = 'none';
            cardImage.style.height = '100%';
            button.textContent = '+';
        }
    });
});
