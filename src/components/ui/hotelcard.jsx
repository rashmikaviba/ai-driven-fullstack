function Hotelcard(props) {
console.log(props);
  return (
 
<div className="flex gap-4 my-0.5 "> 

      <div className="block group relative w-64 bg-white rounded-xl shadow-lg border border-gray-200 p-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src={props.hotel.image}
            alt={props.hotel.name}
            className="object-cover w-full h-full absolute transition-transform group-hover:scale-105"
          />
        </div>
        <div className="mt-3 space-y-2">
          <h3 className="font-semibold text-lg">{props.hotel.name}</h3>
          <div className="flex items-center text-gray-500">
            <span>{props.hotel.location}</span>
           </div>
           <div className="flex items-center space-x-1">
            <span className="font-medium">{props.hotel.rating}</span>
            <span className="text-gray-500">{props.hotel.description}</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold">${props.hotel.price}</span>
          </div>
        </div>
      </div>


    </div>

  );
}

export default Hotelcard;
