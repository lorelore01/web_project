// --- Element Selectors ---
// Get a reference to the div where we will display messages.
// The 'as HTMLElement' part tells TypeScript to treat this as a generic HTML element.
const appOutput = document.getElementById('app-output') as HTMLElement;

// Get a reference to the button. We use querySelector for class-based selection.
// We also tell TypeScript this is specifically a button element for better type safety.
const actionButton = document.querySelector(
  '.action-button'
) as HTMLButtonElement;

// --- Functions ---
/**
 * Updates the text content of the appOutput element.
 * @param {string} message - The new message to display.
 */
function updateOutput(message: string): void {
  // First, check if the element actually exists before trying to modify it.
  if (appOutput) {
    appOutput.textContent = message;
  } else {
    console.error('Error: The "app-output" element was not found in the DOM.');
  }
}

// --- Main Logic ---
/**
 * Initializes the application by setting up event listeners and the initial state.
 */
function initializeApp(): void {
  // Set the initial message when the script first runs.
  updateOutput('✅ TypeScript is loaded and ready!');

  // Check if the button exists before adding an event listener.
  if (actionButton) {
    // Listen for any 'click' events on the button.
    actionButton.addEventListener('click', () => {
      // When the button is clicked, update the output with a new message.
      updateOutput('🎉 You clicked the button! Great job!');
    });
  } else {
    console.error(
      'Error: The "action-button" element was not found in the DOM.'
    );
  }
}

// --- Start the App ---
// Run the main initialization function to get everything started.
initializeApp();
