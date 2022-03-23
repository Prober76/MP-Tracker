'use strict'


function RegistroN(props){
    return /*#__PURE__*/React.createElement("div", {
      id: "react-reg-comp" + props.num
    }, /*#__PURE__*/React.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/React.createElement("input", {
      id: "nomEq"+props.num,
      className: "form-control",
      type: "text",
      value: "Equipo #"+props.num
    }), /*#__PURE__*/React.createElement("button", {
      id: "confirmEq1"+props.num,
      className: "btn btn-danger"
    }, "Confirmar nombre")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "input-group-text"
    }, "# Monedas ganadas"), /*#__PURE__*/React.createElement("span", {
      className: "input-group-text"
    }, /*#__PURE__*/React.createElement("strong", {
      id: "monedas1"+props.num
    }, "0")), /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      id: "cmonedas1"+props.num,
      type: "number",
      value: "0"
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      id: "cmmas1"+props.num
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "input-group-text"
    }, "# Espacios eventos"), /*#__PURE__*/React.createElement("span", {
      className: "input-group-text"
    }, /*#__PURE__*/React.createElement("strong", {
      id: "espacios1"+props.num
    }, "0")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      id: "emas1"+props.num
    }, "+"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      id: "emenos1"+props.num
    }, "-")), /*#__PURE__*/React.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "input-group-text"
    }, "# Minijuegos ganados"), /*#__PURE__*/React.createElement("span", {
      className: "input-group-text"
    }, /*#__PURE__*/React.createElement("strong", {
      id: "minijuegos1"+props.num
    }, "0")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      id: "mmas1"+props.num
    }, "+"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      id: "mmenos1"+props.num
    }, "-")));
}

const reg1 = /*#__PURE__*/React.createElement(RegistroN, {
    num: "1"
});
ReactDOM.render(reg1,document.getElementById("reg1"));