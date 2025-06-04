const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 className="text-lg font-bold">Address</h3>
          <p>123 Street, New York, USA</p>
          <p>+012 345 67890</p>
          <p>info@example.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">Cardiology</a></li>
            <li><a href="#" className="hover:underline">Pulmonary</a></li>
            <li><a href="#" className="hover:underline">Neurology</a></li>
            <li><a href="#" className="hover:underline">Orthopedics</a></li>
            <li><a href="#" className="hover:underline">Laboratory</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Terms & Condition</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; Your Site Name, All Right Reserved.</p>
        <p>Designed By <a href="#" className="hover:underline">HTML Codex</a></p>
      </div>
    </footer>
  );
};

export default Footer;