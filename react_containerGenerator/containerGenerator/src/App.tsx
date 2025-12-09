import './App.css'

function App() {
 return (
    <>
    <div>
     <form action="/" method="POST">
			<div style={{display:"flex", flexDirection: "column"}}>
				<h1 style={{textAlign: "center"}}>Container generator</h1>
				<div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
					<div style={{display:"flex", flexDirection: "column",  marginBottom: "25px;"}}>
						<p style={{fontSize: "large;"}}>container_name</p>
						<p style={{fontSize: "large;"}}>porte</p>
						<p style={{fontSize: "large"}}>immagine</p>
					</div>
					<div style={{ display:"flex", flexDirection: "column", justifyContent: "space-evenly", marginBottom: "25px" }}>
						<input type="text" style={{borderRadius:"10px", fontSize: "medium"}} name="cname" placeholder="container name"/>
						<input type="text" style={{borderRadius:"10px",fontSize: "medium"}} name="cimage" placeholder="container ports"/>			
						<input type="text" style={{borderRadius:"10px", fontSize: "medium"}} name="cports" placeholder="container ports"/>
					</div>
				</div>
				<button type="submit" style={{marginRight: "auto", marginLeft: "auto", fontSize: "medium", borderRadius: "10px", paddingLeft: "30px", paddingRight: "30px", paddingTop: "15px", paddingBottom: "15px"}}>crea il tuo container</button>
			</div>
		</form>
    </div>
    </>
  )
}

export default App;
