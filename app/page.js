import FeaturedListing from "@/components/FeaturedListing";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Image from "next/image";
import Listing from "./Listing";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <div className="mx-4 mt-4  md:mx-16">
      <Banner/>
      </div>
      <Listing/>
      <ContactForm/>

    </main>
  );
}
