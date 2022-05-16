import { Navbar,NavbarBrand,NavbarText, } from "reactstrap"


export default function Header(props){
    return(
        <div>
            <Navbar className="row ">
             
                <NavbarBrand className=" row col-5 nav-brand"> 
                    <img src={props.item.logo} className="nav-logo col-auto ms-3"/>
                    
                        <h3 className="col-5 p-0">{props.item.brand}</h3>
                </NavbarBrand>
                
                <NavbarText className="  nav-text text-right me-3">
                    <h3>{props.item.text} </h3>
                </NavbarText>
            </Navbar>
        </div>
    )
}