export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="flex flex-wrap justify-between">
        <div>
          <h3 className="text-xl font-bold">Company Address</h3>
          <p className="mt-2">123 Civil St, City, State, India</p>
          <p>Email: contact@civilworks.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <p className="text-center mt-6">&copy; {new Date().getFullYear()} Civil Works. All rights reserved.</p>
    </footer>
  );
}
