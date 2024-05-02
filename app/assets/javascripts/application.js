//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


window.GOVUKPrototypeKit.documentReady(() => {
  const logButton = document.getElementById('log-button');
  if (logButton) {
    logButton.addEventListener('click', function() {
      const nursaryOneInvoiceAmountEmma = document.getElementById('invoice-amount-1-et').value;
      const nursaryOneInvoiceAmountClaire = document.getElementById('invoice-amount-1-ct').value;
      const nursaryTwoInvoiceAmountEmma = document.getElementById('invoice-amount-2-et').value;
      const nursaryTwoInvoiceAmountClaire = document.getElementById('invoice-amount-2-ct').value;

      const emmaTotal = parseFloat(nursaryOneInvoiceAmountEmma) + parseFloat(nursaryTwoInvoiceAmountEmma);
      const claireTotal = parseFloat(nursaryOneInvoiceAmountClaire) + parseFloat(nursaryTwoInvoiceAmountClaire);

      const emmaTransfer = emmaTotal*0.8;
      const claireTransfer = claireTotal*0.8;
      
      // Update the inner text of each span with the corresponding invoice amount
      document.querySelector('#result-et span').textContent = `£ ${emmaTransfer}`;
      document.querySelector('#result-2-et span').textContent = `£ ${claireTransfer*1.25}`;

      document.querySelector('#result-ct span').textContent = `£ ${claireTransfer}`;
      document.querySelector('#result-2-ct span').textContent = `£ ${claireTransfer*1.25}`;


      // Make the results div visible
      document.getElementById('display-results').style.display = 'block';
    });
  }
});

