import SearchBar from "./serchbar";



function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat z-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          We create amazing experiences to help you grow and succeed. Start your journey with us today.
        </p>

        {/* Correct placement for SearchBar */}
        <SearchBar />
      </div>
    </section>
  );
}

export default Hero;
