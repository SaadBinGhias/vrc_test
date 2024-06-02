import React, { useState } from "react";
function AccordianBox() {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="accordian_box">
      <div className="row">
        <div className="col-lg-6">
          <div class="accordion">
            <section
              class="accordion-item accordion-item--default"
              onMouseEnter={() => setHidden(true)}
              onMouseLeave={() => setHidden(false)}
            >
              <h1>Invoices</h1>
              <div class="accordion-item-content">
                <p>
                  E-commerce choice This method is suitable for paying for goods
                  or services. You can set the price in a fiat currency so the
                  payer chooses a cryptocurrency and pays a corresponding
                  amount, or specify the preferable cryptocurrency right away,
                  and the cryptocurrency address will be generated after
                  choosing a network.
                </p>
              </div>
            </section>
            <section class="accordion-item">
              <h1>Recurring payments</h1>
              <div class="accordion-item-content">
                <p>
                  Subscription businesses choice Subscription-based payments for
                  your business. Your client needs to set it up just once to be
                  charged regularly.
                </p>
              </div>
            </section>
            <section class="accordion-item ">
              <h1>Host</h1>
              <div class="accordion-item-content">
                <p>
                  Universal solution for any business The most customizable
                  option, suitable for any type of project. Allow your customers
                  to top up their personal credit in any amount and use it
                  without delay.
                </p>
              </div>
            </section>
            <section class="accordion-item">
              <h1>Payment links</h1>
              <div class="accordion-item-content">
                <p>
                  Single payment choice Create an invoice, share the link and
                  get paid – it's an easy payment solution for your online
                  business of any kind.
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="col-lg-6">
          {hidden ? (
            <div className="main_card">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default AccordianBox;
