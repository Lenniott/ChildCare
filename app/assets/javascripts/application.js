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
      const childOneBalance = "£65.40"
      const childTwoBalance = "£63.10"

      const childOneContribution = parseFloat(childOneBalance.replace("£", "")) * 0.8;
      const childTwoContribution = parseFloat(childTwoBalance.replace("£", "")) * 0.8;



      const emmaTotal = parseFloat(nursaryOneInvoiceAmountEmma) + parseFloat(nursaryTwoInvoiceAmountEmma) ;
      const claireTotal = parseFloat(nursaryOneInvoiceAmountClaire) + parseFloat(nursaryTwoInvoiceAmountClaire);

      const emmaTransfer = (emmaTotal - childOneContribution)*0.8;
      const claireTransfer = (claireTotal - childTwoContribution)*0.8;
      
      // Update the inner text of each span with the corresponding invoice amount
      document.querySelector('#result-et span').textContent = `£ ${parseFloat(emmaTransfer.toFixed(2))}`;
      document.querySelector('#result-2-et span').textContent = `£ ${parseFloat(((claireTransfer+childOneContribution)*1.25).toFixed(2))}`;

      document.querySelector('#result-ct span').textContent = `£ ${parseFloat(claireTransfer.toFixed(2))}`;
      document.querySelector('#result-2-ct span').textContent = `£ ${parseFloat(((claireTransfer+childTwoContribution)*1.25).toFixed(2))}`;


      // Make the results div visible
      document.getElementById('display-results').style.display = 'block';
    });
  }
});

