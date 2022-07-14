'use strict'

class NombreN extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: "Equipo #"+props.num};
        this.handleChange = this.handleChange.bind(this);
        this.handeClick = this.handeClick.bind(this);
    }
    handeClick(){
        console.log(num);

        nameUGraph(parseInt(this.props.num));
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    render(){
        return(
            <div className="input-group" >
                <input id={"nomEq"+this.props.num} className="form-control" type="text" defaultValue={this.state.value} onChange={this.handleChange}/>
                <button id={"confirmEq"+this.props.num} onClick={this.handleChange} className="btn btn-danger">Confirmar nombre</button>
            </div>
        );
    }
}

class MonedasN extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: "0"};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    render(){
        return(
            <div className="input-group" >
                <span className="input-group-text"># Monedas ganadas</span>
                <span className="input-group-text"><strong id={"monedas"+this.props.num}>0</strong></span>
                <input className="form-control" id={"cmonedas"+this.props.num} type="number" value={this.state.value} onChange={this.handleChange}/> 
                <button className="btn btn-danger" id={"cmmas"+this.props.num}>+</button>
            </div>
        );
    }
}

function RegistroN(props) {
    const [nombre, escribirNombre] = React.useState("Equipo #"+props.num);
    return (
        <div>
            <div className="input-group" >
                <input id={"nomEq"+props.num} className="form-control" type="text" defaultValue={nombre} onChange={function(e){escribirNombre(e.target.value)}}/>
                <button id={"confirmEq"+props.num} className="btn btn-danger">Confirmar nombre</button>
            </div>
            <br/>
            <div className="input-group" >
                <span className="input-group-text"># Monedas ganadas</span>
                <span className="input-group-text"><strong id={"monedas"+props.num}>0</strong></span>
                <input className="form-control" id={"cmonedas"+props.num} type="number" value="0"/> 
                <button className="btn btn-danger" id={"cmmas"+props.num}>+</button>
            </div>
            <div className="input-group">
                <span className="input-group-text"># Espacios eventos</span>
                <span className="input-group-text" ><strong id={"espacios"+props.num}>0</strong></span> 
                <button className="btn btn-danger" id={"emas"+props.num}>+</button> 
                <button className="btn btn-danger" id={"emenos"+props.num}>-</button>
            </div>
            <div className="input-group">
                <span className="input-group-text"># Minijuegos ganados</span> 
                <span className="input-group-text" ><strong id={"minijuegos"+props.num}>0</strong></span> 
                <button className="btn btn-danger" id={"mmas"+props.num}>+</button> 
                <button className="btn btn-danger" id={"mmenos"+props.num}>-</button>
            </div>
        </div>
    );
}

const REG1 = ReactDOM.createRoot(document.getElementById('REG1'));
// const reg1 = <RegistroN num="14"/>;
const reg1 = <NombreN num="1"/>;
REG1.render(reg1);
