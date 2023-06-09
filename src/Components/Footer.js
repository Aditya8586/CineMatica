import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    
<footer className=" bg-white shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-center">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">© 2023 <Link to="/" className="hover:underline">CineMatica</Link>. All Rights Reserved.
    </span>
    
    </div>
</footer>

  )
}
