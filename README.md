# Datepicker Plugin for React Project

A simple, customizable `date picker` component for React, designed for the WealthHealth application. This plugin provides an intuitive date selection interface and can be easily integrated into any React project.

## Installation

To install the `datepicker-plugin-wh` package, use npm:

```bash
npm install datepicker-plugin-wh

```

## Check installed dependencies: Make sure the plugin is added to `package.json`:

```js
"dependencies": {
  "datepicker-plugin-wh": "^1.0.7",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-scripts": "5.0.1"
}
```

## Usage

### Step 1: Import the Component In your React project,

import the `DatePicker` component.

```js
import { DatePicker } from "datepicker-plugin-wh";
import React, { useState } from "react";
```

### Step 2: Using `datepicker-plugin-wh` in `JavaScript`

The `datepicker-plugin-wh` plugin works seamlessly in JavaScript projects without additional configuration.
Below is an example of how to use the plugin in a simple React project:

```jsx
function App() {
  // State to manage the selected date
  const [formData, setFormData] = useState({
    dateOfBirth: Date.now(), // Initialize with the current timestamp
  });

  // Handler to update the date field
  const handleDateChange = (field) => (date) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date, // Dynamically update the field
    }));
  };

  return (
    <DatePicker
      id="date-of-birth"
      label="Date of Birth"
      value={formData.dateOfBirth}
      onChange={handleDateChange("dateOfBirth")}
    />
  );
}

export default App;
```

## Using datepicker-plugin-wh in `TypeScript`

To use `datepicker-plugin-wh` in a TypeScript project, you need to ensure that the plugin's props are properly typed.

Add the `DatePicker` component to your form or UI component by specifying its props.
Here’s an example:

```typescript
<DatePicker
  id="date-of-birth"
  label="Date of Birth"
  value={formData.dateOfBirth}
  onChange={handleDateChange("dateOfBirth")}
/>
```

### Props

| Prop       | Type       | Required | Description                                       |
| ---------- | ---------- | -------- | ------------------------------------------------- |
| `id`       | `string`   | Yes      | Unique identifier for the date picker.            |
| `label`    | `string`   | Yes      | Label text displayed above the date input.        |
| `value`    | `string`   | Yes      | Date value in `YYYY-MM-DD` format.                |
| `onChange` | `function` | Yes      | Callback function that returns the selected date. |

## Key Differences Between `JavaScript` and `TypeScript`

| Feature                 | JavaScript Example    | TypeScript Example                          |
| ----------------------- | --------------------- | ------------------------------------------- |
| Typing                  | Not required          | Requires types for props and state          |
| Setup                   | Works out of the box  | Needs type definitions for better safety    |
| Flexibility             | High (dynamic typing) | Strict (static typing)                      |
| Custom Types for Plugin | Not needed            | Needed if the plugin does not provide types |

## CSS Styling

The `DatePicker` component includes a default style sheet (`DatePicker.css`) that provides basic styling. You can override these styles by adding custom CSS in your project.

### Add plugin styles: For example, in the `src/index.css` file, add import:

```css
@import "../node_modules/datepicker-plugin-wh/dist/DatePicker.css";
```

### Default CSS Classes

- `.date-picker`: Wrapper for the date picker component.
- `.date-picker-label`: Styles for the label above the date picker input.
- `.date-picker-input`: Styles for the date input field.

### Customizing Styles

To customize the appearance of the `date picker`, override the CSS classes in your project’s CSS files.

Example:

```css
/* Custom styles for DatePicker */
.date-picker {
  max-width: 300px;
  margin-bottom: 1rem;
}
```

To copy CSS files to the build directory `dist` after compiling TypeScript, install the `cpx` package:

```bash
npm npm install cpx --save-dev

```

For your `scripts` configuration in `package.json`, particularly for Windows users, you may need to modify
the `build` script slightly. The current configuration is:

```typescript
"scripts": {
    "build": "tsc && cpx \"src/DatePicker.css\" dist"
}
```
