# ItemManager

This repository contains an Angular WebApp simulating an Item Manager, allowing to search for items, sort the displayed ones and add them to a favorites list.

# How to use it
## Run demo locally

If you want to run the webapp on your computer, download the repository and, on the root folder, run:

```
#First
npm install # In order to install all the dependencies
#Then
npm run ng serve # In order to run the angular app on development mode
npm run heroku-postbuild && npm run start # In order to build and run the angular app on production mode

```
By default, the app on development mode runs on localhost:4200 and the app on production mode on localhost:8080

## Live demo

Also, a live demo of the tech test is accessible from the following link: http://item-manager-tech-test.herokuapp.com/home

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Architechture and development choices

The application is structured using the following folders:

- **api-mocked**: Contains the data provided for the test. Instead of requesting it from the provided S3 bucket, it's loaded directly in memory, as a mocked response. The services are requesting from the data present in this folder.
- **Views**: Contains the Home component, the main view of the application. Uses lazy loading and resolvers in order to improve the performance. 
- **Components**: Several ones present:
  - _item-card_: The card that displays the item data (picture, description, price,...). The same component is used in the main feed and in the favorites modal, showing different amount of info depending on the view displayed. Also, renders the _no-items-message_ component if there are no items to display .
  - _item-search_: Its responsability is to track the search input from the user and emit it to the parent component. It is used also on the main feed and on the favorites modal, changing the search field regarding the view from where it is used (searching by any field except image on the main feed and searching by title on the favorites modal).
  - _item-favorite-modal_: Contains the _item-card_ and the _item-search_ components. Uses the _favorite-items_ service to know what to display. 
  - _item-sort_: Displays a tooltip to allow to sort by different fields and orders. Emits the desired sorting to the parent component.
- **Models**: Contains the different constansts and interfaces for the different components (static texts, types,...)
- **Pipes**: All the pipes used are pure. They contain most of the business logic needed on the webApp since there's no backend implementing it. Their responsibility is transform the input data with the business criteria (order-by pipe will sort the data depending on the desired criterias, filter-search filters by the desired input and field,...).
- **Services**: Here, resolvers handle the routing redirection. The other services handle different responsibilities:
  - Favorite-items service: Stores the items that have been favorited.
  - Item manager service: Returns the mocked data.
  - Utils service: Just contains the TrackBy function, to improve the performance on the ngFor directives.
  
## Development choices
- _Material Angular_ component library is used to implement the different icons and modals on the application.
- SetTimeout has been used to pretend to have a more realistic navigation, displaying a Spinner while the the data is being prepared to be displayed.
- Scss has been used as CSS preprocessor.
- Has been built with responsive design in mind
- Polyfills for IE11 have been used.
- Click-outside directive installed apart to handle the sorting tooltip behavior.
- Statement coverage at 100%.

## TODOs
- Currently, there's no option to turn back after a search has been done. Implementing a cross that resets the main feed could have been an option.
- Has not been thought with mobile-first design in mind. Some texts could have been better adapted for mobile.
