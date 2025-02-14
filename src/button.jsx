
import "./index.css";
function Button (){
    const handleclick = ()=>{

       alert("button rashmika");
    };
    
return(
    <>

    <button className="bg-blue-500 text-white p-4 rounded-lg" onClick={handleclick}>
        read me
    </button>
    </>
);
};
export default Button;