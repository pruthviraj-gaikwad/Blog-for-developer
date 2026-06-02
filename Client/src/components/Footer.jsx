import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

function Footer() {
  return (
    <FlowbiteFooter container className="border-t-8 border-purple-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* Brand */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                pruthvi&apos;s
              </span>
              Blog
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </FooterLink>
                <FooterLink as={Link} to="/about">
                  Pruthvi&apos;s Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Follow Us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://github.com/pruthviraj-gaikwad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider />

        {/* Bottom bar */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Pruthvi's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon
              href="https://github.com/pruthviraj-gaikwad"
              icon={BsGithub}
            />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}

export default Footer;
