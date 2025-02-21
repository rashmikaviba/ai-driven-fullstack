import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";

function SearchBar() {
  return (
    <form className="w-full flex justify-center mt-6">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-2xl">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full px-5 py-6 text-xl text-black font-medium   bg-white focus:outline-none"
        />

        <Button className="py-6 ">
         
             Search in AI

             <Sparkles
              style={{ width: "20px", height: "20px" }}
              className="mr-2 animate-pulse text-sky-400"
             />
        </Button>
      </div>
    </form>
  );
}

export default SearchBar;
