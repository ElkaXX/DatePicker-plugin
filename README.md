# Datepicker Plugin for WealthHealth React Project

A simple, customizable date picker component for React, designed for the WealthHealth application. This plugin provides an intuitive date selection interface and can be easily integrated into any React project.

## Installation

To install the datepicker-plugin-wh package, use npm:

```bash
npm install datepicker-plugin-wh

```

## Usage

Step 1: Import the Component
In your React project, import the DatePicker component.

```typescript
import { DatePicker } from "datepicker-plugin-wh";
```

Step 2: Use the DatePicker Component
Add the DatePicker component to your form or UI component by specifying its props.
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

## CSS Styling

The `DatePicker` component includes a default style sheet (`DatePicker.css`) that provides basic styling. You can override these styles by adding custom CSS in your project.

### Default CSS Classes

- `.date-picker`: Wrapper for the date picker component.
- `.date-picker-label`: Styles for the label above the date picker input.
- `.date-picker-input`: Styles for the date input field.

### Customizing Styles

To customize the appearance of the date picker, override the CSS classes in your project’s CSS files.

Example:

```css
/* Custom styles for DatePicker */
.date-picker {
  max-width: 300px;
  margin-bottom: 1rem;
}
```
