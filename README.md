# Description-Amenities-About_the_Building

This repo holds the information for a single component of a listing page of a replica site modeling popular real estate website StreetEasy.com. The entire listing page utilizes microservice architecture and this component itself was designed as a full-stack service with a database and a web server that relays information between a client application and a RESTful API.

This particular component renders an interactive description box consisting of a listing information table, description text, amenities, and about-the-building information. Multiple description boxes exist within the database of the application and each one is rendered on the client applicaton based on a corresponding listing ID number between 0 and 99. The higher the listing ID, the more features the listing will have and, thus, more will be loaded to the client. 

A team of developers each designed individual components and created them as full-stack applications, ultimately collaborating to create a complete listing page. The final application can be found [here](https://github.com/Team-Elysium/real-estate-listing-page).

## Setup
- **Dependencies**
  - React framework for front-end
  - Node and Express framework for web
  - MongoDB and Mongoose ODM for database
- **Setup steps**
 1) Create a server instance to run the application
     - Ubuntu 18.04 is recommended 
 2) Allow traffic on the server at ports 22 (SSH) and 80 (HTTP)
 3) Create SSH connection
 3) Install [Node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) and [Git](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-18-04) 
 4) Run command "git clone https://github.com/Team-Elysium/Description-Amenities-About_the_Building.git"
 5) Run command "sudo npm install"
 6) Run commands "npm run react-dev" and "npm start" 
 7) Service should be up at running!
  

## The Team 
**Developers**
- [Jared Ellison](https://github.com/jaredellison) 
  - [Image Carousel](https://github.com/Team-Elysium/image-carousel-component)
- [Muhammad Mosaad](https://github.com/mowithafro) 
  - [Similar Listings](https://github.com/Team-Elysium/Similar-Listings-Recommendations)
- [Sujin Lee](https://github.com/slee1016)         
  - [Listing Details](https://github.com/Team-Elysium/listing-details)

**Technical Mentor**
- [Trenton Going](https://github.com/trentgoing)
