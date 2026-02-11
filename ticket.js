// Event data - Updated with GH₵ prices
const events = [
    {
        id: 1,
        title: "Summer Music Festival 2023",
        category: "music",
        date: "August 15, 2023",
        time: "6:00 PM - 11:00 PM",
        location: "Accra International Conference Centre",
        description: "Join us for an unforgettable night with top artists from Ghana and across Africa. Featuring live performances, food trucks, and amazing vibes.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tickets: [
            { type: "General Admission", price: 89.99, description: "Access to festival grounds" },
            { type: "VIP Pass", price: 199.99, description: "VIP lounge, premium viewing, complimentary drinks" },
            { type: "Platinum Experience", price: 349.99, description: "Front row, backstage access, meet & greet" }
        ]
    },
    {
        id: 2,
        title: "Tech Innovators Conference",
        category: "conference",
        date: "September 22-24, 2023",
        time: "9:00 AM - 6:00 PM Daily",
        location: "Kempinski Hotel, Accra",
        description: "A gathering of tech leaders, innovators, and entrepreneurs. Learn about the latest trends in AI, blockchain, and future technologies.",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tickets: [
            { type: "Standard Pass", price: 299.99, description: "Access to all conference sessions" },
            { type: "Premium Pass", price: 499.99, description: "Includes workshops and networking events" },
            { type: "Executive Pass", price: 899.99, description: "VIP seating, exclusive dinner with speakers" }
        ]
    },
    {
        id: 3,
        title: "Ghana Premier League Finals",
        category: "sports",
        date: "October 10, 2023",
        time: "7:30 PM - 10:30 PM",
        location: "Accra Sports Stadium",
        description: "Witness the championship showdown between the top two teams. Experience the thrill of live football at its finest.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1190&q=80",
        tickets: [
            { type: "Popular Stand", price: 49.99, description: "Popular stand seating" },
            { type: "VIP Stand", price: 99.99, description: "VIP stand with better views" },
            { type: "VVIP Lounge", price: 249.99, description: "VVIP lounge with premium amenities" }
        ]
    },
    {
        id: 4,
        title: "Modern Art Exhibition",
        category: "arts",
        date: "November 5-30, 2023",
        time: "10:00 AM - 6:00 PM Daily",
        location: "National Museum of Ghana",
        description: "Explore contemporary artworks from emerging and established Ghanaian artists. A journey through modern artistic expression.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        tickets: [
            { type: "General Admission", price: 24.99, description: "Access to all exhibition halls" },
            { type: "Guided Tour", price: 49.99, description: "Includes expert guided tour" },
            { type: "VIP Experience", price: 99.99, description: "Private viewing, curator meet & greet" }
        ]
    },
    {
        id: 5,
        title: "Highlife & Afrobeat Night",
        category: "music",
        date: "December 8, 2023",
        time: "8:00 PM - 12:00 AM",
        location: "+233 Jazz Bar, Accra",
        description: "An intimate evening of smooth Highlife and Afrobeat performances by renowned Ghanaian musicians.",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tickets: [
            { type: "General Admission", price: 45.99, description: "Standing room access" },
            { type: "Reserved Seating", price: 79.99, description: "Reserved table seating" },
            { type: "Premium Booth", price: 199.99, description: "Private booth with bottle service" }
        ]
    },
    {
        id: 6,
        title: "Accra Marathon 2023",
        category: "sports",
        date: "November 12, 2023",
        time: "7:00 AM - 2:00 PM",
        location: "Independence Square to Labadi Beach",
        description: "Join thousands of runners in this annual marathon event. Choose from full marathon, half marathon, or 5K run.",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1552674605-db6ffd8facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tickets: [
            { type: "5K Run", price: 65.00, description: "5 kilometer course participation" },
            { type: "Half Marathon", price: 95.00, description: "21 kilometer course participation" },
            { type: "Full Marathon", price: 125.00, description: "42 kilometer course participation" }
        ]
    }
];

// Global state
let cart = [];
let currentEvent = null;
let currentSelections = {};
let selectedPaymentMethod = 'mobile-money'; // Default payment method

