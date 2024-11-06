const currencyForm = document.getElementById('currencyForm');
const conversionResult = document.getElementById('conversionResult');
const errorMessage = document.getElementById('error-message');

currencyForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    try {
      
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

       
        if (!(toCurrency in data.rates)) {
            errorMessage.textContent = `Currency ${toCurrency} not found`;
            return;
        }

        
        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);

      
        conversionResult.textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
        errorMessage.textContent = '';  
    } catch (error) {
        
        errorMessage.textContent = 'Error fetching data. Please try again.';
        console.error('Error:', error);
    }
});
