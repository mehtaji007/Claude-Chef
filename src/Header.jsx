import chefClaudeLogo from "../public/icons8-chef-50.png"
export default function Header(){
    return(
        <header>
            <img src={chefClaudeLogo}/>
            <h1>Chef Claude</h1>
        </header>
    )
}