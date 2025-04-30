// List of textbooks
const textbooks = [
    { title: "Introduction to Psychology", link: "https://openstax.org/books/introductory-psychology/pages/1-1-introduction-to-psychology" },
    { title: "Fundamentals of Physics", link: "https://openstax.org/books/physics/pages/1-1-what-is-physics" },
    { title: "Calculus Volume 1", link: "https://openstax.org/books/calculus-1/pages/1-1-functions" },
    // Add more textbooks here...
];

// Function to toggle the visibility of the dropdown list for textbooks
function toggleDropdown(type) {
    console.log(`Toggling dropdown for ${type}`); // Check if this log appears
    const list = document.getElementById(`resourceList${capitalizeFirstLetter(type)}`);
    list.classList.toggle("hidden");

    // Populate the list with textbooks if it's being shown for the first time
    if (!list.innerHTML.trim()) {
        textbooks.forEach(function(resource) {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = resource.link;
            link.target = "_blank";
            link.textContent = resource.title;
            listItem.appendChild(link);
            list.appendChild(listItem);
        });
    }
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to filter resources based on the search input (optional)
function filterResources() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const filteredTextbooks = textbooks.filter(resource => 
        resource.title.toLowerCase().includes(searchInput)
    );

    // Update the list with filtered textbooks
    updateList('Textbooks', filteredTextbooks);
}

// Function to update the list of resources dynamically
function updateList(type, filteredResources) {
    const list = document.getElementById(`resourceList${type}`);
    list.innerHTML = ""; // Clear the current list

    filteredResources.forEach(function(resource) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = resource.link;
        link.target = "_blank";
        link.textContent = resource.title;
        listItem.appendChild(link);
        list.appendChild(listItem);
    });
}
