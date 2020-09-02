import React, { Component } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "./Cards.scss";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const customHeader = <h2>Inshots</h2>;

    // const footer = (
    //   <span>
    //     <Button
    //       label="Save"
    //       icon="pi pi-check"
    //       style={{ marginRight: ".25em" }}
    //     />
    //     <Button
    //       label="Cancel"
    //       icon="pi pi-times"
    //       className="p-button-secondary"
    //     />
    //   </span>
    // );
    const navNews = () => {};
    return (
      <div id="cards-id">
        <h2>{customHeader}</h2>

        <div className="cardsrow">
          <div className="cardscolumn">
            <Card
              className="cardscard1"
              title="Bhoomi Pooja of RamMandir started"
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </div>
            </Card>
          </div>
          <div className="cardscolumn">
            <Card className="cardscard" title="Sushanths Case still continued">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </div>
              {/* <Button
                label="Know More"
                // icon="pi pi-check"
                onClick={() => this.navNews()}
              /> */}
            </Card>
          </div>
          <div className="cardscolumn">
            <Card className="cardscard2" title="Rafaels first batch in India">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </div>
            </Card>
          </div>
          <div className="cardscolumn">
            <Card className="cardscard3" title="Boycott China Apps takes twist">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </div>
            </Card>
          </div>
          <div className="cardscolumn">
            <Card className="cardscard4" title="Simple Card">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
