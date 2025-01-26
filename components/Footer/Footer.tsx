import AboutUsSection from "./AboutFooter";
import HelpSection from "./HelpFooter";
import NewsletterSection from "./NewsLetterFooter";
import RecentPostsSection from "./RecentPostFooter";
import SocialIcons from "./SocialIconsFooter";
import UsefulLinksSection from "./UseFullLinkFooter";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col gap-8">
        <NewsletterSection />
        <div className="border-t border-[rgb(255,159,13)] my-6"></div>
        <div className="flex flex-col px-10 sm:flex-row sm:justify-between sm:items-start gap-8 mt-[16px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection />
          <RecentPostsSection />
        </div>
      </div>
      <div className="bg-[#4F4F4F] py-8 flex">
        <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base font-[400] mb-4 md:mb-0">
            Copyright © 2022 by Moiz Ahmed. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
