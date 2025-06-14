// TechPulse JavaScript - Enhanced Functionality


//for dark mode
tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                        },
                        secondary: {
                            50: '#f5f3ff',
                            100: '#ede9fe',
                            200: '#ddd6fe',
                            300: '#c4b5fd',
                            400: '#a78bfa',
                            500: '#8b5cf6',
                            600: '#7c3aed',
                            700: '#6d28d9',
                            800: '#5b21b6',
                            900: '#4c1d95',
                        }
                    }
                }
            }
        }
        
// Sample data for dynamic content
const newsData = [
    {
        id: 1,
        title: "Meta Unveils New VR Headset with Revolutionary Eye Tracking",
        category: "Gadgets",
        author: "Alex Chen",
        authorImg: "https://randomuser.me/api/portraits/men/45.jpg",
        time: "2 hours ago",
        image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        excerpt: "The new Meta Quest Pro 2 features advanced eye tracking technology that promises to revolutionize virtual reality experiences.",
        comments: 18,
        trending: true
    },
    {
        id: 2,
        title: "Tesla's Full Self-Driving Beta Achieves 99.9% Safety Rating",
        category: "Artificial Intelligence",
        author: "Maria Rodriguez",
        authorImg: "https://randomuser.me/api/portraits/women/68.jpg",
        time: "4 hours ago",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        excerpt: "Latest testing results show Tesla's FSD beta achieving unprecedented safety ratings in autonomous driving scenarios.",
        comments: 32,
        trending: true
    },
    {
        id: 3,
        title: "Bitcoin Reaches New All-Time High Amid Institutional Adoption",
        category: "Cryptocurrency",
        author: "James Wilson",
        authorImg: "https://randomuser.me/api/portraits/men/22.jpg",
        time: "6 hours ago",
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        excerpt: "Major financial institutions continue to adopt Bitcoin, driving prices to unprecedented levels.",
        comments: 45,
        trending: true
    },
    {
        id: 4,
        title: "Google Announces Quantum Supremacy Breakthrough",
        category: "Programming",
        author: "Dr. Sarah Kim",
        authorImg: "https://randomuser.me/api/portraits/women/34.jpg",
        time: "8 hours ago",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        excerpt: "Google's latest quantum computer solves complex problems 10,000 times faster than traditional supercomputers.",
        comments: 67,
        trending: false
    },
    {
        id: 5,
        title: "Cybersecurity Alert: New Ransomware Targets Small Businesses",
        category: "Cybersecurity",
        author: "Michael Brown",
        authorImg: "https://randomuser.me/api/portraits/men/12.jpg",
        time: "10 hours ago",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        excerpt: "Security experts warn of a new sophisticated ransomware campaign specifically targeting small and medium businesses.",
        comments: 23,
        trending: false
    },
    {
        id: 6,
        title: "YC-Backed Startup Raises $50M for AI-Powered Code Generation",
        category: "Startups",
        author: "Emily Davis",
        authorImg: "https://randomuser.me/api/portraits/women/87.jpg",
        time: "12 hours ago",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        excerpt: "CodeCraft AI secures major funding round to expand their revolutionary AI coding assistant platform.",
        comments: 29,
        trending: false
    }
];

const trendingTopics = [
    { topic: "GPT-5 Release", count: "2.3k discussions" },
    { topic: "Quantum Computing", count: "1.8k discussions" },
    { topic: "Web3 Gaming", count: "1.5k discussions" },
    { topic: "AI Ethics", count: "1.2k discussions" },
    { topic: "5G Technology", count: "980 discussions" }
];

const comments = {
    1: [
        {
            id: 1,
            author: "TechEnthusiast42",
            avatar: "https://randomuser.me/api/portraits/men/15.jpg",
            time: "1 hour ago",
            content: "This is incredible! Eye tracking in VR is going to change everything. Can't wait to try it out.",
            likes: 12
        },
        {
            id: 2,
            author: "VRDeveloper",
            avatar: "https://randomuser.me/api/portraits/women/23.jpg",
            time: "45 minutes ago",
            content: "As a VR developer, this opens up so many possibilities for more intuitive interfaces. Exciting times ahead!",
            likes: 8
        }
    ]
};

// State management
let currentView = 'home';
let currentCategory = 'All News';
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    applyTheme();
    loadContent();
    setupIntersectionObserver();
    setupSmoothScrolling();
}

