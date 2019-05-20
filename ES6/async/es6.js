const apiUrl = "http://example.com/articles";

async function get100Composer(){
  const response = await fetch(apiUrl);
  const json = await response.json();

  console.log(json[0]);
}

// without async
function get100Composer2(){
  fetch(apiUrl)
  .then((r)=> r.json())
  .then((json)=> (
    console.log(json[0])
  )).catch((error)=>{
    console.log("failed")
  })
}
