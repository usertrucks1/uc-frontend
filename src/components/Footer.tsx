const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog"],
  },
  {
    title: "Support",
    links: ["Help Center", "Privacy Policy", "Terms"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-4">Urban Services</h4>
          <p>On-demand home services by trained professionals.</p>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul>
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>Email: <a href="mailto:support@urbanservices.com" className="hover:underline">support@urbanservices.com</a></p>
          <p>Phone: <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a></p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Urban Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