// DOM Elements
const eventsContainer = document.getElementById('events-container');
const ticketModal = document.getElementById('ticket-modal');
const paymentMethodModal = document.getElementById('payment-method-modal');
const mobileMoneyModal = document.getElementById('mobile-money-modal');
const cardPaymentModal = document.getElementById('card-payment-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const cartCount = document.getElementById('cart-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const closeModalButtons = document.querySelectorAll('.close-modal, .close-payment-method-modal, .close-mobile-money-modal, .close-card-modal');
const proceedToPaymentBtn = document.getElementById('proceed-to-payment');
const continueToPaymentDetailsBtn = document.getElementById('continue-to-payment-details');
const mobileMoneyForm = document.getElementById('mobile-money-form');
const cardPaymentForm = document.getElementById('card-payment-form');
const confirmMobileMoneyBtn = document.getElementById('confirm-mobile-money');
const confirmCardPaymentBtn = document.getElementById('confirm-card-payment');
const returnToEventsBtn = document.getElementById('return-to-events');
const methodOptions = document.querySelectorAll('.method-option');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayEvents(events);
    setupEventListeners();
});

// Display events in the grid
function displayEvents(eventsArray) {
    eventsContainer.innerHTML = '';
    
    eventsArray.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.dataset.category = event.category;
        
        eventCard.innerHTML = `
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <div class="event-content">
                <span class="event-category">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-details">
                    <p><i class="fas fa-calendar"></i> ${event.date}</p>
                    <p><i class="fas fa-clock"></i> ${event.time}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                </div>
                <div class="event-price">
                    <span class="price">GH₵${event.price.toFixed(2)}</span>
                    <button class="btn-view" data-id="${event.id}">View Tickets</button>
                </div>
            </div>
        `;
        
        eventsContainer.appendChild(eventCard);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', function() {
            const eventId = parseInt(this.dataset.id);
            openTicketModal(eventId);
        });
    });
}

// Filter events by category
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        
        if (filter === 'all') {
            displayEvents(events);
        } else {
            const filteredEvents = events.filter(event => event.category === filter);
            displayEvents(filteredEvents);
        }
    });
});

// Open ticket modal with event details
function openTicketModal(eventId) {
    currentEvent = events.find(event => event.id === eventId);
    
    if (!currentEvent) return;
    
    // Reset selections for this event
    currentSelections = {};
    
    // Update modal content
    document.getElementById('modal-event-title').textContent = currentEvent.title;
    document.getElementById('modal-event-image').src = currentEvent.image;
    document.getElementById('modal-event-image').alt = currentEvent.title;
    document.getElementById('modal-event-date').textContent = currentEvent.date;
    document.getElementById('modal-event-time').textContent = currentEvent.time;
    document.getElementById('modal-event-location').textContent = currentEvent.location;
    document.getElementById('modal-event-description').textContent = currentEvent.description;
    
    // Generate ticket options
    const ticketTypesContainer = document.getElementById('ticket-types-container');
    ticketTypesContainer.innerHTML = '';
    
    currentEvent.tickets.forEach((ticket, index) => {
        const ticketType = document.createElement('div');
        ticketType.className = 'ticket-type';
        ticketType.innerHTML = `
            <div class="ticket-info">
                <h4>${ticket.type}</h4>
                <p>${ticket.description}</p>
            </div>
            <div class="ticket-quantity">
                <button class="quantity-btn minus" data-index="${index}">-</button>
                <span class="quantity" id="quantity-${index}">0</span>
                <button class="quantity-btn plus" data-index="${index}">+</button>
            </div>
            <div class="ticket-price">GH₵${ticket.price.toFixed(2)}</div>
        `;
        
        ticketTypesContainer.appendChild(ticketType);
        
        // Initialize selection
        currentSelections[index] = 0;
    });
    
    // Update total
    updateTotal();
    
    // Show modal
    ticketModal.style.display = 'block';
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const isPlus = this.classList.contains('plus');
            
            if (isPlus) {
                currentSelections[index]++;
            } else if (currentSelections[index] > 0) {
                currentSelections[index]--;
            }
            
            document.getElementById(`quantity-${index}`).textContent = currentSelections[index];
            updateTotal();
        });
    });
}

