//hello
function showOptions(category) {
    var options = document.getElementsByName(category + "-options")[0];
    var amountLabel = document.querySelector("label[for=" + category + "-amount]");
    var amountInput = document.getElementById(category + "-amount");
    var orderButton = document.getElementById("order-btn");
    if (options.style.display === "none") {
      options.style.display = "block";
      amountLabel.style.display = "block";
      amountInput.style.display = "block";
      orderButton.style.display = "block";
    } else {
      options.style.display = "none";
      amountLabel.style.display = "none";
      amountInput.style.display = "none";
      orderButton.style.display = "none";
    }
  }
  
  function calculateTotalPrice() {
    let totalPrice = 0;
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        const optionsSelect = document.querySelector(`select[name="${checkbox.value}-options"]`);
        const amountInput = document.querySelector(`input[name="${checkbox.value}-amount"]`);
        const optionPrice = parseFloat(optionsSelect.value.match(/-?\d+\.\d+/));
        const amount = parseInt(amountInput.value);
        totalPrice += optionPrice * amount;
      }
    });
    return totalPrice.toFixed(2);
  }
  
  // input elementu show/hide eventlistener
  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="food-category"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      const optionsSelect = document.querySelector(`select[name="${checkbox.value}-options"]`);
      const amountInput = document.querySelector(`input[name="${checkbox.value}-amount"]`);
      const orderBtn = document.querySelector('#order-btn');
      if (checkbox.checked) {
        optionsSelect.style.display = 'block';
        amountInput.style.display = 'inline-block';
        orderBtn.style.display = 'inline-block';
      } else {
        optionsSelect.style.display = 'none';
        amountInput.style.display = 'none';
        orderBtn.style.display = 'none';
      }
    });
  });
  
  // cena 
  const orderBtn = document.querySelector('#order-btn');
  orderBtn.addEventListener('click', function() {
    const totalPrice = calculateTotalPrice();
    alert(`Total price: ${totalPrice} EUR`);
  });
  
  // show//hide poga pec ievades
  const dessertCheckbox = document.querySelector('input[type="checkbox"][name="food-category"][value="dessert"]');
  const dessertSelect = document.querySelector('select[name="dessert-options"]');
  const dessertInput = document.createElement("input");
  dessertInput.type = "number";
  dessertInput.name = "dessert-amount";
  dessertInput.placeholder = "Enter amount";
  dessertInput.style.display = "none";
  dessertSelect.parentNode.insertBefore(dessertInput, dessertSelect.nextSibling);
  dessertCheckbox.addEventListener('change', function() {
    if (dessertCheckbox.checked) {
      dessertSelect.style.display = 'block';
      dessertInput.style.display = 'inline-block';
    } else {
      dessertSelect.style.display = 'none';
      dessertInput.style.display = 'none';
    }
  });
  
  // saglabat user input? //
  var script = document.createElement('script');
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
  document.head.appendChild(script);
  $(document).ready(function() {
    
    // Cenas aprekins?
    $('input[name="item[]"]').on('click', function() {
      var totalPrice = 0;
      $('input[name="item[]"]:checked').each(function() {
        totalPrice += parseInt($(this).val());
      });
      $('#total-price').text('$' + totalPrice);
    });
  
    // Pogas uzspiesanas funkcionalitate
    $('#order-btn').on('click', function(e) {
      e.preventDefault();
      $('#checkout-fields').show();
    });
  });