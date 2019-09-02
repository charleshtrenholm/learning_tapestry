# Kobayashi Maru Takehome Project

### For Learning Tapestry

- [ ] index paginates data
- [x] configurable pagination params
- [x] displays additional data
- [x] details page loads data from wiki api
- [x] project includes tests (jest and enzyme)
- [x] project includes css and css framework (bootstrap)
- [ ] pages are stand-alone HTML
- [x] uses create-react-app
- [x] uses fetch to pull JSON data
- [x] uses react hooks to manage state
- [x] uses react-router to handle routing

I was successful in implementing an app that was able to load and render articles and information based off of wikipedia's API listing recent changes.

If I had more time to complete the project, I would have done the following:

1. __Paginating Recent Edits__
I was able to get it to load previous pages, but I did not have enough time to really work through the logic on how to paginate properly. As it stands, when you click 'previous' and 'next', it will load data from an hour earlier, and set the first edit you see to be the one after the last one on the page that was loaded before. This does not give the user predictable pagination results. If allowed more time, I would have tried to figure out some logic with the `&rclimit` query

2. __Stand Alone HTML__
My idea of doing this while still using create-react-app was sort of convoluted but may have worked. If given more time I would have tried to create a separate html file for the individual page edit, and have react loaded via a cdn so that it could be opened straight into the browser. I was thinking of having script tags with empty src attributes that would load the cdn url when another script checks that 'react' is not defined. I'm not sure how I would have handled the routing to a completely separate html page for a sinlge-page app (maybe this was what was part of what makes it a Kobayashi Maru), but I was imagining I would also programmatically sub out the react `<Link>` tags with standard `<a>` tags with hrefs to the other file.

3. __Tests__
My tests were not nearly thorough enough, and some of them had quirks which did not let them pass. I was trying to test if an object had default state, but, having never specifically used enzyme with reack hook components, I was getting an error saying I can only call state() on class components. I would add more testing functionality to make sure that we get the right number of edits back according to the state of our user configured preference, as well as more tests making sure that the input values were correct

4. __Safe Extract Rendering__
One thing that I would have liked to do more safely was render the html that comes from wikipedia only if it doesn't have script tags. It would be better to go through and actually parse all of the values that come back in the second API call before rendering it with `dangerouslySetInnerHTML` and make sure that there is no malicious code that automatically goes into our DOM tree. It would also be useful to set up a test that includes script tags that passes if the output is not actually rendered.

5.__Timepicker UI and functionality__
I installed a timepicker quickly in order to prototype how picking a user configurable start time would work. I found one with a good reputation on github, but was surprised at how difficult it was to customize the UI styles. I left the styles as is but would love to go back and either figure out how to theme it with bootstrap, or make my own custom picker that works with the theme. Additionally the input validation seemed like it had trouble actually working. It would release null when the time was bad, the the user did not see when the event value was actually null, making the user experience confusing

Thank you for the opportunity you have given me to work on this project. I have never used the wikiMedia API before and loved how fun and powerful it is. I am excited to dig deeper into different possibilities with it.
