const Footer = () => {
    return (
      <footer className="bg-white py-8 border-t-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="mb-4 lg:mb-0">
              <div className="flex items-center mb-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                  alt="India"
                  className="w-6 h-6 mr-2"
                />
                <span className="underline">India</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Full Name and Address of the Manufacturer</h3>
                <p>Louis Vuitton Malletier SAS</p>
                <p>2 Rue du Pont Neuf</p>
                <p>75034 Paris CEDEX 01</p>
                <p>FRANCE</p>
                <p className="mt-2 text-sm">
                  Please refer to the product label for specific country of origin for each product.
                </p>
              </div>
            </div>
            <div className="mb-4 lg:mb-0">
              <h3 className="font-semibold mb-2">Full Name and Address of the Importer</h3>
              <p>Louis Vuitton India Retail Private Limited</p>
              <p>901A Ninth Floor, Time Tower, MG Road</p>
              <p>Gurgaon, Haryana - 122002</p>
              <p>INDIA</p>
            </div>
            <div className="flex flex-col lg:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="#" className="underline">
                  Sitemap
                </a>
                <a href="#" className="underline">
                  Legal & Privacy
                </a>
              </div>
              <div className="text-lg font-semibold">LOUIS VUITTON</div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  