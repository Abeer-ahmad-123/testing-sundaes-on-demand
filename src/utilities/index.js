/**
 * @function formatCurrency
 * format number as currency (US dollars)
 *
 * @param {number} currency
 * @returns {string} number formatted as currency.
 *
 * @example
 *   format Currency(0)
 *    // =>$0.00
 *
 *
 * @example
 *  format Currency(1.5)
 *   //=>$1.50
 */
export function formatCurrency(currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(currency);
}
