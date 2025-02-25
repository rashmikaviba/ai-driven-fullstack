import Hotelcard from "./hotelcard";

function HotelListing() {
  const hotel = [
    {
      id: 1,
      name: "Hotel 1",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a hotel description",
      rating: 4.5,
      location: "New York, USA",
      price: 200,
    },
    {
      id: 2,
      name: "Hotel 2",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a hotel description",
      rating: 6.5,
      location: "Malabe, USA",
      price: 300,
    },

    {
      id: 3,
      name: "Hotel 2",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a hotel description",
      rating: 6.5,
      location: "Malabe, USA",
      price: 300,
    },

    {
      id: 3,
      name: "Hotel 2",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a hotel description",
      rating: 6.5,
      location: "Malabe, USA",
      price: 300,
    },

    {
      id: 3,
      name: "Hotel 2",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a hotel description",
      rating: 6.5,
      location: "Malabe, USA",
      price: 300,
    },

    {
      id: 3,
      name: "Hotel 2",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a hotel description",
      rating: 6.5,
      location: "Malabe, USA",
      price: 300,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {hotel.map((hotel) => (
        <Hotelcard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}  

export default HotelListing;