// Update total price in ticket modal
function updateTotal() {
    let total = 0;
    
    Object.keys(currentSelections).forEach(index => {
        const quantity = currentSelections[index];
        const ticketPrice = currentEvent.tickets[index].price;
        total += quantity * ticketPrice;
    });
    
    document.getElementById('total-price').textContent = `GH₵${total.toFixed(2)}`;
    
    // Enable/disable proceed button based on whether tickets are selected
    proceedToPaymentBtn.disabled = total === 0;
}

// Open payment method selection modal
function openPaymentMethodModal() {
    // Generate order summary
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = '';
    
    let orderTotal = 0;
    
    Object.keys(currentSelections).forEach(index => {
        const quantity = currentSelections[index];
        
        if (quantity > 0) {
            const ticket = currentEvent.tickets[index];
            const itemTotal = quantity * ticket.price;
            orderTotal += itemTotal;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${quantity}x ${ticket.type}</span>
                <span>GH₵${itemTotal.toFixed(2)}</span>
            `;
            
            orderSummary.appendChild(orderItem);
        }
    });
    
    // Add event details
    const eventItem = document.createElement('div');
    eventItem.className = 'order-item';
    eventItem.innerHTML = `
        <span><strong>${currentEvent.title}</strong></span>
        <span></span>
    `;
    orderSummary.insertBefore(eventItem, orderSummary.firstChild);
    
    // Update total
    document.getElementById('order-total').textContent = `GH₵${orderTotal.toFixed(2)}`;
    
    // Close ticket modal and open payment method modal
    ticketModal.style.display = 'none';
    paymentMethodModal.style.display = 'block';
}

// Open mobile money payment modal
function openMobileMoneyModal() {
    // Generate order summary for mobile money modal
    const mobileMoneySummary = document.getElementById('mobile-money-summary');
    mobileMoneySummary.innerHTML = '';
    
    let orderTotal = 0;
    
    Object.keys(currentSelections).forEach(index => {
        const quantity = currentSelections[index];
        
        if (quantity > 0) {
            const ticket = currentEvent.tickets[index];
            const itemTotal = quantity * ticket.price;
            orderTotal += itemTotal;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${quantity}x ${ticket.type}</span>
                <span>GH₵${itemTotal.toFixed(2)}</span>
            `;
            
            mobileMoneySummary.appendChild(orderItem);
        }
    });
    
    // Add event details
    const eventItem = document.createElement('div');
    eventItem.className = 'order-item';
    eventItem.innerHTML = `
        <span><strong>${currentEvent.title}</strong></span>
        <span></span>
    `;
    mobileMoneySummary.insertBefore(eventItem, mobileMoneySummary.firstChild);
    
    // Update total
    document.getElementById('mobile-money-total').textContent = `GH₵${orderTotal.toFixed(2)}`;
    
    // Close payment method modal and open mobile money modal
    paymentMethodModal.style.display = 'none';
    mobileMoneyModal.style.display = 'block';
}

