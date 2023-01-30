import "./Message.css"
const Message=({message})=>{
    return (
        <div className="msg-container" id="msg">
            <p>{message} <span id="close-msg"><button onClick={()=>document.getElementById("msg").style.display="none"}>X</button></span></p>
            
        </div>
    )
}


export default Message;