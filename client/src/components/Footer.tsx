import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary text-2xl font-heading font-bold mr-2">S</div>
              <span className="text-xl font-heading font-semibold">Serenity</span>
            </div>
            <p className="text-white text-opacity-80 mb-6">
              Your partner on the journey to mental wellness through therapy, resources, and community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-white text-opacity-80">
              <li><a href="#" className="hover:text-primary transition">Individual Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition">Couples Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition">Group Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition">Art Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition">Music Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition">Online Therapy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-white text-opacity-80">
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition">Guides</a></li>
              <li><a href="#" className="hover:text-primary transition">Podcasts</a></li>
              <li><a href="#" className="hover:text-primary transition">Meditations</a></li>
              <li><a href="#" className="hover:text-primary transition">Community</a></li>
              <li><a href="#" className="hover:text-primary transition">Crisis Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-white text-opacity-80">
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Our Therapists</a></li>
              <li><a href="#" className="hover:text-primary transition">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition">Press</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Serenity Therapy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white text-opacity-60 text-sm hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="text-white text-opacity-60 text-sm hover:text-primary transition">Terms of Service</a>
              <a href="#" className="text-white text-opacity-60 text-sm hover:text-primary transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
