# Design Details

## Color Palette

- **Background**: `bg-gray-100`
- **Text**: `text-gray-800`
- **Buttons**: `bg-gray-200` with hover `bg-gray-300`
- **Equal Button**: `bg-blue-500` with hover `bg-blue-600` and `text-white`
- **Clear Button**: `bg-red-500` with hover `bg-red-600` and `text-white`

## Typography

- **Font Family**: Default Tailwind fonts
- **Headings**: `font-bold`
- **Input Text**: `text-xl`

## Spacing

- Consistent margins and padding using Tailwind's spacing utilities (e.g., `mb-6`, `p-4`, `gap-2`)

## Responsiveness

- The calculator container has a maximum width (`max-w-md`) to ensure it looks good on all screen sizes.
- Utilizes Flexbox and Grid for layout to adapt to different devices.

## Accessibility

- All buttons are keyboard accessible.
- Sufficient color contrast between text and background.
- Read-only input field for display to prevent user modification via keyboard.

## Transitions

- Smooth background color transitions on button hover using Tailwind's `transition` classes.

## Badge

- **Position**: Below the calculator.
- **Style**: `text-blue-500 underline` with `cursor-pointer` to indicate interactivity.
- **Link**: Always visible and directs to [www.zapt.ai](https://www.zapt.ai).
