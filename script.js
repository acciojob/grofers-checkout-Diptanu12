const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  
  let totalPrice = 0;
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
  });
  
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total Price: Rs ${totalPrice}`;
  
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
