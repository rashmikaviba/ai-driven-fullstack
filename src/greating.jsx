import s from "./greating.module.css";

function Greating (){


    const name ="madusanka"
    const age  = 24
    return(
        <h1 className={s.titl}>hello {age > 25 && age <27 ? "adult":"child"}  ! </h1>
    );

};

export default Greating;