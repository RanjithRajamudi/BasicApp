import React, { Component } from "react";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "./Contacts.scss";
import CaptianAmerica from "../../images/Captian.jpg";
import Hulk from "../../images/Hulk.jpg";
import IronMan from "../../images/stark.jpg";
import DrStrange from "../../images/strange.jpg";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const customHeader = <h2>Profiles</h2>;

    return (
      <div id="contacts-id">
        <h2>{customHeader}</h2>

        <div className="contactrow">
          <div className="contactcolumn">
            <Card
              title="Robert Downey Jr"
              subTitle="IRON MAN"
              className="cardlarge"
              header={<img src={IronMan} alt="" />}
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </div>
            </Card>
          </div>
          <div className="contactcolumn">
            <Card
              title="Chris Evans"
              subTitle="CAPTIAN AMERICA"
              className="cardlarge"
              header={<img src={CaptianAmerica} alt="" />}
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </div>
            </Card>
          </div>
          <div className="contactcolumn">
            <Card
              title="Benedict Cumberbatch"
              subTitle="Dr.STRANGE"
              className="cardlarge"
              header={<img src={DrStrange} alt="" />}
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </div>
            </Card>
          </div>
          <div className="contactcolumn">
            <Card
              title="Mark Ruffalo"
              subTitle="HULK"
              className="cardlarge"
              header={<img src={Hulk} alt="" />}
            >
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