function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Search functionality
    const searchToggle = document.getElementById('search-toggle');
    const searchDropdown = document.getElementById('search-dropdown');
    const searchInput = searchDropdown.querySelector('input');
    
    searchToggle.addEventListener('click', () => {
        searchDropdown.classList.toggle('hidden');
        if (!searchDropdown.classList.contains('hidden')) {
            searchInput.focus();
        }
    });

    // Close search dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchToggle.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.add('hidden');
        }
    });

    // Search input functionality
    searchInput.addEventListener('input', handleSearch);

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Category filter buttons
    setupCategoryFilters();

    // Newsletter form
    setupNewsletterForm();

    // Submit news form
    setupSubmitNewsForm();

    // Scroll to top on logo click
    document.querySelector('a[onclick="navigate(event, \'home\')"]').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('section:nth-of-type(2) button');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-primary-100', 'dark:bg-primary-900', 'text-primary-700', 'dark:text-primary-200');
                btn.classList.add('hover:bg-gray-100', 'dark:hover:bg-slate-700');
            });
            
            // Add active class to clicked button
            button.classList.add('bg-primary-100', 'dark:bg-primary-900', 'text-primary-700', 'dark:text-primary-200');
            button.classList.remove('hover:bg-gray-100', 'dark:hover:bg-slate-700');
            
            currentCategory = button.textContent;
            filterNewsByCategory(currentCategory);
        });
    });
}

function setupNewsletterForm() {
    const newsletterForms = document.querySelectorAll('form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            if (email) {
                showNotification('Successfully subscribed to TechPulse newsletter!', 'success');
                form.reset();
            }
        });
    });
}

function setupSubmitNewsForm() {
    const submitButton = document.querySelector('button[onclick*="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal('submit-news-modal');
        });
    }

    // Handle form submission in modal
    const modal = document.getElementById('submit-news-modal');
    const submitBtn = modal.querySelector('button[type="button"]:last-child');
    
    submitBtn.addEventListener('click', () => {
        const title = document.getElementById('news-title').value;
        const url = document.getElementById('news-url').value;
        const category = document.getElementById('news-category').value;
        const description = document.getElementById('news-description').value;
        
        if (title && url && category && description) {
            showNotification('News story submitted successfully! We\'ll review it shortly.', 'success');
            toggleModal('submit-news-modal');
            // Reset form
            modal.querySelectorAll('input, select, textarea').forEach(field => field.value = '');
        } else {
            showNotification('Please fill in all fields.', 'error');
        }
    });
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyTheme();
}

function applyTheme() {
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function loadContent() {
    renderLatestNews();
    renderTrendingTopics();
    setupLoadMoreButton();
}

function renderLatestNews() {
    const newsGrid = document.querySelector('.grid.md\\:grid-cols-2.gap-6');
    const newsToShow = currentCategory === 'All News' 
        ? newsData.slice(1, 5) 
        : newsData.filter(item => item.category === currentCategory).slice(0, 4);
    
    newsGrid.innerHTML = newsToShow.map(item => `
        <article class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md card-hover transition-all animate-fade-in">
            <img src="${item.image}" alt="${item.title}" class="w-full h-40 object-cover">
            <div class="p-4">
                <div class="flex items-center space-x-2 mb-2">
                    <span class="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 text-xs font-medium rounded-full">${item.category}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">${item.time}</span>
                </div>
                <h3 class="text-lg font-bold mb-2 line-clamp-2">${item.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">${item.excerpt}</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <img src="${item.authorImg}" alt="${item.author}" class="w-6 h-6 rounded-full">
                        <span class="text-xs font-medium">${item.author}</span>
                    </div>
                    <div class="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                        <button class="flex items-center space-x-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" onclick="openComments(${item.id})">
                            <i class="far fa-comment text-xs"></i>
                            <span class="text-xs">${item.comments}</span>
                        </button>
                        <button class="flex items-center space-x-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" onclick="toggleBookmark(this)">
                            <i class="far fa-bookmark text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

function renderTrendingTopics() {
    const trendingContainer = document.querySelector('.bg-white.dark\\:bg-slate-800 .space-y-4');
    
    trendingContainer.innerHTML = trendingTopics.map((item, index) => `
        <div class="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-all cursor-pointer animate-fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ${index + 1}
                </div>
                <div>
                    <p class="font-medium text-sm">${item.topic}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${item.count}</p>
                </div>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
        </div>
    `).join('');
}

function setupLoadMoreButton() {
    const loadMoreBtn = document.querySelector('button:contains("Load More Stories")') || 
                        document.querySelector('button[class*="w-full"][class*="py-3"]');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // Simulate loading more content
            loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            setTimeout(() => {
                const additionalNews = newsData.slice(6);
                const newsGrid = document.querySelector('.grid.md\\:grid-cols-2.gap-6');
                
                additionalNews.forEach((item, index) => {
                    const article = document.createElement('div');
                    article.innerHTML = `
                        <article class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md card-hover transition-all animate-fade-in" style="animation-delay: ${index * 0.1}s">
                            <img src="${item.image}" alt="${item.title}" class="w-full h-40 object-cover">
                            <div class="p-4">
                                <div class="flex items-center space-x-2 mb-2">
                                    <span class="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 text-xs font-medium rounded-full">${item.category}</span>
                                    <span class="text-xs text-gray-500 dark:text-gray-400">${item.time}</span>
                                </div>
                                <h3 class="text-lg font-bold mb-2 line-clamp-2">${item.title}</h3>
                                <p class="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">${item.excerpt}</p>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <img src="${item.authorImg}" alt="${item.author}" class="w-6 h-6 rounded-full">
                                        <span class="text-xs font-medium">${item.author}</span>
                                    </div>
                                    <div class="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                                        <button class="flex items-center space-x-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" onclick="openComments(${item.id})">
                                            <i class="far fa-comment text-xs"></i>
                                            <span class="text-xs">${item.comments}</span>
                                        </button>
                                        <button class="flex items-center space-x-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" onclick="toggleBookmark(this)">
                                            <i class="far fa-bookmark text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    `;
                    newsGrid.appendChild(article.firstElementChild);
                });
                
                loadMoreBtn.innerHTML = 'Load More Stories';
                loadMoreBtn.style.display = 'none'; // Hide after loading all content
            }, 1000);
        });
    }
}

