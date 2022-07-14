'use strict';

class NombreN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Equipo #" + props.num
    };
    this.handleChange = this.handleChange.bind(this);
    this.handeClick = this.handeClick.bind(this);
  }

  handeClick() {
    console.log(num);
    nameUGraph(parseInt(this.props.num));
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/React.createElement("input", {
      id: "nomEq" + this.props.num,
      className: "form-control",
      type: "text",
      defaultValue: this.state.value,
      onChange: this.handleChange
    }), /*#__PURE__*/React.createElement("button", {
      id: "confirmEq" + this.props.num,
      onClick: this.handleChange,
      className: "btn btn-danger"
    }, "Confirmar nombre"));
  }

}

class MonedasN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "input-group-text"
    }, "# Monedas ganadas"), /*#__PURE__*/React.createElement("span", {
      className: "input-group-text"
    }, /*#__PURE__*/React.createElement("strong", {
      id: "monedas" + this.props.num
    }, "0")), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "cmonedas" + this.props.num,
      type: "number",
      value: this.state.value,
      onChange: this.handleChange
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      id: "cmmas" + this.props.num
    }, "+"));
  }

}

function RegistroN(props) {
  const [nombre, escribirNombre] = React.useState("Equipo #" + props.num);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    id: "nomEq" + props.num,
    className: "form-control",
    type: "text",
    defaultValue: nombre,
    onChange: function (e) {
      escribirNombre(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    id: "confirmEq" + props.num,
    className: "btn btn-danger"
  }, "Confirmar nombre")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "input-group-text"
  }, "# Monedas ganadas"), /*#__PURE__*/React.createElement("span", {
    className: "input-group-text"
  }, /*#__PURE__*/React.createElement("strong", {
    id: "monedas" + props.num
  }, "0")), /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    id: "cmonedas" + props.num,
    type: "number",
    value: "0"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger",
    id: "cmmas" + props.num
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "input-group-text"
  }, "# Espacios eventos"), /*#__PURE__*/React.createElement("span", {
    className: "input-group-text"
  }, /*#__PURE__*/React.createElement("strong", {
    id: "espacios" + props.num
  }, "0")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger",
    id: "emas" + props.num
  }, "+"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger",
    id: "emenos" + props.num
  }, "-")), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "input-group-text"
  }, "# Minijuegos ganados"), /*#__PURE__*/React.createElement("span", {
    className: "input-group-text"
  }, /*#__PURE__*/React.createElement("strong", {
    id: "minijuegos" + props.num
  }, "0")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger",
    id: "mmas" + props.num
  }, "+"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger",
    id: "mmenos" + props.num
  }, "-")));
}

const REG1 = ReactDOM.createRoot(document.getElementById('REG1')); // const reg1 = <RegistroN num="14"/>;

const reg1 = /*#__PURE__*/React.createElement(NombreN, {
  num: "1"
});
REG1.render(reg1);
