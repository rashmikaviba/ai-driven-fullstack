
function Button (props){

return(
    <>

    <button className="bg-blue-500 text-white p-4 rounded-lg mar mx-5 my-5" 
    onClick={props.onClick}>
       {props.children}
    </button>
    </>
);
};
export default Button; 