function filterNewsByCategory(category) {
    renderLatestNews();
    
    // Add smooth scroll animation
    const mainContent = document.querySelector('section:nth-of-type(3)');
    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    
    if (query.length > 2) {
        const searchResults = newsData.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.excerpt.toLowerCase().includes(query)
        );
        
        displaySearchResults(searchResults);
    }
}

function displaySearchResults(results) {
    const dropdown = document.getElementById('search-dropdown');
    const input = dropdown.querySelector('input');
    
    // Remove existing results
    const existingResults = dropdown.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    if (results.length > 0) {
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results mt-2 max-h-64 overflow-y-auto';
        
        resultsContainer.innerHTML = results.slice(0, 5).map(item => `
            <div class="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded cursor-pointer">
                <h4 class="font-medium text-sm">${item.title}</h4>
                <p class="text-xs text-gray-500 dark:text-gray-400">${item.category} • ${item.time}</p>
            </div>
        `).join('');
        
        dropdown.appendChild(resultsContainer);
    }
}

function openComments(newsId) {
    const modal = document.getElementById('comment-modal');
    const commentsContainer = modal.querySelector('.space-y-6');
    
    const newsComments = comments[newsId] || [];
    
    commentsContainer.innerHTML = newsComments.length > 0 
        ? newsComments.map(comment => `
            <div class="flex items-start space-x-3">
                <img src="${comment.avatar}" alt="${comment.author}" class="w-10 h-10 rounded-full">
                <div class="flex-grow">
                    <div class="bg-gray-100 dark:bg-slate-700 rounded-lg p-3">
                        <div class="flex items-center justify-between mb-1">
                            <span class="font-medium text-sm">${comment.author}</span>
                            <span class="text-xs text-gray-500 dark:text-gray-400">${comment.time}</span>
                        </div>
                        <p class="text-sm">${comment.content}</p>
                    </div>
                    <div class="flex items-center space-x-4 mt-2">
                        <button class="flex items-center space-x-1 text-xs text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                            <i class="far fa-thumbs-up"></i>
                            <span>${comment.likes}</span>
                        </button>
                        <button class="text-xs text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">Reply</button>
                    </div>
                </div>
            </div>
        `).join('')
        : '<div class="text-center py-8 text-gray-500 dark:text-gray-400">No comments yet. Be the first to comment!</div>';
    
    toggleModal('comment-modal');
}

function toggleBookmark(button) {
    const icon = button.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
    
    if (icon.classList.contains('fas')) {
        showNotification('Article bookmarked!', 'success');
    } else {
        showNotification('Article removed from bookmarks.', 'info');
    }
}

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
    
    if (!modal.classList.contains('hidden')) {
        // Animate modal appearance
        setTimeout(() => {
            modal.querySelector('.hs-overlay-open\\:mt-7').classList.add('mt-7', 'opacity-100');
        }, 10);
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300`;
    
    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-black'
    };
    
    notification.classList.add(...colors[type].split(' '));
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all articles
    document.querySelectorAll('article').forEach(article => {
        observer.observe(article);
    });
}

function setupSmoothScrolling() {
    // Add smooth scrolling behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navigation functionality
function navigate(event, section) {
    event.preventDefault();
    
    switch(section) {
        case 'home':
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'categories':
            document.querySelector('section:nth-of-type(2)').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'trending':
            document.querySelector('.bg-white.dark\\:bg-slate-800').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'submit':
            toggleModal('submit-news-modal');
            break;
    }
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

// Add CSS for line-clamp and hide-scrollbar utilities
const style = document.createElement('style');
style.textContent = `
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
`;
document.head.appendChild(style);

// Export functions for global access
window.navigate = navigate;
window.toggleModal = toggleModal;
window.openComments = openComments;
window.toggleBookmark = toggleBookmark;
