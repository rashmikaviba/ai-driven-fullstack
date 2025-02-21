
function HotelListing (){
    
    const hotels = 
        {
            id: 1,
            name: "Hotel 1",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "This is a hotel description",
            rating: 4.5,
            location: "New York, USA",
            price: 200,
           
        };

           return ( 

            <div key={hotels.id} className="max-w-xs w-full overflow-x-auto bg-white rounded-xl shadow-md overflow-hidden mx-3 my-3">
            {/* Image */}
            <img src={hotels.image} alt={hotels.name} className="w-full h-36 object-cover" />
      
            {/* Content */}
            <div className="p-3">
              <h2 className="text-lg font-semibold">{hotels.name}</h2>
              <p className="text-gray-500 text-xs">{hotels.location}</p>
              <p className="text-gray-700 mt-1 text-sm line-clamp-2">{hotels.description}</p>
      
              {/* Rating & Price */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-500 font-semibold text-sm">⭐ {hotels.rating}</span>
                <span className="text-base font-bold text-gray-800">${hotels.price}</span>
              </div>
            </div>
          </div>

);

}    

export default HotelListing;