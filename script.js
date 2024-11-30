document.addEventListener('DOMContentLoaded', () => {
    // Get references to pages and elements
    const pages = [
        document.getElementById('page1'),
        document.getElementById('page2'),
        document.getElementById('page3'),
        document.getElementById('page4'),
        document.getElementById('page5'),
        document.getElementById('page6'),
    ];

    const clickMeButton = document.getElementById('clickMeButton');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');
    const arrows = Array.from(document.querySelectorAll('.arrow')); // Use all arrow elements dynamically
    const emojiContainer = document.getElementById('emoji-container');

    let currentPage = 0;

    // Show a specific page
    const showPage = (index) => {
        pages.forEach((page, i) => {
            page.classList.toggle('active', i === index);
        });
    };

    // Initialize first page
    showPage(currentPage);

    // Handle "Click Me" button
    if (clickMeButton) {
        clickMeButton.addEventListener('click', () => {
            currentPage = 1; // Move to Page 2
            showPage(currentPage);

            // Show "Hi Mom" and other texts with delay
            // setTimeout(() => {
            //     text1.classList.remove('hidden');
            //     text1.style.visibility = 'visible';
            //     text1.style.opacity = '1';
            // }, 2000); // After 1 second

            setTimeout(() => {
                text2.classList.remove('hidden');
                text2.style.visibility = 'visible';
                text2.style.opacity = '1';
            }, 1200); // After 2 seconds

            setTimeout(() => {
                text3.classList.remove('hidden');
                text3.style.visibility = 'visible';
                text3.style.opacity = '1';
            }, 2500); // After 3 seconds

            setTimeout(() => {
                text4.classList.remove('hidden');
                text4.style.visibility = 'visible';
                text4.style.opacity = '1';
            }, 3500); // After 3 seconds

            // Trigger falling emojis
            setTimeout(createFallingEmojis, 3900); // After 4 seconds
        });
    }

    // Handle arrows for page navigation
    arrows.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            if (currentPage < pages.length - 1) {
                currentPage = index + 2; // Navigate to the next page
                showPage(currentPage);
            }
        });
    });

    const createFallingEmojis = () => {
        const emojiCount = 250; // Number of emojis
        const emojis = ['😂', '🤣', '😜', '😁', '😅']; // Emoji variety
        const spreadTime = 3000; // Total duration (5 seconds) to spread emoji creation
    
        for (let i = 0; i < emojiCount; i++) {
            setTimeout(() => {
                const emoji = document.createElement('span');
                emoji.classList.add('emoji');
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.left = Math.random() * 100 + 'vw';
                emojiContainer.appendChild(emoji);
    
                // Remove emoji after animation
                setTimeout(() => {
                    emoji.remove();
                }, 4000); // Match animation duration
            }, (i / emojiCount) * spreadTime); // Spread out over `spreadTime`
        }
    };
    
    
});
