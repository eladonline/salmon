import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabelInput from 'react-floating-label-input';
import FloatingLabelSelect from 'src/components/reactSelectFloat/react-floating-label-select/dist/react-floating-label-select.esm.js';

const brand = 'static/icons/logoWhite.png';

export default class JoinUs extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: {},
      formType: 1
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }
  handleChangeInput(e, id) {
    const { value } = this.state;
    value[id] = e.target.value;

    this.setState({ value });
  }
  handleChangeSelect(e, id) {
    const { value } = this.state;
    value[id] = e.target.value;
    this.setState({ value });
  }
  handleRadio(num) {
    this.setState({ formType: num });
  }
  RadioPoI() {
    return (
      <div className="radios">
        <label
          htmlFor="INSTITUTION"
          className="d-flex"
          data-active={this.state.formType === 1}
          onClick={() => this.handleRadio(1)}
        >
          <div className="checkmark">
            <div className="checkmark-bullet" />
          </div>
          TRADING AS AN &nbsp; <span> INSTITUTION?</span>
          <input type="radio" />
        </label>

        <label
          htmlFor="INDEPENDENTLY"
          className="d-flex"
          data-active={this.state.formType === 2}
          onClick={() => this.handleRadio(2)}
        >
          <div className="checkmark">
            <div className="checkmark-bullet" />
          </div>
          TRADING &nbsp; <span> INDEPENDENTLY?</span>
          <input type="radio" />
        </label>
      </div>
    );
  }
  submit() {
    /** make a call here */
  }
  render() {
    return (
      <div className="main-container-joinUs" id="joinUs-mainCon">
        <div>
          <section>
            <header>
              <h5>JOIN US</h5>
              <h1>
                The Future is <br /> Bright for Crypto
              </h1>
            </header>
            <div>
              {this.RadioPoI()}
              {this.state.formType === 1 ? (
                <FormInstatution
                  handleInputChange={this.handleChangeInput}
                  handleSelectChange={this.handleChangeSelect}
                  value={this.state.value}
                />
              ) : (
                <FormIndependent
                  handleInputChange={this.handleChangeInput}
                  handleSelectChange={this.handleChangeSelect}
                  value={this.state.value}
                />
              )}
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

const Footer = () => (
  <footer>
    <div>
      <img src={brand} alt="brand" />
      <p>© 2018 Inx. All rights reserved. Designed by Pumika Digital LTD. </p>
    </div>
    <div>
      <ul>
        <li> About INX</li>
        <li> The Exchange</li>
        <li> Regulation</li>
      </ul>
    </div>
  </footer>
);
const FormInstatution = p => (
  <form>
    <div>
      <LabeledInput
        onChange={e => p.handleInputChange(e, 'Iname')}
        id="Iname"
        placeholder="Type youe name"
        value={p.value.Iname || ''}
      />
      <LabeledInput
        onChange={e => p.handleInputChange(e, 'Iemail')}
        id="Iemail"
        placeholder="Email"
        value={p.value.Iemail || ''}
      />
    </div>
    <div>
      <LabeledInput
        onChange={e => p.handleInputChange(e, 'CompanyName')}
        id="CompanyName"
        label="Company name"
        value={p.value.CompanyName || ''}
      />
      <LabeledSelect
        id="CompanySize"
        label="Company Size"
        list={employees}
        onChange={e => p.handleSelectChange(e, 'CompanySize')}
      />
      <LabeledSelect
        id="Industry"
        label="Industry"
        list={industry}
        onChange={e => p.handleSelectChange(e, 'Industry')}
      />
    </div>
    <div>
      <LabeledSelect
        id="PrimaryINX"
        label="Primary use of INX"
        list={primaryINX}
        onChange={e => p.handleSelectChange(e, 'PrimaryINX')}
        inx={true}
      />
      <Button>Institutional Registration</Button>
    </div>
  </form>
);
const FormIndependent = p => {
  return (
    <form>
      <div>
        <LabeledInput
          onChange={e => p.handleInputChange(e, 'Pname')}
          id="Pname"
          placeholder="Full Name"
          value={p.value.Pname || ''}
        />
        <LabeledInput
          onChange={e => p.handleInputChange(e, 'Pemail')}
          id="Pemail"
          placeholder="Your Name"
          value={p.value.Pemail || ''}
        />
      </div>
      <div>
        <LabeledSelect
          id="Pcountry"
          list={country}
          onChange={e => p.handleSelectChange(e, 'country')}
        />
        <LabeledInput
          id="Pphone"
          placeholder="Phone Number"
          onChange={e => p.handleInputChange(e, 'phone')}
          value={p.value.phone || ''}
        />
      </div>
      <div>
        <LabeledSelect
          id="pTradinfPreference"
          list={pTradingPreference}
          onChange={e => p.handleSelectChange(e, 'TradinfPreference')}
          inx={true}
        />
        <Button>Trader Registration</Button>
      </div>
    </form>
  );
};

const LabeledInput = ({ id, onChange, value, type, label, placeholder }) => {
  return (
    <div className="floatingLabel">
      <FloatingLabelInput
        id={id}
        onChange={onChange}
        type={type}
        label={label}
        value={value}
        shrink={0}
        placeholder={placeholder}
      />
    </div>
  );
};

const LabeledSelect = ({ id, onChange, list, label, inx }) => {
  return (
    <div className={(inx && `floatingSelect floatingSelect-inx`) || `floatingSelect`}>
      <FloatingLabelSelect id={id} onChange={onChange} label={label} shrink={0} list={list} />
    </div>
  );
};

const employees = [
  <option key="joineUs456" hidden disabled selected />,
  <option key="joineUs1" value="10">
    10 employees
  </option>,
  <option key="joineUs2" value="20">
    20 employees
  </option>,
  <option key="joineUs3" value="30">
    30 employees
  </option>,
  <option key="joineUs4" value="40">
    40 employees
  </option>
];
const industry = [
  <option key="joineUs654" hidden disabled selected />,
  <option key="joineUs5" value="10">
    10 industry
  </option>,
  <option key="joineUs6" value="20">
    20 industry
  </option>,
  <option key="joineUs7" value="30">
    30 industry
  </option>,
  <option key="joineUs8" value="40">
    40 industry
  </option>
];

const primaryINX = [
  <option key="joineUs753" hidden disabled selected />,
  <option key="joineUs9" value="10">
    10 PrimaryINX
  </option>,
  <option key="joineUs0" value="20">
    20 PrimaryINX
  </option>,
  <option key="joineUs01" value="30">
    30 PrimaryINX
  </option>,
  <option key="joineUs02" value="40">
    40 PrimaryINX
  </option>
];

const country = [
  <option key="joineUscountry753" hidden disabled selected>
    Country
  </option>
];
const pTradingPreference = [
  <option key="joineUspTradinfPreference753" hidden disabled selected>
    Trading Preference
  </option>
];
