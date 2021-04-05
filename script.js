// TODO: add code here
window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json();
    })
    .then(function(data){
        
        const container=document.getElementById("container");
        data.sort(getSortedArray("hoursInSpace"));
        console.log(data);
        for(let i=0;i<data.length;i++)
                {
                    let divOuter=document.createElement("div");
                    divOuter.setAttribute("class","astronaut");
                    let divInner=document.createElement("div");
                    //divInner.setAttribute("class","bio");
                    let result="";
                    if(data[i].active)
                    result="<h3>"+data[i].firstName+" "+data[i].lastName+"</h3><ul><li>Hours in Space"+data[i].hoursInSpace+"</li><li style='color:green'>Active : "+data[i].active+"</li><li>Skills :";               
                    else
                    result="<h3>"+data[i].firstName+" "+data[i].lastName+"</h3><ul><li>Hours in Space"+data[i].hoursInSpace+"</li><li>Active : "+data[i].active+"</li><li>Skills :";               
                    for(let j=0;j<data[i].skills.length;j++)
                    {
                        result+=data[i].skills[j]+",";
                    }
                    
                    result+="</li></ul>";
                    divOuter.innerHTML=result;
                    //img src=${data[i].image} height=100></img>`;
                    //divOuter.appendChild(divInner);
                    divOuter.innerHTML+=`<img class=avatar src=${data[i].picture}></img>`;
                    container.appendChild(divOuter);
                }
                container.innerHTML+="count of Astronauts:"+data.length;
    })
});

function getSortedArray(attrib)
{
    console.log("inside sort");
    return function(a,b){
        if(a[attrib]>b[attrib])
         return 1;
        else if (a[attrib]<b[attrib])
         return -1;
        return 0;
    }
}