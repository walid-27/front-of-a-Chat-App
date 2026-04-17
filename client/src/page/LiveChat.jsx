import React, {useState} from 'react'
import "./livechat.css"
import bg from "../assets/bgCafee.jpg"

  const peoples = [
    {
      img: bg,
      name:"Ivan",
      message: "Hello my bro, hru doing?"
    },
    {
      img: bg,
      name:"Daniel",
      message: "I wanna to build to u a surprise sjdke we wiewe z"
    },
    {
      img: bg,
      name:"Vald",
      message: "Thank you bro ❤ "
    },
    {
      img: bg,
      name:"oleg",
      message: "I wanna to marry you"
    },
    {
      img: bg,
      name:"messi",
      message: "You won all my trophes"
    },
    {
      img: bg,
      name:"naves",
      message: "welcome to my homw in 30/07"
    },
  ]

  console.log(peoples)

  /////////////////////////////////////////
function LiveChat() {

  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [msgInput, setMsgInput] = useState("");

    const filtreUser = peoples.filter( (p)=> p.name.toLowerCase().includes(input.toLowerCase()));

    const sendMessage = ()=>{
      if(!msgInput.trim())return
      setMessages(prev =>[...prev, {type:"receiver", text: msgInput}])
      setMsgInput("")
    }

    console.log(messages)
  return (
    <div className='live-chat'>
      <aside>
        
       <div className="control-sidebar ">
         
         <label htmlFor="home">
          <span className="material-symbols-outlined" id='home'>home</span>
          Home
         </label>
         <label htmlFor="">
         <span className="material-symbols-outlined">chat_bubble</span> 
         Chat 
         </label>
        <label htmlFor="">
        <span className="material-symbols-outlined">settings</span>
          Setting
        </label>
       </div>
      </aside>
      <div className="bar-main-user-info">
          <span className='material-symbols-outlined menu'>menu</span>
          <div className="prsonal-details">
            <span className='material-symbols-outlined'>person</span>
            <select name="" id="">
              <option value="username">username</option>
              <option value="setting">Setting</option>
              <option value="logOut">Log Out</option>
            </select>
          </div>
        </div >
      <main>
       
        <h1>Chat</h1>
        <p >dashboard .chat</p>
        <div className="dashboard-chat">
          <header className='messages-list'>
            <form 
             onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" 
            placeholder='search a freind'
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            />
            <button type='submit'><span className='material-symbols-outlined'>search</span></button>
            </form>
            
            {filtreUser.map((people, index)=>{
                return( 
           <div
             className={`message-chat ${activeIndex === index ? "active" : ""}`}
             key={index}
             onClick={() => {
                setActiveIndex(activeIndex === index ? null : index);
                setSelectedUser(people)
                console.log(activeIndex, index)
                                          }}
                        >
                <img src={people.img} alt="" />
                <div className="about-message">
                <h3>{people.name}</h3>
                <p>{people.message}</p>
                </div>
                </div>
                )
            })
            }
            
          </header>
          <div className="message">
            {activeIndex !== null &&  selectedUser && (<>
              <div className="message-data" key={activeIndex}>
            <img src={selectedUser.img} alt="" />
            <div className="message-data-status">
            <h4>{selectedUser.name}</h4>
            <p>🟢online</p>
            </div>
            </div>
            <div className="message-chats-page">
          {messages.map((msg, i) => (
              <p key={i} className={msg.type}>
                {msg.text}
              </p>
            ))}
            </div>
            <div className="message-input">
              <form onSubmit={(e)=>{e.preventDefault(); sendMessage()}}>
                <input type="text" 
                value={msgInput}
                onChange={(e)=>{setMsgInput(e.target.value)}}
                />
                <button type='submit'>Send</button>
              </form>
            </div>
            </>
            )

            }
            
          </div>
        </div>
      </main>

    </div>
  )
}

export default LiveChat
