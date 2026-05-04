function searchPapers() {
    // Get what the user typed
    let input = document.getElementById('searchInput').value.toLowerCase();
    // Get all the paper cards
    let cards = document.getElementsByClassName('card');

    // Loop through every card
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        
        // If the title matches the search, show it; otherwise, hide it
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
