let topTitleDiv =
  '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' +
  "<h4>2024 Fall &nbsp | &nbsp Data Visualization &nbsp | &nbsp Final Project</h4>";

let titleDiv =
  "<h1>NYC Apartment Energy Usage and Property Prices</h1>";

let question =
  "<h1>When you rent or purchase an apartment, have you ever imagined how much energy your unit will cost?</h1>";

let bylineDiv = "<h5>By John Masataka Jiang  &nbsp | &nbsp  Instructor: Jia Zhang  &nbsp | &nbsp  Columbia University GSAPP</h5>";

let descriptionDiv =
  // '<p>This project aims to uncover and visualize the correlations between annual energy usage per square foot and the price per square foot of apartments across New York City. </p>' +

  // "<p>By doing so, we seek to provide potential renters, buyers, and policymakers with a clearer understanding of energy efficiency's impact on living costs and identify trends that could inform future urban planning and sustainability initiatives</p>" + 

  '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' +

  question +

  //'<p>Data Sources 1: Annual energy usage per square foot for apartments in NYC</p>' +
  //'<p>Data Sources 2: Price per square foot for apartments in NYC</p>' +

  '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' +

  "<p style='text-align:center'>Welcome to New York! <br>▼</p>";

let footerDiv =
  '<p>This story is based on data by the <a href="http://placeholder.html">PlaceHolder Authority</a> and <a href="http://placeholder.html">PlaceHolder Authority</a>.</p>' +
  '<p>2024 Fall | Data Visualization | Final Project | Author: John Masataka Jiang | Instructor: Jia Zhang</p>';

let divChapter1 =
  "<h3>Annual electricity usage per square foot for each apartment in NYC</h3>" +
  '<img src="images/electricity.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: NYC Mapor\'s Office of Climate & Environmental Justice</a></p>' +
  "<p>In 2022, (John: the current data is a placeholder, will change them to per sqft later) the annual electricity usage in each apartment in New York ranged from 13,112.2 to 40,280,213.3 kilowatt-hours (kWh), with a median of 986,685.6 kWh. This value is significantly higher than the average electricity usage from 2011 to 2021. </p>";

let divChapter2 =
  "<h3>Property Price per square foot for each apartment in NYC</h3>" +
  '<img src="images/price.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

// let divChapter3 =
//   "<h3>Case Study: A Pre-War Apartment</h3>" +
//   '<img src="images/apartmet_prewar.webp">' +
//   '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
//   "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

let divChapter3 =
  "<h3>Cluster Chart: Annual Electricity Usage / Property Price</h3>" +
  // '<img src="images/apartmet_prewar.webp">' +
  // '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  '<iframe src="cluster_electricity_price.html" style="border: none; width: 1000px; height: 1000px;"></iframe>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

let divChapter4a =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Case Study: An Expensive Apartment with Low Electricity Usage: 900 Fifth Avenue</h3>" +
  '<img src="images/900 Fifth Avenue_2.webp">' + 
  '<img src="images/900 Fifth Avenue_3.webp">' + 
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'><a href='https://qri.cloud/nyc-transit-data/turnstile_daily_counts_2020'>Image Credit: PlaceHolder</a></p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder.</p>" +
  //'<div style="max-width:600px; margin-left:auto; margin-right:auto"><iframe title="vimeo-player" src="https://player.vimeo.com/video/529512696" width="600" height="277.5" frameborder="0" allowfullscreen></iframe></div>' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder.</p>";

let divChapter4b =
  "<h3>Case Study: A Cheap Apartment with High Electricity Usage: 305 East 140th Street</h3>" +
  '<img src="images/305 East 140th Street_3.png">' +
  '<img src="images/305 East 140th Street_2.webp">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder. </p>";

let divChapter5a = //temp
  "<h3>Chapter 5a: Same Electricity Different Price</h3>" +
  '<img src="images/price.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

let divChapter5b = //temp
  "<h3>Chapter 5b: Same Price Different Electricity</h3>" +
  '<img src="images/price.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

let divChapter6 =
  "<h3>Chapter 6: Natural Gas</h3>" +
  '<img src="images/electricity.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: NYC Mapor\'s Office of Climate & Environmental Justice</a></p>' +
  "<p>In 2022, (John: the current data is a placeholder, will change them to per sqft later) the annual electricity usage in each apartment in New York ranged from 13,112.2 to 40,280,213.3 kilowatt-hours (kWh), with a median of 986,685.6 kWh. This value is significantly higher than the average electricity usage from 2011 to 2021. </p>";

let divChapter7 =
  "<h3>Chapter 7: Natural Gas, Price</h3>" +
  '<img src="images/price.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

let divChapter8 =
  "<h3>Cluster Chart: Annual Natural Gas Usage / Property Price</h3>" +
  // '<img src="images/apartmet_prewar.webp">' +
  // '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  '<iframe src="cluster_natural_gas_price.html" style="border: none; width: 1000px; height: 1000px;"></iframe>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

