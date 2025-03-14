// @tailwind base;
// @tailwind components;
// @tailwind utilities;


// .bg-primary {
//     background-image: var(--primary) !important; /* Force gradient */
//   }

// /* Dark Mode */
// .dark {
//   --bg: var(--main-dark);
//   --card-bg: var(--secondary-dark);
//   --text: var(--text-dark);
//   --icon: var(--icon-dark);
//   --outline: rgba(255, 255, 255, 0.5);
// }

// /* Light Mode */
// .light {
//   --bg: var(--main-light);
//   --card-bg: var(--secondary-light);
//   --text: var(--text-light);
//   --icon: var(--icon-light);
//   --outline: rgba(200, 23, 23, 0.1);
// }


// :root {
//   /* LIGHT MODE */
//   --main-light: #f8f9fa;
//   --secondary-light:  #e9ecef;

//   /* Backgrounds */
//   --background: 0 0% 100%; /* Pure white */
//   --foreground: 222.2 47.4% 11.2%; /* Deep black for text */

//   /* Primary (Gradients and Solid States) */
//   --primary: linear-gradient(90deg, #FF5733, #C70039, #900C3F); /* Main Gradient */
//   --primary-hover: linear-gradient(90deg, #FF7F50, #DC143C, #A52A2A); /* Hover Gradient */
//   --primary-active: #C70039; /* Solid Bright Red for Active */
//   --primary-foreground: #FFFFFF; /* Pure white text */

//   /* Secondary (Light Grays) */
//   --secondary: hsl(220 10% 94%); /* Soft gray */
//   --secondary-hover: hsl(220 10% 88%); /* Slightly darker gray on hover */
//   --secondary-active: hsl(220 10% 80%); /* Darker gray */
//   --secondary-foreground: hsl(0, 0%, 11%); /* Black text */

//   /* Cards */
//   --card: hsl(0 0% 98%); /* Light gray-white */
//   --card-hover: hsl(0 0% 95%); /* Lighter hover */
//   --card-active: hsl(0 0% 92%); /* Darker active */
//   --card-foreground: hsl(0 0% 15%); /* Dark gray text */

//   /* Muted */
//   --muted: hsl(220 8% 90%); /* Light muted */
//   --muted-hover: hsl(220 8% 70%); /* Bright muted hover */
//   --muted-active: hsl(220 8% 50%); /* Muted active */
//   --muted-foreground: hsl(0 0% 65%); /* Medium gray text */

//   /* Borders */
//   --border: hsl(220 10% 85%); /* Subtle light gray */
//   --border-hover: hsl(220 10% 75%); /* Hover border */
//   --border-active: hsl(220 10% 65%); /* Active border */

//   /* Radius */
//   --radius: 0.5rem;

//   /* Gradients */
//   --gradient-primary: linear-gradient(90deg, #FF5733, #C70039, #900C3F);
//   --gradient-secondary: linear-gradient(90deg, #FF7F50, #DC143C, #A52A2A);
// }

// .dark {
//   /* DARK MODE */
//   --main-dark: #0d0e12;
//   --secondary-dark:  #1e222a;
//   /* Backgrounds */
//   --background: hsl(569 12% 12%); /* Deep dark gray */
//   --foreground: hsl(0 0% 92%); /* Light gray-white text */

//   /* Primary (Gradients and Solid States) */
//   --primary: linear-gradient(90deg, #900C3F, #C70039, #FF5733); /* Reversed Main Gradient */
//   --primary-hover: linear-gradient(90deg, #A52A2A, #DC143C, #FF7F50); /* Lighter Reversed */
//   --primary-active: #C70039; /* Solid Bright Orange for Active */
//   --primary-foreground: hsl(0 0% 100%); /* Pure white */

//   /* Secondary (Dark Grays) */
//   --secondary: hsl(220 6% 20%); /* Dark gray */
//   --secondary-hover: hsl(220 6% 25%); /* Lighter gray */
//   --secondary-active: hsl(220 6% 15%); /* Darker gray */
//   --secondary-foreground: hsl(0 0% 92%); /* Light text */

//   /* Cards */
//   --card: hsl( 8% 15%); /* Dark card */
//   --card-hover: hsl(220 8% 18%); /* Lighter hover */
//   --card-active: hsl(220 8% 12%); /* Darker active */
//   --card-foreground: hsl(0 0% 95%); /* Light gray text */

//   /* Borders */
//   --border: hsl(223, 23%, 6%); /* Subtle dark gray */
//   --border-hover: hsl(220 10% 35%); /* Hover border */
//   --border-active: hsl(220 10% 25%); /* Active border */
// }


// /* Base Primary Background */
// .bg-primary {
//   background-image: var(--primary) !important; /* Force gradient */
//   color: var(--primary-foreground); /* Ensure text visibility */
//   transition: background 0.3s ease, color 0.3s ease;
// }

// /* Hover State for Primary Background */
// .bg-primary-hover:hover {
//   background-image: var(--primary-hover) !important; /* Lighter gradient on hover */
//   color: var(--primary-foreground);
//   transition: background 0.3s ease, color 0.3s ease;
// }

// /* Active State for Primary Background */
// .bg-primary-active:active {
//   background-image: none; /* Solid color for active state */
//   background-color: var(--primary-active) !important; /* Solid active color */
//   color: var(--primary-foreground);
//   transition: background 0.1s ease;
// }

// /* Base Secondary Background */
// .bg-secondary {
//   background-image: none;
//   background-color: var(--secondary);
//   color: var(--secondary-foreground);
//   transition: background 0.3s ease, color 0.3s ease;
// }

// /* Hover State for Secondary Background */
// .bg-secondary-hover:hover {
//   background-color: var(--secondary-hover);
//   color: var(--secondary-foreground);
//   transition: background 0.3s ease, color 0.3s ease;
// }

// /* Active State for Secondary Background */
// .bg-secondary-active:active {
//   background-color: var(--secondary-active);
//   color: var(--secondary-foreground);
//   transition: background 0.1s ease;
// }



// /* Icon Button */
// .icon-button {
//   padding: 0.5rem;
//   border-radius: 50%;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   background: var(--primary);
//   color: var(--text-dark);
// }

// .icon-button:hover {
//   background: var(--primary-hover);
// }

// .icon-button:active {
//   background: var(--primary-active);
// }


// img {
//   border-color: var(--outline);
//   transition: var(--button-transition);
// }

// /* Typography for H1-H6 */
// h1, h2, h3, h4, h5, h6 {
//   font-family: 'Inter', sans-serif;
//   color: var(--text);
//   margin-bottom: 1rem;
// }

// h1 {
//   font-size: 2.5rem;
//   font-weight: bold;
// }
// h2 {
//   font-size: 2rem;
// }
// h3 {
//   font-size: 1.75rem;
// }
// h4 {
//   font-size: 1.5rem;
// }
// h5 {
//   font-size: 1.25rem;
// }
// h6 {
//   font-size: 1rem;
// }