# HackerNewsFeed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development Approach

The UI is built with custom scss for Responsivness.

For storing and managing data, Behaviour Subject is used in services for state management.

News Feed at the start is loaded base on 'front_page' tag and the corresponding is stories loaded based on 'story' tag.

Upvotes is stored in local storage and on browser refresh the updated upvotes is assigned to the given story.

Deleting/Hiding the news is taking place in newsfeed service.

The project PWA compatible please run the following commands to run it on the Localhost.
1. `npm install --global http-server`
2. `ng build --prod`
3. `http-server -p 8080 -c-1 dist/HackerNewsFeed`

Test Cases is written for AppComponent.

Line chart is developed using `angular-google-charts`.
