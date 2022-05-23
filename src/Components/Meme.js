
import { useEffect, useState } from "react"
export default function Meme(){
    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] =useState([])

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        
        const randomNumber = Math.floor(Math.random()* allMemes.length) 
        const url =allMemes[randomNumber].url
        setMeme(prevstate => ({
            ...prevstate,
            randomImage: url
        }))
    }
    function handleChange(event){
        const{name, value}=event.target
        setMeme(prevstate => ({
            ...prevstate,
            [name]: value
        }))
    }
    return(
        <div className="my-5">
            <form>
                <div className=" row col-sm-7 mx-auto">
                    <input 
                        className="col-4 mx-auto text-input" 
                        type="text" 
                        placeholder="Top Text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        className="col-4 mx-auto text-input" 
                        type="text" 
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <div className="col-10 col-sm-6 mx-auto mt-5">
                <button className="mx-auto col-12 btn text-light" type="button"  onClick={getMemeImage}> Get a new meme image  🖼</button>
            </div>
            
            <div className="container meme text-center my-5">
                
                <img src={meme.randomImage} className="col-10 col-sm-6 mx-auto meme--image align-self-center" ></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>


            </div>

        </div>
    )
}