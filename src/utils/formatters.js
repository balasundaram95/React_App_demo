// This file should be .js, not .jsx, as it contains no JSX markup.

/**
 * Formats a number into a standard US dollar currency string.
 * @param {number} amount - The number to format.
 * @returns {string} - A formatted currency string, e.g., "$10,632.00".
 */
export const formatCurrency = (amount) => {
  if (typeof amount !== 'number') return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};