# Animated Striped Progress Bar (React + Tailwind CSS)

A simple React progress bar component featuring animated width transition and a diagonal striped overlay, styled with Tailwind CSS and inline styles.

---

## Features

- Smooth animated width changes
- Diagonal striped pattern overlay on the progress fill
- Rounded corners with subtle border and shadow
- Percentage text centered inside the bar
- Fully customizable via Tailwind classes and inline styles

---

### Setup Create React App

## Installation

Make sure your React project is set up with Tailwind CSS.

If you haven't installed Tailwind CSS, follow the official guide:  
https://tailwindcss.com/docs/installation

---

## Usage

1. **Add the `ProgressBar` component to your project**

```jsx
const ProgressBar = ({ progress }) => {
  return (
    <div className="mx-2 my-2 h-8 rounded-lg bg-gray-200 shadow-inner overflow-hidden">
      <div
        className="h-full rounded-lg border border-gray-300 relative"
        style={{
          width: `${progress}%`,
          backgroundColor: "#34D399",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 10px, transparent 10px, transparent 20px)",
          transition: "width 1s ease-in-out",
        }}
      >
        <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white select-none">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;

2. **Use it in your app**
```

import ProgressBar from './ProgressBar';

function App() {
const progressValues = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95];

return (
<>

<h1 className="text-center font-bold my-4">ProgressBar</h1>
{progressValues.map((value) => (
<ProgressBar key={value} progress={value} />
))}
</>
);
}

export default App;
