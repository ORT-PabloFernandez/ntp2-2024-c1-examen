import "../css/card-customer.css";

export default function Customer(props){
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', display:'flex', position: "fixed", height: "100%", width: "100%"}}>
            <div class="container">
                <div class="container_terminal"></div>
            <div class="terminal_toolbar">
            <div class="butt">
                <button class="btn btn-color"></button>
                <button class="btn"></button>
                <button class="btn"></button>
            </div>
            <p class="user">Cliente</p>
        </div>
        <div class="terminal_body">
            <div class="terminal_promt">
                <span class="terminal_user">Email: {props.email}</span>
            </div>
            <div class="terminal_promt">
                <span class="terminal_user">Edad: {props.age}</span>
            </div>
            <div class="terminal_promt">
                <span class="terminal_user">Genero: {props.gender}</span>
            </div>
            <div class="terminal_promt">
                <span class="terminal_user">Satisfacion: {props.satisfaction}</span>
                <span class="terminal_location">~</span>
                <span class="terminal_bling">$</span>
                <span class="terminal_cursor"></span>
            </div>

        </div>
        </div>
        </div>
       
    );
}
