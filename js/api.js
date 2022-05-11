// When the user submits the search form, prevent the page from reloading and make an API request to Giphy's search endpoint.
// Display all the results in the #giphy-results div
// Each new search should replace the previous search results

// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout
async function giphySearch(event) {
    event.preventDefault();
    const giphyResultsDiv = document.getElementById("giphy-results")
    const searchTerm = document.querySelector("input[name='search-term']").value;
    const apiKey = "i9u5FoDahfPMI2LFAipRD3KXJ45afk0f"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`);
    const giphyData = await response.json();
    giphyData.data.map(
        i => {
            const url = i.images.fixed_width.url;
            const image = document.createElement("img");
            image.setAttribute("src", url);
            giphyResultsDiv.appendChild(image);
        }
    )
}
document.querySelector("#search-form").addEventListener("submit", giphySearch)