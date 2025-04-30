// List of textbooks with titles, URLs, and video URLs
const textbooks = [
    {
        title: "Introduction to Psychology",
        url: "https://openstax.org/details/books/psychology-2e",
        videoUrl: "https://www.youtube.com/embed/vo4pMVb0R6M"  // Example YouTube video link
    },
    {
        title: "Biology-2e",
        url: "https://openstax.org/details/books/biology-2e/",
        videoUrl: "https://www.youtube.com/embed/3tisOnOkwzo"  // Example YouTube video link
    },
    {
        title: "Calculus",
        url: "https://openstax.org/details/books/calculus-volume-1",
        videoUrl: "https://www.youtube.com/embed/WsQQvHm4lSw"  // Example YouTube video link
    },


    {
        title: "College Algebra",
        url: "https://openstax.org/details/books/college-algebra",
        videoUrl: "https://www.youtube.com/playlist?list=PL132A1B8D4E2C8C76"  // Khan Academy College Algebra Playlist
    },
    {
        title: "Physics: Principles with Applications",
        url: "https://openstax.org/details/books/physics-principles-applications",
        videoUrl: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOzaIEzI9XTw6Xbt23IKNm8"  // Khan Academy Physics Playlist
    },
    {
        title: "Introduction to Sociology",
        url: "https://openstax.org/details/books/sociology-2e",
        videoUrl: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtP7JHfV1C-GGIzp64HePaZ2"  // CrashCourse Sociology Playlist
    },
    {
        title: "Chemistry",
        url: "https://openstax.org/details/books/chemistry-2e",
        videoUrl: "https://www.youtube.com/playlist?list=PL132A1B8D4E2C8C76"  // Khan Academy Chemistry Playlist
    },
    {
        title: "American Government",
        url: "https://openstax.org/details/books/american-government-2e",
        videoUrl: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeF8gHftjjGcO4hTH40aFS"  // CrashCourse Government and Politics Playlist
    },
    {
        title: "Macroeconomics",
        url: "https://openstax.org/details/books/macroeconomics-2e",
        videoUrl: "https://www.youtube.com/playlist?list=PL132A1B8D4E2C8C76"  // Khan Academy Macroeconomics Playlist
    },
    {
        title: "Microeconomics",
        url: "https://openstax.org/details/books/microeconomics-2e",
        videoUrl: "https://www.youtube.com/playlist?list=PL132A1B8D4E2C8C76"  // Khan Academy Microeconomics Playlist
    },
    {
        title: "Statistics",
        url: "https://openstax.org/details/books/statistics-2e",
        videoUrl: "https://www.youtube.com/playlist?list=PL132A1B8D4E2C8C76"  // Khan Academy Statistics Playlist
    },
    {
        title: "Precalculus",
        url: "https://openstax.org/details/books/precalculus",
        videoUrl: "https://www.youtube.com/playlist?list=PL132A1B8D4E2C8C76"  // Khan Academy Precalculus Playlist
    },
    {
        title: "World History",
        url: "https://openstax.org/details/books/world-history-1e",
        videoUrl: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM-AXY6zZzrwZX3dOg_6elA"  // CrashCourse World History Playlist
    },
    {
        title: "Statistics for Business and Economics",
        url: "https://openstax.org/details/books/statistics-business-economics",
        videoUrl: "https://www.youtube.com/playlist?list=PL132A1B8D4E2C8C76"  // Khan Academy Statistics and Probability Playlist
    }
    // Add more textbooks with their video URLs here
];

// Get references to elements
const searchBar = document.getElementById("searchBar");
const textbookList = document.getElementById("textbookList");
const arrow = document.getElementById("arrow");

// Function to toggle the dropdown visibility
function toggleDropdown() {
    if (textbookList.style.display === "block") {
        textbookList.style.display = "none"; // Hide dropdown
    } else {
        textbookList.style.display = "block"; // Show dropdown
    }
}

// Function to display the filtered textbooks in the dropdown
function displayTextbooks(filteredTextbooks) {
    textbookList.innerHTML = ""; // Clear previous list
    if (filteredTextbooks.length > 0) {
        filteredTextbooks.forEach(function (textbook) {
            const listItem = document.createElement("li");
            listItem.classList.add("dropdown-item");

            const link = document.createElement("a");
            link.href = textbook.url;
            link.textContent = textbook.title;
            link.target = "_blank"; // Open the link in a new tab

            // Add the link to the list item
            listItem.appendChild(link);

            // Create a div to hold the iframe (Initially hidden)
            const videoDiv = document.createElement("div");
            videoDiv.style.display = "none";
            videoDiv.classList.add("video-container");

            const iframe = document.createElement("iframe");
            iframe.src = textbook.videoUrl;
            iframe.classList.add("video-iframe");
            videoDiv.appendChild(iframe);

            // Add a button to show/hide the video iframe
            const videoButton = document.createElement("button");
            videoButton.classList.add("related-video-button");
            videoButton.textContent = "Related Video";
            videoButton.addEventListener("click", function () {
                const isVisible = videoDiv.style.display === "block";
                videoDiv.style.display = isVisible ? "none" : "block"; // Toggle visibility of the video iframe
            });

            // Append video button and videoDiv to the listItem
            listItem.appendChild(videoButton);
            listItem.appendChild(videoDiv);

            // Add the list item to the dropdown list
            textbookList.appendChild(listItem);
        });
        textbookList.style.display = "block"; // Ensure dropdown is shown when there are results
    } else {
        textbookList.style.display = "none"; // Hide dropdown when no results
    }
}

// Event listener for input in the search bar to filter textbooks
searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase();

    // Filter textbooks based on the query
    const filteredTextbooks = textbooks.filter(function (textbook) {
        return textbook.title.toLowerCase().includes(query);
    });

    // Display the filtered textbooks
    displayTextbooks(filteredTextbooks);
});

// Event listener for the dropdown arrow to toggle the visibility
arrow.addEventListener("click", toggleDropdown);
