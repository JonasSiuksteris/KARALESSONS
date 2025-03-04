import { Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://www.instagram.com/karaburanstudio?igsh=eXd5YnB0b29rMTB1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-pink-400 transition-colors flex items-center gap-3"
              >
                <Instagram size={32} />
                <span className="text-lg">Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/@karaburan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-red-500 transition-colors flex items-center gap-3"
              >
                <Youtube size={32} />
                <span className="text-lg">YouTube</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: karaburanstudio@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-400">
              Vilnius<br />
              Lithuania
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KARA LESSONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer