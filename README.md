# Solar System

Learn about the Solar System here!

<br/>
<br/>

<h2>About</h2>

To quickly set up this project, I chose VueJS. I have also chosen this framework over ReactJS as I want to keep this project at a small scale. Yet, with much faster rendering due to the heavy use of animations. 

The core focus of this project is on its design, style, and animations, with the intention of experimenting and understanding the fundamentals of CSS Animations and less on JavaScript framework. I wanted to create an app that has animations that could go on indefinitely. And thus, I figured an educational and interactive environment like the Solar System would be the ideal fit.

<br/>
<br/>

<h3>How to navigate?</h3>

For aesthetic reasons, especially with the rule of thirds, I intentionally placed the centre position of the Solar System (aka the Sun) one-third from the left of the screen. 

![image](https://user-images.githubusercontent.com/87306585/198903895-a82832fd-25d9-47d6-9dd2-bc12ff188fbc.png)
<br/>
(Preview of the Solar System)

While the size and position of the Solar System will adjust in accordance with the size of your screen, for the best experience, I strongly recommend viewing the app in a large, landscape screen.

If you click on any of the planets, Sun or Asteroids, a description box will appear giving you basic details of that selected object

![image](https://user-images.githubusercontent.com/87306585/198904002-6a7788b8-397f-479b-ab9a-56123a59896e.png)
<br/>
(A basic description of our planet Earth)

You can close this description box by clicking on the same object or hit the close button on the top-right corner of the box.

<br/>
<br/>

<h3>Settings</h3>

Where you want to make some adjustments, click on the settings icon found at the top-left of your screen.

![image](https://user-images.githubusercontent.com/87306585/198902795-3624da46-09d1-4513-a070-ce57c12d0f05.png)

The settings have two main features: 
1. Orbit, which hides / unhides the dashed borders of the planets orbiting the sun. 
2. Animation, which pauses or resumes the animation.

The app also hides a music visualizer at the bottom of the screen. If this is your first time visiting the website, the music should automatically play in the background. Though, some internet browsers may disable its autoplay feature. 

By hovering your mouse over the bottom screen, you can unhide the music visualizer, which allows you to pause, play or resume music.

![image](https://user-images.githubusercontent.com/87306585/198904199-66c44c44-9ab6-41f3-a1f5-24bed84d7862.png)
<br/>

<br/>
<br/>

<h3>The Technicalities</h3>

Because there are multiple planets involved, I knew I would be repeating the same CSS key-value pairs for every planet. Each planet will have the same key properties yet different values relating to its position and orbiting animation. For instance, while all planets orbit around the Sun, the ones closer to the Sun should have faster duration of orbiting than the ones further away.

To reduce the length of the code, I installed Sass. This allows me to group CSS key properties into reusable codes in the form of a Mixin. I listed the values of each planet in a variable and then loop through these values by calling on the Mixin.

And instead of using good old JavaScript, I decide to use TypeScript as I am still learning this language at the time I am building this project.

<br/>
<br/>




