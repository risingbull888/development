# Development

### Link to Deployed Website
If you used the stencil code, this is `https://risingbull888.github.io/development`

### Goal and Value of the Application
My application 'The Garage' is website for wealthy car collectors to choose their showcase cars, with the ability to sort
and filter by name, horsepower, and their colors. These functionality make it easier for them to choose what cars to 
showcase during a swanky exotic car exhibition they attend every season. The user can filter through different colors and
add the cars they want for the showcase and see the overall horsepower of their choices combined in order to adhere to the
cumulative horsepower maximum set for each exhibition. In the future more options and information can be added onto the cards.

### Usability Principles Considered

I made sure that minimum widths and heights were set for each card to make sure that they could still be viewed clearly
at different screen sizes. The colors chosen are easy to read and will not have contrast errors. I used a hierarchy for
text sizes and styles so the user can differentiate between the importance of the information. I put the side bar on the
right so that it is easy to try out different filters and sorting to find the car they feel is suitable with ease. The
side bar is always on the screen with the showcase cars displaying below it so that the user can always refer to the cars
they have already added. I also chose to use accordion menus so that the user could hide the many options if they wanted
to focus on a few characteristics, and also prepares for future implementation of more sorting options when there are more
data about the cars (Year, Engine Type, Vehicle Type etc.)

### Organization of Components
All text, cards and other elements are aligned for ease of reading. I used a grid to organize the main components on the
page with the header of 'The Garage' as an exception. The CarCards are put into one column and the sidebar in the other.
The CarCards themselves are organized using a simple grid and have text aligned left to adhere to reading conventions.

### How Data is Passed Down Through Components

The app.js is the top-level, containing access to all the other elements of most importantly the CarCard and Sidebar. The
The data of the cars are for the purposes of the demo stored in the App.js but should be imported through a .csv in the
future when there are more cars. Within the app.js there are states for the showcase, totalHP, color, sortname, and sortHP.
Showcase is the list of chosen showcase cars, total HP is total horsepower calculated in showcase cars, color is the color
of the car, sortname is to indicate its sorting alphabetically, and sortHP is to indicate sorting by Horsepower ascending.

Various functions then control these states according to the needs of the user. The data within app.js is passed into the
CarCards for each different car, showing the image, names, horsepower, and color/s of the car. The sidebar then tells the
app information on user clicks to change states and to indicate whether to filter or sort accordingly to the information
of the cars.

### How the User Triggers State Changes
The user can trigger state changes through clicking the 'add to showcase' button which will change the showcase state.
When they click add to showcase, an onClick triggers function calls that adds or removes the car from the list of showcase
cars. They can also click the checkboxes on the sidecar to change the filter modes, different colors, and sorting options. By clicking
any of these options, onChange triggers function calls that change the display of the CarCards, by removing, adding, or sorting
them into the desired outcome.
