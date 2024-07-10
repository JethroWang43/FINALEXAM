document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
    const productImageInput = document.getElementById('productImage');
    
    if (productImageInput.files && productImageInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const reviewHTML = `
                <div class="review">
                    <h3>${username}</h3>
                    <p>Rating: ${rating}</p>
                    <p>${review}</p>
                    <img src="${e.target.result}" alt="Product Image">
                </div>
            `;
            
            document.getElementById('reviewsContainer').insertAdjacentHTML('beforeend', reviewHTML);
        }
        
        reader.readAsDataURL(productImageInput.files[0]);
    }
    
    document.getElementById('reviewForm').reset();
});