// Open card payment modal
function openCardPaymentModal() {
    // Generate order summary for card payment modal
    const cardPaymentSummary = document.getElementById('card-payment-summary');
    cardPaymentSummary.innerHTML = '';
    
    let orderTotal = 0;
    
    Object.keys(currentSelections).forEach(index => {
        const quantity = currentSelections[index];
        
        if (quantity > 0) {
            const ticket = currentEvent.tickets[index];
            const itemTotal = quantity * ticket.price;
            orderTotal += itemTotal;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${quantity}x ${ticket.type}</span>
                <span>GH₵${itemTotal.toFixed(2)}</span>
            `;
            
            cardPaymentSummary.appendChild(orderItem);
        }
    });
    
    // Add event details
    const eventItem = document.createElement('div');
    eventItem.className = 'order-item';
    eventItem.innerHTML = `
        <span><strong>${currentEvent.title}</strong></span>
        <span></span>
    `;
    cardPaymentSummary.insertBefore(eventItem, cardPaymentSummary.firstChild);
    
    // Update total
    document.getElementById('card-payment-total').textContent = `GH₵${orderTotal.toFixed(2)}`;
    
    // Close payment method modal and open card payment modal
    paymentMethodModal.style.display = 'none';
    cardPaymentModal.style.display = 'block';
}

// Process mobile money payment
function processMobileMoneyPayment(event) {
    event.preventDefault();
    
    // Validate form
    const mobileProvider = document.getElementById('mobile-provider').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const mobileName = document.getElementById('mobile-name').value;
    
    if (!mobileProvider || !mobileNumber || !mobileName) {
        alert('Please fill in all required mobile money details.');
        return;
    }
    
    // Simulate payment processing
    simulatePaymentProcessing('mobile-money');
}

// Process card payment
function processCardPayment(event) {
    event.preventDefault();
    
    // Validate form
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const email = document.getElementById('email').value;
    
    if (!cardName || !cardNumber || !expiryDate || !cvv || !email) {
        alert('Please fill in all card payment details.');
        return;
    }
    
    // Validate card number format (basic validation)
    const cleanCardNumber = cardNumber.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cleanCardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }
    
    // Simulate payment processing
    simulatePaymentProcessing('card');
}

// Simulate payment processing
function simulatePaymentProcessing(paymentMethod) {
    // Show loading state
    const confirmBtn = paymentMethod === 'mobile-money' ? confirmMobileMoneyBtn : confirmCardPaymentBtn;
    const originalText = confirmBtn.textContent;
    confirmBtn.textContent = 'Processing...';
    confirmBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Generate random booking ID
        const bookingId = `EVT-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
        document.getElementById('booking-id').textContent = bookingId;
        
        // Add to cart and update cart count
        let itemCount = 0;
        Object.keys(currentSelections).forEach(index => {
            itemCount += currentSelections[index];
        });
        
        cartCount.textContent = parseInt(cartCount.textContent) + itemCount;
        
        // Add to cart
        cart.push({
            eventId: currentEvent.id,
            eventTitle: currentEvent.title,
            selections: {...currentSelections},
            paymentMethod: paymentMethod
        });
        
        // Reset buttons
        confirmBtn.textContent = originalText;
        confirmBtn.disabled = false;
        
        // Close current modal and show confirmation
        if (paymentMethod === 'mobile-money') {
            mobileMoneyModal.style.display = 'none';
            mobileMoneyForm.reset();
        } else {
            cardPaymentModal.style.display = 'none';
            cardPaymentForm.reset();
        }
        
        confirmationModal.style.display = 'block';
    }, 2000);
}

// Setup event listeners
function setupEventListeners() {
    // Close modals when clicking X
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (ticketModal.style.display === 'block') {
                ticketModal.style.display = 'none';
            }
            if (paymentMethodModal.style.display === 'block') {
                paymentMethodModal.style.display = 'none';
            }
            if (mobileMoneyModal.style.display === 'block') {
                mobileMoneyModal.style.display = 'none';
                mobileMoneyForm.reset();
            }
            if (cardPaymentModal.style.display === 'block') {
                cardPaymentModal.style.display = 'none';
                cardPaymentForm.reset();
            }
            if (confirmationModal.style.display === 'block') {
                confirmationModal.style.display = 'none';
            }
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === ticketModal) {
            ticketModal.style.display = 'none';
        }
        if (event.target === paymentMethodModal) {
            paymentMethodModal.style.display = 'none';
        }
        if (event.target === mobileMoneyModal) {
            mobileMoneyModal.style.display = 'none';
            mobileMoneyForm.reset();
        }
        if (event.target === cardPaymentModal) {
            cardPaymentModal.style.display = 'none';
            cardPaymentForm.reset();
        }
        if (event.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });
    
    // Proceed to payment button
    proceedToPaymentBtn.addEventListener('click', openPaymentMethodModal);
    
    // Payment method selection
    methodOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Update active method
            methodOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Set selected payment method
            selectedPaymentMethod = this.dataset.method;
        });
    });
    
    // Continue to payment details button
    continueToPaymentDetailsBtn.addEventListener('click', function() {
        if (selectedPaymentMethod === 'mobile-money') {
            openMobileMoneyModal();
        } else if (selectedPaymentMethod === 'card') {
            openCardPaymentModal();
        }
    });
    
    // Mobile money form submission
    mobileMoneyForm.addEventListener('submit', processMobileMoneyPayment);
    
    // Card payment form submission
    cardPaymentForm.addEventListener('submit', processCardPayment);
    
    // Return to events button
    returnToEventsBtn.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });
}