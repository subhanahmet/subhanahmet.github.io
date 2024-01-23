let accordion = document.querySelectorAll(".topic_title");

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", (e) => {
//     const activePanel = e.target.closest(".accordion-panel");
//     if (!activePanel) return;
//     toggleAccordion(activePanel);
//   });
// }

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", (e) => {
    const activePanel = e.target.closest(".accordion-panel");
    if (!activePanel) return;
    toggleAccordion(activePanel);
  });
}

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activePanel = panelToActivate.querySelector(".accordion-content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector("button")
      .setAttribute("aria-expanded", false);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", false);
  }
}


// Accridion (accordion-content) içindeki en son pre etiketinden sonra 25px marginBottom eklenecek.

// for (let accordion = 0; accordion < document.querySelectorAll('.accordion-content').length; accordion++) {
//   if (document.querySelectorAll('.accordion-content')[accordion].querySelector('pre:last-of-type') != undefined) {
//     document.querySelectorAll('.accordion-content')[accordion].querySelector('pre:last-of-type').style.marginBottom = '25px';
//   }
// }

// --------------- SİLİNECEK


/*
<!-- {% if first_time_accessed %}
<script>

// Google Sheet için eklenmiştir. Lütfen silmeyiniz.

document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {

        var transaction_id = "{{ order.order_number}}" || "{{checkout.id}}";
        var totalValue = {{ total_price | times: 0.01 }};
        
        var shipping_name = Shopify.checkout.shipping_address.first_name + ' ' + Shopify.checkout.shipping_address.last_name;
        var shipping_adress = Shopify.checkout.shipping_address.address1;
        var shipping_adress2 = Shopify.checkout.shipping_address.address2;
        var zip = Shopify.checkout.shipping_address.zip;
        var city = Shopify.checkout.shipping_address.city;
        var country = Shopify.checkout.shipping_address.country;
        var phone = Shopify.checkout.shipping_address.phone;
        var shipping_method = Shopify.checkout.shipping_rate.title;
        var order_page = "https://dailyrose.myshopify.com/admin/orders/" + Shopify.checkout.order_id

       var sheet_arr = [];

async function myAsyncFunction(item) {
            // Asenkron bir görevi burada gerçekleştir
            return new Promise((resolve) => {
                setTimeout(() => {

fetch(`https://script.google.com/macros/s/AKfycbwQOrmpP4G8o1Ir-Os1MiV-mk4dTeFyCmstP3D5MCdEhwb9Z5ImdN77ztMVTxDTpoU/exec?Order Number=${transaction_id}&Total Value=${item.quantity}`)

                    resolve();
                }, 500);
            });
        }

        async function myAsyncLoop() {

var line_items = document.querySelectorAll('[data-order-summary-section="line-items"] .product')

for (let line_key = 0; line_key < line_items.length; line_key++) {
sheet_arr.push({
                    item_id: Shopify.checkout.line_items[line_key].sku.replace(/#|&/g, '-'),
                    item_name: Shopify.checkout.line_items[line_key].title.replace(/#|&/g, '-'),
                    quantity: Shopify.checkout.line_items[line_key].quantity,
                }); 
}

            for (const item of sheet_arr) {
                await myAsyncFunction(item);
            }
        }

        myAsyncLoop();
        }
    })
</script>
{% endif %} -->
*/