let divChapter9a =
  "<h3>Case Study: An Expensive Apartment with Low Natural Gas Usage: 907 Fifth Ave</h3>" +
  '<img src="images/907 Fifth Ave_1.jpg">' +
  '<img src="images/907 Fifth Ave_2.jpg">' +
  // "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'><a href='https://qri.cloud/nyc-transit-data/turnstile_daily_counts_2020'>Image Credit: PlaceHolder</a></p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder.</p>" +
  //'<div style="max-width:600px; margin-left:auto; margin-right:auto"><iframe title="vimeo-player" src="https://player.vimeo.com/video/529512696" width="600" height="277.5" frameborder="0" allowfullscreen></iframe></div>' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder.</p>";

let divChapter9b =
  "<h3>Case Study: A Cheap Apartment with High Natural Gas Usage: 272 east 7th street</h3>" +
  '<img src="images/272 east 7th street_1.png">' +
  '<img src="images/272 east 7th street_2.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder. </p>";

let divChapter10a = //temp
  "<h3>Chapter 10a: same</h3>" +
  '<img src="images/price.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

let divChapter10b = //temp
  "<h3>Chapter 10b: same</h3>" +
  '<img src="images/price.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

//const map = new mapboxgl.Map({
//container: 'map',
//style: 'mapbox://styles/mapbox/dark-v11', 
//center: [-98.5795, 39.8283], 
//zoom: 3, 
//maxBounds: [
//[-74.2591, 40.4774], 
//[-73.7002, 40.9176]  
//]
//});

var config = {
  style: "mapbox://styles/johnmasataka/cm3hsqpof007101r26ev52mye", //"mapbox://styles/johnmasataka/cm2m8nmv7002401qighq4h03p",
  accessToken: "pk.eyJ1Ijoiam9obm1hc2F0YWthIiwiYSI6ImNseDl0ZnByMzJ1cnQyam9lbnB5ajQ3d3EifQ.vDNx6tuvH4CxRBRu-Tt0Tg",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "dark",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    //chapter 1: electricity
    {
      id: "electricity",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-74, 40.725], //[-74, 40.725]
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 1, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "electricity", opacity: 0, duration: 300 },
      ],
    },
    //chapter 2: price     
    {
      id: "electricityPrice1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 1, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price", opacity: 0, duration: 300 },
      ],
    },
    //chapter 3: cluster 
    {
      id: "electricityPrice2",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,//14
        pitch: 0,//10
        bearing: 0,//-7
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 1, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price", opacity: 0, duration: 300 },
      ],
    },
    //chapter 4a: h price, l electricty     
    {
      id: "electricityPriceCase1",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4a,
      location: {
        center: [-73.966715, 40.771999], 
        zoom: 18,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 1, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        // { layer: "price_large", opacity: 0, duration: 300 },
      ],
    },
    //chapter 4b: l price, h electricty  
    {
      id: "electricityPriceCase2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4b,
      location: {
        center: [-73.924464, 40.811508],
        zoom: 18,
        zoomSmall: 14,
        pitch: 40,
        bearing: 8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 1, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_large", opacity: 0, duration: 300 },
      ],
    },

    //chapter 5a: same price, diff electricity     
    {
      id: "electricityPrice3",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5a,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 1, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price", opacity: 0, duration: 300 },
      ],
    },

    //chapter 5b: same electricity, diff price    
    {
      id: "electricityPrice4",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5b,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 1, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price", opacity: 0, duration: 300 },
      ],
    },

    //chapter 6: natural gas     
    {
      id: "naturalGas",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "natural_gas", opacity: 1, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "natural_gas", opacity: 0, duration: 300 },
      ],
    },

    //chapter 7: natural gas, price    
    {
      id: "naturalGasPrice1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 1, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
      ],
    },

    //chapter 8: cluster    
    {
      id: "naturalGasPrice2",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter8,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 1, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
      ],
    },

    //chapter 9a: h price, l natural gas     
    {
      id: "naturalGasPriceCase1",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter9a,
      location: {
        center: [-73.966846, 40.772107], 
        zoom: 19,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 1, duration: 300 },
      ],
      onChapterExit: [
        // { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
    },
    //chapter 9b: l price, h natural gas  
    {
      id: "naturalGasPriceCase2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter9b,
      location: {
        center: [-73.977293, 40.723453], 
        zoom: 19,
        zoomSmall: 14,
        pitch: 40,
        bearing: -8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 1, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
    },

    //chapter 10a: same price, diff electricity     
    {
      id: "naturalGasPrice3",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter10a,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 1, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
      ],
    },

    //chapter 10b: same electricity, diff price    
    {
      id: "naturalGasPrice4",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter10b,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 1, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
      ],
    },

  ],

};