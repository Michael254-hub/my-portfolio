const book = {
            title: "The Great Gatsby",
            color: "blue",
            size: "medium",
            type: "fiction",
        }
        const { title, color, size, type } = book;
        document.getElementById("demo").innerHTML = `Book Title: ${title}, Color: ${color}, Size: ${size}, Type: ${type}`;