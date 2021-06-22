import './Login.css';
import {useState} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import {saveUser} from '.././redux/CoffeShop/actions'
import { useSelector } from 'react-redux';


const Login = ({saveUser}) => {
	const newUser = useSelector((state) => {
		return state.shop.user;
	});
    //Skicka med user INPUT och lägg till användare i servern //KLART
    const url = "http://localhost:5000/api/accounts"
    const [data, setData] = useState({
        name: "",
        epost: ""
    });

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            epost: data.epost
        })
        .then(res => {
            console.log(res.data )
            console.log(newUser,'efter submit')
        });
        
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata,'newdata')
    }

    return (
        <div className="login-main">
            <div className="login-main-inside">
                <div className="header">
                    <img src="" alt="small-logo" />
                    <h2>Välkommen till AirBean-familjen</h2>
                    <p>Genom att skapa ett konto nedan kan du spara och se  din orderhistorik.</p>
                </div>


                <form onSubmit={(e) => submit(e)} >
                
                    <input className="input-text" onChange={(e) => handle(e)} id="name" value={data.name} type="text" placeholder="Namn" />
                  
                    <input className="input-text" onChange={(e) => handle(e)} id="epost" value={data.epost} type="text" placeholder="Epost" /> <br />
                 
                    <input type="checkbox"/> GDPR
                    <button onClick={() => saveUser(data)} className="loggin">Logga in</button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser:(data) => dispatch(saveUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
