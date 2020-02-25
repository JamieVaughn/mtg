# MTG Booster Pack Showcase

## Experiments with various modern, lightweight templating libraries to render Magic the Gathering cards

This project is a way to take inventory of the best, lightweight web templating tools available today. I'm ignoring the larger frameworks like React, Vue, Angular and those with a mandatory build step. I'm only considering small (<1MB), client-side packages that are concerned with templating and hydrating the DOM with data and have a minimal event handling integration.

In 2018 - 2019, I used Handlebars to create a customer support application embedded in Zendesk that accepted a search query and would GET customer profiles from a database as a reference for an agent fielding support calls. Some buttons could POST small updates to the customer profile as well. It worked fine, but I soon regretted the Handlebars choice as I learned about the emerging templating tools building on the tagged template string concept that would have been a better fit for the task... and in a smaller bundle size to boot! 

Lit-HTML was among the first of this class of compact templating libraries to catch my eye, but many other such libraries soon followed. I devised a small templating task of rendering a _Magic: The Gathering_ card booster pack as a way to run each of these libraries through its paces. So with one css style sheet I can try out each view library purely for its templating chops. Here are the contenders:

### Lightweight templating libraries demonstrated here so far:
* Lit-HTML [demo](https://wjv.io/mtg/lit-html)
* Lit-Element [demo](https://wjv.io/mtg/lit-element)
* Preact [demo](https://wjv.io/mtg/preact)

### My opinion on each library for small scale data templating purposes:
 
| Library       | Rating  | Size (unpacked) | Pros    | Cons    |
| :-----------: |:------- | :-----: | :-----: | :-----: |
| Handlebars*   | ★☆☆☆☆  | 2.2MB | HTML Templates | Heaviest Restricted Template Logic, No JSX, No Shadow DOM |
| Lit HTMl      | ★★★☆☆  | 519kB | Flexible, Composability        | HTML strings, No Shadow DOM |
| Lit Element   | ★★★★☆  | 222kB | Web Components, Stateful, Very Light | Verbose Class Syntax, HTML Strings |
| Preact        | ★★★★☆ | 704kB | Composibility, htm lib, Hooks, componentDidCatch, createContext    | No Shadow DOM |
| Marko         | ★★★☆☆ | 77.5kB | Web Components, Lightest    |  |
| Inferno         | ★★★☆☆ | 77.5kB | Web Components, Lightest    |  |
| Riot         | ★★★☆☆ | 77.5kB | Web Components, Lightest    |  |
| SlimJS        | ★★★☆☆ | 77.5kB | Web Components, Lightest    |  |
| SkateJS       | ★★★☆☆ | 68.1kB | Web Components, Lightest    |  |
| HauntedJS     | ★★★☆☆ | 74.6kB + 519kB| "Hooks for Web Components"    |  Uses Lit-HTML|


###### *Handlebars not demonstrated here as it does not qualify with 1MB size limit, but rating is based on prior experience in professional project and is included for comparison purposes since comparing to it was the motivation for this project.

### A screenshot of the App:
![App Screenshot](/img/demo.png)

Some feature highlights:
* Data fetching, hydrating and loading spinner
* Event handling:
    * Mouse over flip animation 
    * Click header to fetch new pack
* Render Mana Icons Component: 
    * Tested limits of templating logic capabilities 
    * Showed ease of component reusability/composability in Header & Card Text

## API used for data for this templating experiment
* https://docs.magicthegathering.io/#documentationgetting_started

### Other APIs to incorporate:
* https://mtgjson.com/#how-it-works
* https://scryfall.com/