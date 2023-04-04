# Weather App Redo

This is a weather app written with React using useState, useEffect, useCallback, useContext and memo. It is defaulted to Frisco, TX. I will add functionality to change the location at a later date.

![Alt text](https://www.rickbeyer.dev/images/screenshots/weather-app.jpg "Weather App")

### Using Axios

I used Axios to make the request for the weather data.

### useContext

Here I implemented useContext so I could stop prop-drilling and increase performance. Now, child components can access the context data without parent components re-rendering.

### useCallback, React.memo

To prevent unnecessary re-renders, I have added React.memo. Additionally, I'm using useCallback to prevent functions from being recreated.

### FontAwesome React Icons

Using these icons for the UI. As for the weather icons (cloudy, rainy, etc.), before, I was storing every image of the icons in the app. Now, I just refer to weatherbit.io's website for the icon.
