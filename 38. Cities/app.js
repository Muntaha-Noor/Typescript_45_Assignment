"use strict";
function describe_city(city, country = "DefaultCountry") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan");
describe_city("Berlin", "Germany");
describe_city("sydney");
