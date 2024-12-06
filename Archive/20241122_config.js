let topTitleDiv = "<h4>2024 Fall | Data Visualization | Final Project</h4>";

let titleDiv =
  "<h1>NYC Apartment Energy Usage and Property Prices</h1>";

let bylineDiv = "<p>By John Masataka Jiang   |   Instructor: Jia Zhang   |   Columbia University GSAPP</p>"; 

let descriptionDiv =
  '<p>This project aims to uncover and visualize the correlations between annual energy usage per square foot and the price per square foot of apartments across New York City. </p>' +

  "<p>By doing so, we seek to provide potential renters, buyers, and policymakers with a clearer understanding of energy efficiency's impact on living costs and identify trends that could inform future urban planning and sustainability initiatives</p>" +

  //'<p>Data Sources 1: Annual energy usage per square foot for apartments in NYC</p>' +

  //'<p>Data Sources 2: Price per square foot for apartments in NYC</p>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<br>' +
  '<p style="text-align:center">Scroll Down to the Story<br>▼</p>';

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

let divChapter3 =
  "<h3>Case Study: A Pre-War Apartment</h3>" +
  '<img src="images/apartmet_prewar.webp">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, </p>";

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Case Study: A Pre-War Apartment</h3>" +
  '<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/price_growth_1.png"></div>' +
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'><a href='https://qri.cloud/nyc-transit-data/turnstile_daily_counts_2020'>Image Credit: PlaceHolder</a></p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder.</p>" +
  //'<div style="max-width:600px; margin-left:auto; margin-right:auto"><iframe title="vimeo-player" src="https://player.vimeo.com/video/529512696" width="600" height="277.5" frameborder="0" allowfullscreen></iframe></div>' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder.</p>";

let divChapter5 =
  "<h3>Case Study: A Pre-War Apartment</h3>" +
  '<img src="images/apartment_luxury.jpg">' +
  '<p class="imageCredit"><a href="https://climate.cityofnewyork.us/topic/energy/">Image Credit: PlaceHolder</a></p>' +
  "<p>PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder. </p>";

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
  style: "mapbox://styles/johnmasataka/cm2m8nmv7002401qighq4h03p",
  accessToken: "pk.eyJ1Ijoiam9obm1hc2F0YWthIiwiYSI6ImNseDl0ZnByMzJ1cnQyam9lbnB5ajQ3d3EifQ.vDNx6tuvH4CxRBRu-Tt0Tg",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "overallMap",
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
      onChapterEnter: [],
      onChapterExit: [], //what will do when chanpter enter and exit while using website 
    },
    {
      id: "incomeUnderlay",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1, //set as 0 if you wanna hide the layer while entering the chapter
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "elmhurstHospital",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-73.958877, 40.809187],
        zoom: 18,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "weekdayTrips",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-73.958877, 40.809187],
        zoom: 18,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "southBronx",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-73.981364, 40.766161],
        zoom: 16,
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
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};