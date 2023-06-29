import { Content, Header, Page } from '@backstage/core-components';
import React from 'react';
//import { Select } from "antd";



export const DevopsPage = () => {
  const [ team, setTeam ] = React.useState("")
  const [ dataArray, setDataArray] = React.useState([])
  console.log(team)
  const options =[
    "cropwise-base",
    "cropwise-seeds",
    "cropwise-imaginary",
    "cropwise-protector",
]
  const handleSubmit = ( )=>{
    if (team!==""){
      fetch(`https://api.github.com/orgs/syngenta-digital/teams/${team}/repos`,{
        headers:{ 'Authorization' : '${GITHUB_TOKEN}',

      }
    })
      .then((res) => res.json())
      .then((data) => {
         setDataArray(data)
      })
      .catch((err) => {
         console.log(err.message);
      });
    }
  }
  return (
    <Page themeId="devops">
      <Header title="DevOps" />
   
      <Content>
        <label>Select Team Name</label>
        <br></br>
        <select  value={team} onChange={(e)=>setTeam(e.target.value)} >
        {
          options?.map((data)=> <option value={data} key={data}>{data}</option>)
        }
        
        </select>
        <br></br>
        <input type='submit' onClick={handleSubmit}></input>
        {dataArray.length>0?(<div><h1>Output:</h1></div>):null}
        {dataArray.length>0?(<ol>{dataArray.map((obj)=><li key={obj.name}>{obj.name}</li>)}</ol>):null}
      </Content>
    </Page>
  );
};