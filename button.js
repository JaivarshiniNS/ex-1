import React,{useState} from 'react'
const FunctionalCount = () => {
    const [count,setCount] = useState(0)
    const handleClick = () =>{
        setCount(count+1)
    }
    const handledecrease = () =>{
        setCount(count-1)
    }
   
    return(
    <>
    <div className="count">
     <h1>Counter:{count}</h1>
     <button onClick={() => handleClick()}>Increase</button><br></br>
     <br></br>
    {count !==0 && <button onClick={() => handledecrease()}>Decrease</button>}
    <br></br><br></br>

        </div>
        <div class ="slide">
            <h1>QUOTES ABOUT ROSE</h1>
            <h2>1.</h2>

<h4>A rose in full bloom is truly but a pretty sight, something worth wasting my time upon.</h4>

<h2>2.</h2>

<h4>A rose does not answer its enemies with words, but with beauty..</h4>

<h2>3.</h2>

<h4>The red rose symbolizes romance, love, beauty, and courage. </h4>
<h1>4.</h1>

<h4>Roses are the epitome of beauty, from their dazzling color combinations and their sweet scent to their rows of delicate petals.</h4>
<h1>5.</h1>

<h4>A flower cannot blossom without sunshine, and man cannot live without love.</h4>

  </div>
    </>
    );
}
 
export default FunctionalCount;



