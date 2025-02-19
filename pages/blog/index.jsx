import { Pagination } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  const { locale } = useRouter();
  const [page, setPage] = useState(1);
  const [blog, setBlog] = useState([]);
  const [pageCount, setPageCount] = useState();

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    const result = async () => {
      try {
        const res = axios.get(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/blogs?page=" + page
        );
        const blogData = await res;
        setPageCount(blogData.data.last_page ?? 0);
        setBlog(blogData.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    result();
  }, [page]);
  return (
    <>
      <Head>
        <title>Blog | Fast Track Visa </title>
        <meta
          name="description"
          content={`If you’ve arrived here, we share a common passion: a deep love for travel. Whether you're seeking inspiration, planning tips for your next holiday, or simply an engaging read, we've got you covered.`}
        />
        <link
          rel="canonical"
          href={`https://fasttrackvisa.com/${locale}/blog`}
        />
      </Head>
      <section className="blog_page">
        <div className="checkout_banner">
          <Container>
            <h1>Blog</h1>
          </Container>
        </div>
        <div className="blog-sec pt-0">
          <Container>
            <ol className="breadcrumb pl-0">
              <li className="breadcrumb-item">
                <Link href={"/"}>Home </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blog
              </li>
            </ol>
            <Row className="mt-5 mb-3">
              <Col className="d-flex justify-content-end">
                <Pagination
                  count={pageCount}
                  color="primary"
                  page={page}
                  onChange={handleChange}
                ></Pagination>
              </Col>
            </Row>
            <Row>
              {Array.isArray(blog.blog_arr) &&
                blog.blog_arr.map((item, i) => {
                  return (
                    <Col sm={12} md={4} lg={4} key={item.id}>
                      <div className="blog-boxes" title={item.title}>
                        <Link href={"/blog/" + item.blogtitle}>
                          <div className="img-content">
                            <div className="img-thum">
                              <Image
                                alt={item.title}
                                src={
                                  item.title ==
                                  "The Ultimate Costa Rica Travel Guide"
                                    ? "/blog3/Ultimate Costa Rica Travel Guide.webp"
                                    : item.title ==
                                      "Kumbh Mela 2025: A Journey Through Faith and Culture at Prayagraj"
                                    ? "/blog3/Kumbh-Mela-2025.webp"
                                    : item.title ==
                                      "Discover the Marvels of Italy: A Journey through Its Unforgettable Attractions"
                                    ? "/blog3/Discover the Marvels of Italy.webp"
                                    : item.title ==
                                      "Beyond the Tourist Traps: A Generic Guide to Experiencing Real Culture while Traveling"
                                    ? "/blog2/Beyond the Tourist Traps A Generic Guide to Experiencing Real Culture while Traveling.webp"
                                    : item.title ==
                                      "Crafting a Uniquely Luxurious Travel Experience."
                                    ? "/blog/Crafting a Uniquely Luxurious Travel Experience.webp"
                                    : item.title ==
                                      "From Backpacks to Briefcases: A Generic Travel Guide for the Modern Nomad"
                                    ? "/blog/From Backpacks to Briefcases.webp"
                                    : item.title ==
                                      "How do you apply for an India visa?"
                                    ? "/blog/How do you apply for an India visa.webp"
                                    : item.title ==
                                      "How do you check your India visa status?"
                                    ? "/blog/How do you check your India visa status.webp"
                                    : item.title ==
                                      "How Much Is A Tourist Visa To India From the USA?"
                                    ? "/blog/How Much Is A Tourist Visa To India From the USA.webp"
                                    : item.title ==
                                      "New Zealand E Visitor Visa: Overall Guide"
                                    ? "/blog/New Zealand E Visitor Visa Overall Guide.webp"
                                    : item.title ==
                                      "How to choose the best Visa?"
                                    ? "/blog/How to choose the best Visa.webp"
                                    : item.title ==
                                      "How To Get the India Business Visa?"
                                    ? "/blog/How To Get the India Business Visa.webp"
                                    : item.title ==
                                      "India business visa checklist"
                                    ? "/blog/India business visa checklist.webp"
                                    : item.title ==
                                      "India Tourist Visa Guidelines"
                                    ? "/blog/India Tourist Visa Guidelines.webp"
                                    : item.title ==
                                      "Indian business visa for Singapore citizens"
                                    ? "/blog/Indian business visa for Singapore citizens.webp"
                                    : item.title ==
                                      "The Ultimate Generic Guide for Exploring the World"
                                    ? "/blog/The Ultimate Generic Guide for Exploring the World.webp"
                                    : item.title ==
                                      "What are the different types of Indian visas"
                                    ? "/blog/What are the different types of Indian visas.webp"
                                    : item.title ==
                                      "What are the most common mistakes while Travelling"
                                    ? "/blog/What are the most common mistakes while Travelling.webp"
                                    : item.title ==
                                      "What are the perks of having Evisa"
                                    ? "/blog/What are the perks of having Evisa.webp"
                                    : item.title ==
                                      "What countries are visa-free to India?"
                                    ? "/blog/what countries are visa free to India.webp"
                                    : item.title ==
                                      "Business Visa for Australian Citizens to India"
                                    ? "/blog/Business Visa for Australian Citizens to India.webp"
                                    : item.title ==
                                      "CAN I GET AN AUSTRALIA VISA EXTENSION?"
                                    ? "/blog/CAN I GET AN AUSTRALIA VISA EXTENSION.webp"
                                    : item.title ==
                                      "Difference Between a Normal Visa and Evisa"
                                    ? "/blog/Difference Between a Normal Visa and Evisa.webp"
                                    : item.title ==
                                      "Dont commit these mistakes while traveling to Britain"
                                    ? "/blog/Dont commit these mistakes while traveling to Britain.webp"
                                    : item.title ==
                                      " E-Business Visa For India and Important Documents Required"
                                    ? "/blog/E-Business Visa For India and Important Documents Required.webp"
                                    : item.title ==
                                      "How much does an India visa cost?"
                                    ? "/blog/How much does an India visa cost.webp"
                                    : item.title ==
                                      "How safe is India for Canadians?"
                                    ? "/blog/How safe is India for Canadians.webp"
                                    : item.title ==
                                      "How to apply for Online Visa in a few Steps?"
                                    ? "/blog/How to apply for Online Visa in a few Steps.webp"
                                    : item.title ==
                                      "How to Get Indian Business Visa in a few steps"
                                    ? "/blog/How to Get Indian Business Visa in a few steps.webp"
                                    : item.title ==
                                      "India business visa for Australian citizens"
                                    ? "/blog/India business visa for Australian citizens.webp"
                                    : item.title ==
                                      "India business visa processing time and duration, fees, and costs"
                                    ? "/blog/India business visa processing time and duration, fees, and costs.webp"
                                    : item.title ==
                                      "India Comes Alive when Monsoon Season Arrives | iVisa"
                                    ? "/blog/India Comes Alive when Monsoon Season Arrives.webp"
                                    : item.title ==
                                      "India Visa for the citizens of Kenya"
                                    ? "/blog/India Visa for the citizens of Kenya.webp"
                                    : item.title ==
                                      "India Visa for Malaysians, All You need to know"
                                    ? "/blog/India Visa for Malaysians, All You need to know.webp"
                                    : item.title ==
                                      "INDIA VISA FOR SOUTH AFRICAN PASSPORT HOLDERS"
                                    ? "/blog/INDIA VISA FOR SOUTH AFRICAN PASSPORT HOLDERS.webp"
                                    : item.title ==
                                      "India visa for Sri Lankan citizens"
                                    ? "/blog/India visa for Sri Lankan citizens.webp"
                                    : item.title ==
                                      " Indian business visa for UK citizens - requirements and cost"
                                    ? "/blog/Indian business visa for UK citizens - requirements and cost.webp"
                                    : item.title ==
                                      "Indian Business visa for US citizens"
                                    ? "/blog/Indian Business visa for US citizens.webp"
                                    : item.title ==
                                      "Indian Visa for Chinese citizens - Everything you need to know"
                                    ? "/blog/Indian Visa for Chinese citizens - Everything you need to know.webp"
                                    : item.title ==
                                      "Is India a safe destination for the British?"
                                    ? "/blog/Is India a safe destination for the British.webp"
                                    : item.title ==
                                      "The Best Restaurants and Attractions at Luxury Destinations."
                                    ? "/blog/The Best Restaurants and Attractions at Luxury Destinations.webp"
                                    : item.title ==
                                      "Touring the World's Most Exclusive Yachts and Cruise Ships."
                                    ? "/blog/Touring the World_s Most Exclusive Yachts and Cruise Ships.webp"
                                    : item.title == "Travel Guide to Malaysia"
                                    ? "/blog/Travel Guide to Malaysia.webp"
                                    : item.title ==
                                      "Indian Visa for UK Citizens Fee, Requirements & More"
                                    ? "/blog/Indian Visa for UK Citizens Fee, Requirements & More.webp"
                                    : item.title ==
                                      "INDIA'S ELECTRONIC VISA AND ITS DIFFERENT ASPECTS"
                                    ? "/blog/INDIAS ELECTRONIC VISA AND ITS DIFFERENT ASPECTS.webp"
                                    : item.title ==
                                      "India eVisa for Canadian Citizens: Requirements, Costs, and More"
                                    ? "/blog/India eVisa for Canadian Citizens Requirements, Costs, and More.webp"
                                    : item.title ==
                                      "15 Things You Need to Know Before Visiting Thailand"
                                    ? "/blog/15 Things You Need to Know Before Visiting Thailand.webp"
                                    : item.title ==
                                      "Attending Special Events and Festivals Around the World."
                                    ? "/blog/Attending Special Events and Festivals Around the World.webp"
                                    : item.title ==
                                      "Australia Travel Guide (2023) | Top 15 Places to Visit in Australia"
                                    ? "/blog/Australia Travel Guide (2023)  Top 15 Places to Visit in Australia.webp"
                                    : item.title ==
                                      "Experiencing Luxury Travel on a Different Continent"
                                    ? "/blog/Experiencing Luxury Travel on a Different Continent.webp"
                                    : item.title ==
                                      "Top 15 Unforgettable Hikes Around the World"
                                    ? "/blog/Top 15 Unforgettable Hikes Around the World.webp"
                                    : item.title ==
                                      "Turkey Travel Guide (2023) | Top 15 Places to Visit in Turkey"
                                    ? "/blog/Turkey Travel Guide (2023)  Top 15 Places to Visit in Turkey.webp"
                                    : item.title ==
                                      "Travel Smarter, Not Harder: A Generic Guide to Planning and Executing the Perfect Trip"
                                    ? "/blog/Travel Smarter, Not Harder A Generic Guide to Planning and Executing the Perfect Trip.webp"
                                    : item.title ==
                                      "Travel Like a Pro: The Ultimate Generic Guide for Exploring the World"
                                    ? "/blog/Travel Like a Pro The Ultimate Generic Guide for Exploring the World.webp"
                                    : item.title ==
                                      " The Ultimate Bucket List: A Generic Travel Guide to Crossing Off Your Dream Destinations"
                                    ? "/blog/The Ultimate Bucket List A Generic Travel Guide to Crossing Off Your Dream Destinations.webp"
                                    : item.title ==
                                      "The Road Less Traveled: A Generic Guide to Finding Unique Experiences while on the Road"
                                    ? "/blog/The Road Less Traveled A Generic Guide to Finding Unique Experiences while on the Road.webp"
                                    : item.title ==
                                      "New Zealand Travel Guide (2023) | Top 15 Places to Visit in New Zeland"
                                    ? "/blog/New Zealand Travel Guide (2023)  Top 15 Places to Visit in New Zeland.webp"
                                    : item.title ==
                                      "INDIA'S ELECTRONIC VISA AND ITS DIFFERENT ASPECTS"
                                    ? "/blog2/INDIA_S ELECTRONIC VISA AND ITS DIFFERENT ASPECTS (2).webp"
                                    : item.title ==
                                      "From Backpacks to Briefcases: A Generic Travel Guide for the Modern Noma"
                                    ? "/blog/From Backpacks to Briefcases A Generic Travel Guide for the Modern Nomad.webp"
                                    : item.title ==
                                      "Escape the Ordinary: A Generic Travel Guide to Finding Your Next Adventure"
                                    ? "/blog/Escape the Ordinary A Generic Travel Guide to Finding Your Next Adventure.webp"
                                    : item.title ==
                                      "10 Most Affordable Places in Kenya for Honeymoon Couples"
                                    ? "/blog/10 Most Affordable Places in Kenya for Honeymoon Couples.webp"
                                    : item.title ==
                                      "10 benefits ot taking a travel insurance for Australia/ New Zealand"
                                    ? "/blog/10-benefits-ot-taking-a-travel-insurance-for-australia-new-zealand.webp"
                                    : item.title ==
                                      "17 Reasons why your Visa Application can be rejected"
                                    ? "/blog/17 Reasons why your Visa Application can be rejected.webp"
                                    : item.title ==
                                      "25 Common Travel Mistakes to Avoid"
                                    ? "/blog/25 Common Travel Mistakes to Avoid.webp"
                                    : item.title ==
                                      "A complete guide to Canada ETA (Arrive Can)"
                                    ? "/blog/A complete guide to Canada ETA (Arrive Can).webp"
                                    : item.title ==
                                      "A Complete Guide to Canada ETA"
                                    ? "/blog/A complete guide to Canada ETA.webp"
                                    : item.title ==
                                      "All about the India visa for Indonesian nationals"
                                    ? "/blog/All about the India visa for Indonesian nationals.webp"
                                    : item.title ==
                                      "AUSTRALIA TRANSIT VISA FEES"
                                    ? "/blog/AUSTRALIA TRANSIT VISA FEES.webp"
                                    : item.title ==
                                      "E-Business Visa and Indian Invitation Letter"
                                    ? "/blog/e-business-visa-and-indian-invitation-letter.webp"
                                    : item.title ==
                                      "E-Business Visa For India and Important Documents Required"
                                    ? "/blog/e-business-visa-for-india-and-important-documents-required.webp"
                                    : item.title ==
                                      "E-Business Visa India Validity"
                                    ? "/blog/e-business-visa-india-validity.webp"
                                    : item.title ==
                                      "How to plan a round-the-world trip?"
                                    ? "/blog/how-to-plan-a-round-the-world-trip.webp"
                                    : item.title ==
                                      "India Visa Guide: All You Need To Know"
                                    ? "/blog/India Visa Guide All You Need To Know.webp"
                                    : item.title ==
                                      "Indian Visa for UK Citizens: Fee, Requirements & More"
                                    ? "/blog/Indian Visa for UK Citizens Fee, Requirements & More.webp"
                                    : item.title ==
                                      "Indian business visa for UK citizens - requirements and cost"
                                    ? "/blog/indian-business-visa-for-uk-citizens---requirements-and-cost.webp"
                                    : item.title ==
                                      "Top 12 destinations off the beaten path"
                                    ? "/blog/Top 12 destinations off the beaten path.webp"
                                    : item.title ==
                                      "Top 15 destinations to visit this summer"
                                    ? "/blog/Top 15 destinations to visit this summer.webp"
                                    : item.title ==
                                      "Top 20 Budget Honeymoon Destinations Outside India"
                                    ? "/blog/Top 20 Budget Honeymoon Destinations Outside India.webp"
                                    : item.title ==
                                      "What happens if you overstay your India visa: fines and penalties"
                                    ? "/blog/What happens if you overstay your India visa fines and penalties.webp"
                                    : item.title ==
                                      "Winter Wonderland Wanderlust: Your Ultimate Travel Essentials Guide"
                                    ? "/blog/Winter Wonderland Wanderlust Your Ultimate Travel Essentials Guide.webp"
                                    : item.title ==
                                      "The Ultimate Bucket List: A Generic Travel Guide to Crossing Off Your Dream Destinations"
                                    ? "/blog/The Ultimate Bucket List A Generic Travel Guide to Crossing Off Your Dream Destinations.webp"
                                    : item.title ==
                                      "12 Essential Packing Tips for Traveling with Only a Carry-On Suitcase"
                                    ? "/blog/12-essential-packing-tips-for-traveling-with-only-a-carry-on-suitcase.webp"
                                    : item.title ==
                                      "15 Best Road Trips in the World"
                                    ? "/blog/15 Best Road Trips in the World.webp"
                                    : item.title ==
                                      "25 Best Adventure Destinations in the USA"
                                    ? "/blog/25 Best Adventure Destinations in the USA.webp"
                                    : item.title ==
                                      "A Complete Guide to Armenia eVisa"
                                    ? "/blog/A Complete Guide to Armenia eVisa.webp"
                                    : item.title ==
                                      "A complete guide to Australian ETA"
                                    ? "/blog/A complete guide to Australian ETA.webp"
                                    : item.title ==
                                      "A Complete Guide to Bahrain eVisa"
                                    ? "/blog/A Complete Guide to Bahrain eVisa.webp"
                                    : item.title ==
                                      "A Complete Guide to Djibouti Evisa"
                                    ? "/blog/A Complete Guide to Djibouti Evisa.webp"
                                    : item.title ==
                                      "A Complete Guide to Georgia eVisa"
                                    ? "/blog/A Complete Guide to Georgia eVisa.webp"
                                    : item.title ==
                                      "A Complete Guide to India eVisa"
                                    ? "/blog/A Complete Guide to India eVisa.webp"
                                    : item.title ==
                                      "A Complete Guide to Kenya Evisa"
                                    ? "/blog/A Complete Guide to Kenya Evisa.webp"
                                    : item.title ==
                                      "A complete guide to Madagascar eVisa"
                                    ? "/blog/A complete guide to Madagascar eVisa.webp"
                                    : item.title ==
                                      "A complete guide to New Zealand ETA"
                                    ? "/blog/A complete guide to New Zealand ETA.webp"
                                    : item.title ==
                                      "A Complete Guide to Qatar eVisa"
                                    ? "/blog/A Complete Guide to Qatar eVisa.webp"
                                    : item.title ==
                                      "A complete guide to Saudi Arabia eVisa"
                                    ? "/blog/A complete guide to Saudi Arabia eVisa.webp"
                                    : item.title ==
                                      "A Complete Guide to Sri Lanka Evisa"
                                    ? "/blog/A Complete Guide to Sri Lanka Evisa.webp"
                                    : item.title ==
                                      "A complete guide to Tanzania eVisa"
                                    ? "/blog/A complete guide to Tanzania eVisa.webp"
                                    : item.title ==
                                      "A Complete Guide to the United Arab Emirates (UAE) eVisa"
                                    ? "/blog/A Complete Guide to the United Arab Emirates (UAE) eVisa.webp"
                                    : item.title ==
                                      "A complete guide to Turkey eVisa"
                                    ? "/blog/A complete guide to Turkey eVisa.webp"
                                    : item.title ==
                                      "A complete guide to USA (United States) ESTA"
                                    ? "/blog/A complete guide to USA (United States) ESTA.webp"
                                    : item.title ==
                                      "A complete guide to USA ESTA"
                                    ? "/blog/A complete guide to USA ESTA.webp"
                                    : item.title ==
                                      "A Complete Guide to Vietnam Evisa"
                                    ? "/blog/A Complete Guide to Vietnam Evisa.webp"
                                    : item.title ==
                                      "A Guide to Mexico Tourist Card"
                                    ? "/blog/A Guide to Mexico Tourist Card.webp"
                                    : item.title ==
                                      "A Complete Guide to Azerbaijan eVisa"
                                    ? "/blog/a-complete-guide-to-azerbaijan-evisa.webp"
                                    : item.title ==
                                      "Barcelona Unveiled: A Journey through Culture, Culinary Delights, and Captivating Landmarks"
                                    ? "/blog/Barcelona Unveiled A Journey through Culture, Culinary Delights, and Captivating Landmarks.webp"
                                    : item.title ==
                                      "Best Hiking spots in Australia, know everything"
                                    ? "/blog/Best Hiking spots in Australia, know everything.webp"
                                    : item.title ==
                                      "1Best Holiday Destinations 2022"
                                    ? "/blog/Best Holiday Destinations 2022.webp"
                                    : item.title ==
                                      "Best Romantic Destinations in the World for 2022"
                                    ? "/blog/Best Romantic Destinations in the World for 2022.webp"
                                    : item.title ==
                                      "Cambodia E-Visa & Travel Restrictions"
                                    ? "/blog/cambodia-e-visa-&-travel-restrictions.webp"
                                    : item.title ==
                                      "COVID-19: Latest information about safe travel to Uganda"
                                    ? "/blog/covid-19-latest-information-about-safe-travel-to-uganda.webp"
                                    : item.title ==
                                      "Discover the Enchantment of Bali - A Guide to the Island's Must-Visit Destinations"
                                    ? "/blog/Discover the Enchantment of Bali A Guide to the Island_s Must-Visit Destinations.webp"
                                    : item.title ==
                                      "Enjoy the most while visiting Azerbaijan"
                                    ? "/blog/enjoy-the-most-while-visiting-azerbaijan.webp"
                                    : item.title ==
                                      "Find out about Vietnamese food history"
                                    ? "/blog/Find out about Vietnamese food history.webp"
                                    : item.title ==
                                      "Get to know Vietnam post Pandemic"
                                    ? "/blog/Get to know Vietnam post Pandemic.webp"
                                    : item.title ==
                                      "Indian business visa for UK citizens - requirements and cost"
                                    ? "/blog/Indian Visa for UK Citizens Fee, Requirements & More.webp"
                                    : item.title ==
                                      "Kenya Travel Guidelines and COVID-19 Restrictions"
                                    ? "/blog/kenya-travel-guidelines-and-covid-19-restrictions.webp"
                                    : item.title ==
                                      "Latest Travel Guidelines for Passengers coming to India"
                                    ? "/blog/Latest Travel Guidelines for Passengers coming to India.webp"
                                    : item.title ==
                                      "Morocco Travel Guide| Top 15 Places to Visit in Morocco"
                                    ? "/blog/Morocco Travel Guide Top 15 Places to Visit in Morocco.webp"
                                    : item.title ==
                                      "News About South Africa Electronic Visa Launch"
                                    ? "/blog/News About South Africa Electronic Visa Launch.webp"
                                    : item.title ==
                                      "NEWS ABOUT TUNISIA ELECTRONIC VISA LAUNCH"
                                    ? "/blog/NEWS ABOUT TUNISIA ELECTRONIC VISA LAUNCH.webp"
                                    : item.title ==
                                      "Packing list for a round-the-world trip"
                                    ? "/blog/packing-list-for-a-round-the-world-trip.webp"
                                    : item.title ==
                                      "Plan a visit to Victoria Falls, Zambia"
                                    ? "/blog/Plan a visit to Victoria Falls, Zambia.webp"
                                    : item.title ==
                                      "Qatar Travel Guide (2023) | Top 15 Places to Visit in Qatar"
                                    ? "/blog/Qatar Travel Guide (2023)  Top 15 Places to Visit in Qatar.webp"
                                    : item.title ==
                                      "The Beginner's Bible: A Generic Travel Guide to Making the Most of Your Vacation"
                                    ? "/blog/The Beginner_s Bible A Generic Travel Guide to Making the Most of Your Vacation.webp"
                                    : item.title ==
                                      "The Famous Spiritual Sites in India"
                                    ? "/blog/The Famous Spiritual Sites in India.webp"
                                    : item.title ==
                                      "The benefits and drawbacks of e-visa systems compared to traditional visa processes"
                                    ? "/blog/the-benefits-and-drawbacks-of-e-visa-systems-compared-to-traditional-visa-processes.webp"
                                    : item.title ==
                                      "Things you can’t miss if visiting Qatar"
                                    ? "/blog/Things you can’t miss if visiting Qatar.webp"
                                    : item.title ==
                                      "Things you would like to know while exploring the Pyramids & Sphinx of Egypt"
                                    ? "/blog/Things you would like to know while exploring the Pyramids & Sphinx of Egypt.webp"
                                    : item.title ==
                                      "Top 10 Countries Who Provide on Arrival Visa"
                                    ? "/blog/Top 10 Countries Who Provide on Arrival Visa.webp"
                                    : item.title ==
                                      "Travel Restrictions and Dubai E-Visa"
                                    ? "/blog/travel-restrictions-and-dubai-e-visa.webp"
                                    : item.title == "Turkey Covid-19 Updates"
                                    ? "/blog/turkey-covid-19-updates.webp"
                                    : item.title ==
                                      "United Arab Emirates waits for you!"
                                    ? "/blog/United Arab Emirates waits for you!.webp"
                                    : item.title ==
                                      "Vaccination requirements for Madagascar: What vaccines you need to enter the country"
                                    ? "/blog/Vaccination requirements for Madagascar What vaccines you need to enter the country.webp"
                                    : item.title ==
                                      "Visit the world’s highest 360-degree Infinity pool"
                                    ? "/blog/visit-the-world’s-highest-360-degree-infinity-pool.webp"
                                    : item.title ==
                                      "Wanderlust on a Budget: A Generic Travel Guide to Saving Money and Seeing the World"
                                    ? "/blog/Wanderlust on a Budget A Generic Travel Guide to Saving Money and Seeing the World.webp"
                                    : item.title ==
                                      "What is the difference between a Visa and an eVisa?"
                                    ? "/blog/What is the difference between a Visa and an eVisa.webp"
                                    : item.title ==
                                      "Escape to Winter Bliss: Why Dubai is Your Ideal Getaway"
                                    ? "/blog/Escape to Winter Bliss Why Dubai is Your Ideal Getaway.webp"
                                    : item.title ==
                                      "Discover the Wonders of Changi Airport: Your Ultimate Guide to Making the Most of Your Layover"
                                    ? "/blog3/Discover the Wonders of Changi Airport Your Ultimate Guide to Making the Most of Your Layover.webp"
                                    : item.title ==
                                      "Discover the Magic of Krabi: A Gateway to Paradise"
                                    ? "/blog/Discover the Magic of Krabi.webp"
                                    : item.title ==
                                      "California's Winter Magic: Exploring the Golden State's Snowy Peaks and Sunny Shores"
                                    ? "/blog/Californias Winter Magic Exploring the Golden States Snowy Peaks and Sunny Shores.webp"
                                    : item.title ==
                                      "The Enchantment of Paris: Discovering Love in the City of Light"
                                    ? "/blog/The Enchantment of Paris Discovering Love in the City of Light.webp"
                                    : item.title ==
                                      "A summary of the Russia-Ukraine conflict 2022"
                                    ? "/blog/a-summary-of-the-russia-ukraine-conflict-2022.webp"
                                    : item.title ==
                                      "Complete Zambia Travel Guide"
                                    ? "/blog/Complete Zambia Travel Guide.webp"
                                    : item.title ==
                                      "Dubai Visa for Moroccan Citizenst"
                                    ? "/blog/Dubai Visa for Moroccan Citizens.webp"
                                    : item.title ==
                                      "Dubai Evisa for Algerian Passport Holders"
                                    ? "/blog/dubai-evisa-for-algerian-passport-holders.webp"
                                    : item.title == "Egypt is open for tourism"
                                    ? "/blog/Egypt is open for tourism.webp"
                                    : item.title == "Entry to Zambia"
                                    ? "/blog/entry-to-zambia.webp"
                                    : item.title ==
                                      "Experience the thrilling Safari in Zambia"
                                    ? "/blog/Experience the thrilling Safari in Zambia.webp"
                                    : item.title ==
                                      "How to travel to a country where you don’t speak the language"
                                    ? "/blog/how-to-travel-to-a-country-where-you-don’t-speak-the-language.webp"
                                    : item.title ==
                                      "If you are a US citizen, Madagascar is open for you"
                                    ? "/blog/If you are a US citizen, Madagascar is open for you.webp"
                                    : item.title ==
                                      "Kenya Tourism, Adventure and Wildlife"
                                    ? "/blog/kenya-tourism,-adventure-and-wildlife.webp"
                                    : item.title ==
                                      "Plan your trip to Egypt, the land of pyramids and ancient civilization"
                                    ? "/blog/Plan your trip to Egypt, the land of pyramids and ancient civilization.webp"
                                    : item.title == "Sri Lanka Tourism"
                                    ? "/blog/Sri Lanka Tourism.webp"
                                    : item.title ==
                                      "Sri Lanka Complete Tour Guide"
                                    ? "/blog/sri-lanka-complete-tour-guide.webp"
                                    : item.title ==
                                      "Tanzania- A Paradise of Wildlife Lovers"
                                    ? "/blog/tanzania--a-paradise-of-wildlife-lovers.webp"
                                    : item.title ==
                                      "The Tension Between Russia and Ukraine: Why is it?"
                                    ? "/blog/the-tension-between-russia-and-ukraine-why-is-it.webp"
                                    : item.title ==
                                      "Things you need to know if travelling to Qatar for the FIFA World Cup 2022"
                                    ? "/blog/Things you need to know if travelling to Qatar for the FIFA World Cup 2022.webp"
                                    : item.title ==
                                      "Things You Need to Know While Applying for a New Zealand visa from Dubai"
                                    ? "/blog/things-you-need-to-know-while-applying-for-a-new-zealand-visa-from-dubai.webp"
                                    : item.title ==
                                      "Top 10 destinations to visit this winter"
                                    ? "/blog/Top 10 destinations to visit this winter.webp"
                                    : item.title == "Top things to do in Dubai"
                                    ? "/blog/Top things to do in Dubai.webp"
                                    : item.title ==
                                      "Top 10 places to visit this summer in Kenya"
                                    ? "/blog/top-10-places-to-visit-this-summer-in-kenya.webp"
                                    : item.title ==
                                      "Top 10 things to visit in Australia"
                                    ? "/blog/top-10-things-to-visit-in-australia.webp"
                                    : item.title ==
                                      "Touristic Recommendations for a Madagascar eVisa and Holiday"
                                    ? "/blog/touristic-recommendations-for-a-madagascar-evisa-and-holiday.webp"
                                    : item.title ==
                                      "Vietnam has Removed COVID-19 Restrictions for International Passengers and is issuing eVisas again"
                                    ? "/blog/vietnam-has-removed-covid-19-restrictions-for-international-passengers-and-is-issuing-evisas-again.webp"
                                    : item.title ==
                                      "Sri Lanka Travel Guide: A Journey to the Pearl of the Indian Ocean"
                                    ? "/blog3/Sri Lanka Travel Guide A Journey to the Pearl of the Indian Ocean.webp"
                                    : item.title ==
                                      "How to Spend a Layover in Doha (Qatar): Unveiling the City's Gems"
                                    ? "/blog3/How to Spend a Layover in Doha (Qatar).webp"
                                    : item.title ==
                                      "Unlocking the Mysteries of Ancient Egypt: An Ultimate Guide to Your Unforgettable Journey"
                                    ? "/blog3/Unlocking the Mysteries of Ancient Egypt.webp"
                                    : "/blog2/default_blog.webp"
                                }
                                sizes="(max-width:750px) 50vw, 20wv"
                                fill
                                style={{
                                  objectFit: "cover",
                                }}
                                className="img-fluid"
                              />
                            </div>
                            <h2>{item.title}</h2>
                          </div>
                        </Link>
                        <p>{item.blog_des}</p>
                        <div className="caption">
                          <Link
                            href={"/blog/" + item.blogtitle}
                            className="admin-icon"
                          >
                            <Image
                              alt="Kanan"
                              src={"/img/testi1.png"}
                              sizes="(max-width:750px) 30vw, 15wv"
                              height={30}
                              width={30}
                            />
                            <p className="admin"> {item.by}</p>
                          </Link>
                          <p>{item.date}</p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
            </Row>
            <Row>
              <Col className="d-flex justify-content-end">
                <Pagination
                  count={pageCount}
                  color="primary"
                  page={page}
                  onChange={handleChange}
                ></Pagination>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Blog;
