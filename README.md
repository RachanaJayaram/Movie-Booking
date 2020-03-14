# Movie Booking

## Project Description
The project is an online movie booking website where a user can register, login, and book tickets for a movie of their choice. The user can choose the language of the movie, the date and timings of the movie, the theatre in which they want to watch it and the seats of their choice after which the seats become unavailable for the next user. The bill and ticket is generated at the end.

The project demonstrates the use of different web technologies through which we can make a web-page more dynamic.  


#### Technologies Used
The Different web technologies used in our project are

* Java-script
* CSS
* HTML  and HTML5 tags
* PHP
* MySQL
* DOM
* LocalStorage
* Geo-location
* Time module

#### List of Functionalities

##### The functionalities used in the front end are -

* In the Registration Page:  A Javascript function to check the strength of the password entered, which also checks whether the entry into the password field matches the entry in the re-enter password field.

* In the Login Page: Immediately after the login the username of the user is stored in local storage to be used later while generating the ticket. In the subsequent pages the movie name, theatre, timings and seats selected are also stored in the local storage for later use in creating the ticket. After the login page using geolocation , your approximate location is detected and stored in the local storage for your use.

* In the Movie List and the Exclusive Movie List Page: The figure tag in html is used to add the image along with the caption. An onclick event on the Exclusive movies or on the image redirects to the corresponding page.

* In the Trailer Page : The iframe tag is used to play the the trailer of the selected movie which is sourced from youtube.  

* In the Select Theatre Page : Iframe is used again to play the trailer. GeoLocation is used to detect your current city and your current location is displayed. Javascript is used to display the list of theatres and timings corresponding to the date the user chooses. If the chosen date is today the show times that come before the current time are grayed out and booking is not available for that slot

* In the Screen Page (Seat selection) : 196 buttons corresponding to seats in the theatre are created using DOM in javascript.On clicking the seat the seat “selected”.Depending on whether the seat is in the premium region or the executive region the price is added to the bill and the count of the number of seats selected is incremented. On re-clicking the “selected” seat  it becomes “unselected” and the bill amount is updated. If the seats have been booked by previous users it is grayed out and is “unavailable” for booking.

* In the Ticket Page a summary of the transaction is given based on the selection of seats by the user in the previous section, the total bill amount and the seats corresponding to the user’s selection are displayed. After the user opts to move to the next page the local storage is cleared.                                                                                                                                
##### The functionalities used in the back end are -
* Connecting to the Database to check whether the table containing the available seats for all listed movies at all times is present, if not it creates the said table.
* In the Registration Page: Using SQL database we check whether a particular user has already been registered or not. If the account is already present in the database it asks the user to go to the login page, using different techniques to redirect the current session to different pages based on the user’s choice.
* In the Login Page: We have used PHP form validation. If the data entered is valid the user is redirected to the next page.

