import React from "react";

class current extends React.Component{
   state = {
           respObj : {},
           city: ""            
        }
        
    getData = async () => {
        const city = e.target.elements.city.value;
        try {
             const res = await fetch(`http://localhost:3005/api/data`)
        const respObj = await res.json()
        this.setState({
            respObj: respObj
        })
        } catch (error) {
            console.log(error)
        }          
    }

     componentDidMount = () => {
        this.getData()       
    } 

    
    render(
        
    ){
        console.log('here',this.state.respObj)
        return <div>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => this.setState({
                        city: e.target.value
                    })}
                    />
                
                <button onClick={this.getData()}>Get Forecast</button>
            </form>
        <h2>Find Current Weather Conditions</h2>
        
        
    </div>
    }
}

export default current