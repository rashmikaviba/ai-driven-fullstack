import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-0 w-full flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold pl-4">MyLogo</div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 pr-4">
        <Button className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition">
          Login
        </Button>

        <Button asChild className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          <a href="https://www.youtube.com/">SignUp</a>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
